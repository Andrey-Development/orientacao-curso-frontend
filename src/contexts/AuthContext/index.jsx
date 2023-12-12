import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import Modal from '../../components/Modal';
import { QuestsContext } from '../QuestsContext';

// Criação do Contexto de Usuário
export const UserContext = createContext();

// Componente Provider
export const UserProvider = ({ children }) => {
    const navigate = useNavigate();

    const [bearerToken, setBearerToken] = useState(null);
    const [loading, setLoading] = useState(false);
    const [ranking, setRanking] = useState(null);
    const [schools, setSchools] = useState(null);
    const [signed, setSigned] = useState(false);
    const [modal, setModal] = useState(null);

    const [user, setUser] = useState({
        'name': '',
        'email': '',
        'password': '',
        'password_confirmation': '',
        'school_id': null,
        'address': {
            'country': '',
            'state': '',
            'city': '',
            'neighborhood': '',
            'street': '',
            'number': null,
            'complement': '',
            'cep': ''
        }
    });

    const resetUser = () => {
        setUser({
            'name': '',
            'email': '',
            'password': '',
            'password_confirmation': '',
            'school_id': null,
            'address': {
                'country': '',
                'state': '',
                'city': '',
                'neighborhood': '',
                'street': '',
                'number': null,
                'complement': '',
                'cep': ''
            }
        });
    }

    const fectSchools = async () => {
        try {
            const { status, data } = await api.get("students/get-schools");
            if (status == 200) {
                setSchools(data);
            }
        } catch (e) {
            console.log("catch fectSchools: " + e);
        }
    }

    // Função para fazer login do usuário
    const logIn = async () => {
        setLoading(true);

        try {
            await api.post(`students/auth/login`, {
                email: user.email,
                password: user.password
            }).then((res) => {
                if (res.status == 200) {
                    setBearerToken(`${res.data.type} ${res.data.token}`);
                    fetchUser(`${res.data.type} ${res.data.token}`);
                    setSigned(true);
                    navigate('dashboard');
                } else {
                    console.log('else then login: ' + res);
                }
            });

        } catch (e) {
            const { status } = e.response;
            const { errors } = e.response.data;

            if (status == 400) {
                errors.forEach(element => {
                    if (element.message == "E_INVALID_AUTH_PASSWORD: Password mis-match") {
                        alert("Senha inválida!");
                        setUser({ ...user, password: '' });
                    }
                    if (element.message == "E_INVALID_AUTH_UID: User not found") {
                        alert("E-mail incorreto ou não cadastrado!");
                    }
                });
            } else {
                console.error('else catch login: ' + e);
                setLoading(false);
            }
        }
    }

    // Função para fazer logout do usuário
    const logOut = () => {
        setSigned(false);
        setBearerToken(null);
        resetUser();
    }

    const fetchUser = async (token) => {
        try {
            await api.get(`students/email/${user.email}`, {
                headers: {
                    Authorization: token
                }
            }).then((res) => {
                setUser(res.data);
                console.log(res.data);
            });
        } catch (e) {
            console.error(e);
        }
        setLoading(false);
    }

    const createStudent = async () => {
        setLoading(true);

        await api.post('students', user).then((res) => {
            if (res.status == 201) {
                logIn();
                SumUserPoints(user.email, 25);
            }
        }).catch(({ response }) => {
            const { status, data } = response;
            if (status == 422) {
                Object.values(data.errors).forEach(element => {
                    if (element.rule == "unique" && element.field == "email") {
                        alert("Este E-mail já está cadastrado!");
                        navigate('cadastre-se');
                    }
                });
            } else {
                console.log('status: ' + status + ' catch create student: ' + data.errors);
            }
            setLoading(false);
        });
    }

    const SumUserPoints = async (email, points) => {
        setLoading(true);
        try {
            const { status, data } = await api.post('/students/sum-user-points', {
                email: email,
                points: points,
            }, {
                headers: {
                    Authorization: bearerToken,
                    Host: "localhost",
                }
            })

            alert(`Parabéns, você ganhou ${points} pontos!`);
            if (signed) {
                navigate('dashboard');
            }
            resetUser();
            navigate('');
        } catch (e) {
            console.log("catch SumUserPoints: " + e);
        }
        setLoading(false);
    }

    const getRanking = async () => {
        setLoading(true);
        try {
            const { status, data } = await api.get(`students/${user.school_id}/ranking`);
            if(status == 200) {
                setRanking(data);
            } else {
                console.log("status: " + status, data);
            }
        } catch (e) {
            console.log(e);
        }
        setLoading(false);
    }

    return (
        <UserContext.Provider value={{
            user
            , signed
            , schools
            , loading
            , ranking
            , bearerToken
            , logIn
            , logOut
            , setUser
            , resetUser
            , fectSchools
            , createStudent
            , SumUserPoints
            , getRanking
        }}>
            {children}
        </UserContext.Provider>
    )
};