import React, { createContext, useEffect, useState } from 'react';
import api from '../../services/api';

// Criação do Contexto de Usuário
export const UserContext = createContext();

// Componente Provider
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
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
    const [signed, setSigned] = useState(false);
    const [bearerToken, setBearerToken] = useState(null);

    // Função para fazer login do usuário
    const logIn = async (userData) => {
        const response = await api.post(`/students/auth/login`, userData);
        console.log(response);
        // if (response.data) {
        //     setUser(response.data);
        //     setSigned(true);
        // }
        // setUser(userData);
    };

    // Função para fazer logout do usuário
    const logOut = () => {
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
        setBearerToken(null)
    };

    const fetchUser = async () => {
        const id = 2;
        const baererToken = 'MQ.KhL8d8oDdqe7wED1yUMxvhxARPg91zRH6K2U6BtHRMOpyex8XbqvPqhs4_kg';

        const response = await api.get(`/students/${id}`, {
            headers: {
                Authorization: `Bearer ${baererToken}`,
            }
        });
        if (response.data) {
            setUser(response.data);
            setSigned(true);
        }
    }

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ signed, user, setUser, logIn, logOut }}>
            {children}
        </UserContext.Provider>
    );
};