import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import Modal from '../../components/Modal';

// Criação do Contexto de Usuário
export const UserContext = createContext();

// Componente Provider
export const UserProvider = ({ children }) => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        'name': 'Teste Gamil',
        'email': 'teste@gmail.com',
        'password': 'Senha123',
        'password_confirmation': 'Senha123',
        'school_id': 1,
        'address': {
            'country': 'Brasil',
            'state': 'RS',
            'city': 'Restinga Seca',
            'neighborhood': 'Centro',
            'street': 'R. 25 de Março',
            'number': 650,
            'complement': 'Casa',
            'cep': '97200000'
        }
    });

    const [signed, setSigned] = useState(false);
    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState(null);
    const [questsResponded, setQuestsResponded] = useState(null);
    const [bearerToken, setBearerToken] = useState(null);

    const resetUser = () => {
        setUser({
            'name': '',
            'email': '',
            'password': '',
            'password_confirmation': '',
            'school_id': 1,
            'address': {
                'country': '',
                'state': '',
                'city': '',
                'neighborhood': '',
                'street': '',
                'number': 1,
                'complement': '',
                'cep': ''
            }
        });
    }

    // Função para fazer login do usuário
    const logIn = async () => {
        setLoading(true);

        try {
            await api.post(`/students/auth/login`, {
                email: user.email,
                password: user.password
            }).then((res) => {
                if (res.status == 200) {
                    setBearerToken(`${res.data.type} ${res.data.token}`);
                    fetchUser(`${res.data.type} ${res.data.token}`);
                    setSigned(true);
                    navigate('/dashboard');
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
                });
            } else {
                console.error('else catch login: ' + e);
            }
            setLoading(false);
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
            api.get(`students/email/${user.email}`, {
                headers: {
                    Authorization: token
                }
            }).then((res) => {
                setUser(res.data);
                fetchQuizzes(res.data.id, token);
            });
        } catch (e) {
            console.error(e);
        }
    }

    const fetchQuizzes = async (userId, token) => {
        try {
            await api.get(`students/${userId}/quizzes`, {
                headers: {
                    Authorization: token
                }
            }).then(({ status, data }) => {
                if(status == 200) {
                    setQuestsResponded(data);
                }
                console.log(data);
            });
        } catch (e) {
            console.log('fetchQuizzes' + e);
        }
        setLoading(false);
    }

    const createStudent = async () => {
        setLoading(true);

        await api.post('students', user).then((res) => {
            if (res.status == 201) {
                alert("Parabéns, agora você faz parte do Sinta-se AMF!!!");
                logIn();
            }
        }).catch(({ response }) => {
            const { status, data } = response;
            if (status == 422) {
                Object.values(data.errors).forEach(element => {
                    if (element.rule == "unique" && element.field == "email") {
                        alert("Este E-mail já está cadastrado!");
                        navigate('/cadastre-se');
                    }
                });
            } else {
                console.log('status: ' + status + ' catch create student: ' + data.errors);
            }
            setLoading(false);
        });
    }

    const ResgatarPontos = () => {
        const nome = "Andrey";
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 500);
        if (!user.email) {
            alert("O campo e-mail é obrigatório!");
        } else {
            alert(`Parabéns ${nome}, você ganhou 10 pontos!`);
            resetUser();
        }
    }

    return (
        <UserContext.Provider value={{
            signed,
            loading,
            questsResponded,
            user,
            setUser,
            logIn,
            logOut,
            createStudent,
            ResgatarPontos,
        }}>
            {children}
        </UserContext.Provider>
    )
};