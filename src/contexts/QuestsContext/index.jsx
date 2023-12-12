import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../../services/api';
import { UserContext } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

// Criação do Contexto do Questionário
export const QuestsContext = createContext();

// Componente Provider
export const QuestsProvider = ({ children }) => {
    const navigate = useNavigate();
    const { user, bearerToken, SumUserPoints, } = useContext(UserContext);

    const [quizResponse, setQuizResponse] = useState({});
    const [loadingQuiz, setLoadingQuiz] = useState(true);
    const [resultQuiz, setResultQuiz] = useState(null);
    const [responded, setResponded] = useState(false);
    const [quizId, setQuizId] = useState(false);
    const [quiz, setQuiz] = useState([]);

    const selecionaNome = (param) => {
        var value = "";
        switch (param) {
            case "value_adm":
                value = "Administração";
                break;
            case "value_cc":
                value = "Ciências Contábeis";
                break;
            case "value_dir":
                value = "Direito";
                break;
            case "value_gas":
                value = "Gastronomia";
                break;
            case "value_hot":
                value = "Hotelaria";
                break;
            case "value_opl":
                value = "Ontopsicologia";
                break;
            case "value_ped":
                value = "Pedagogia";
                break;
            case "value_si":
                value = "Sistemas de Informação";
                break;
            default:
                value = "Curso não identificado";
                break;
        }
        return value;
    }

    const selecionaDescricao = (param) => {
        var value = "";
        switch (param) {
            case "value_adm":
                value = "Curso de graduação que forma profissionais capazes de gerenciar empresas e organizações, aplicando conceitos de administração, economia, marketing, finanças, contabilidade, entre outros.";
                break;
            case "value_cc":
                value = "Curso de graduação que forma profissionais capazes de registrar, analisar e interpretar as transações financeiras de uma empresa, bem como elaborar relatórios e pareceres contábeis.";
                break;
            case "value_dir":
                value = "Curso de graduação que forma profissionais capazes de atuar na área jurídica, aplicando o direito para solucionar conflitos e garantir a justiça.";
                break;
            case "value_gas":
                value = "Curso de graduação que forma profissionais capazes de planejar, preparar e executar pratos culinários, bem como gerenciar restaurantes e outras empresas do setor de alimentação.";
                break;
            case "value_hot":
                value = "Curso de graduação que forma profissionais capazes de planejar, organizar e executar serviços de hospedagem, alimentação e lazer em hotéis, resorts e outras empresas do setor de turismo.";
                break;
            case "value_opl":
                value = "Curso de graduação que forma profissionais capazes de estudar o funcionamento da mente e do comportamento humano, aplicando conceitos da psicologia, filosofia e outras áreas do conhecimento.";
                break;
            case "value_ped":
                value = "Curso de graduação que forma profissionais capazes de planejar, organizar e executar atividades educativas, bem como orientar e acompanhar o desenvolvimento de alunos.";
                break;
            case "value_si":
                value = "Curso de graduação que forma profissionais capazes de projetar, desenvolver e implementar sistemas de informação, bem como aplicar conceitos de informática, matemática, engenharia e outras áreas do conhecimento.";
                break;
            default:
                value = "Descrição não identificada!";
                break;
        }
        return value;
    }

    const fetchQuizzes = async () => {
        setLoadingQuiz(true);

        try {
            if (user.id) {
                await api.get(`students/${user.id}/quizzes`, {
                    headers: {
                        Authorization: bearerToken,
                    }
                }).then(({ status, data }) => {
                    setResponded(true);
                    if (status == 200) {
                        const {
                            value_adm
                            , value_cc
                            , value_dir
                            , value_gas
                            , value_hot
                            , value_opl
                            , value_ped
                            , value_si
                        } = data;

                        const resultQ = Object.entries({
                            value_adm: value_adm
                            , value_cc: value_cc
                            , value_dir: value_dir
                            , value_gas: value_gas
                            , value_hot: value_hot
                            , value_opl: value_opl
                            , value_ped: value_ped
                            , value_si: value_si
                        }).sort((a, b) => b[1] - a[1])
                            .slice(0, 3)
                            .map(([key, value]) => ({
                                nome: selecionaNome(key)
                                , descricao: selecionaDescricao(key)
                                , value: value
                            }));

                        setResultQuiz(resultQ);
                    }
                    setLoadingQuiz(false);
                });
            }
        } catch (e) {
            setLoadingQuiz(false);
            console.log('fetchQuizzes' + e);
        }
    }

    const createQuiz = async () => {
        setLoadingQuiz(true);

        try {
            const { status, data } = await api.post(`students/${user.id}/quizzes`, {}, {
                headers: {
                    Authorization: bearerToken,
                    Host: "localhost",
                }
            });
            if (status == 201) {
                setQuiz(data.data.data);
                setQuizId(data.data.quiz_id);
                navigate('responder');
            }
        } catch (e) {
            console.log('catch fetchQuizzes: ' + e);
            alert("Ops, ocorreu um erro. Por favor, contate o administrador do sistema!");
        }
        setLoadingQuiz(false);
    }

    const submitQuiz = async () => {
        var d = Array();
        Object.keys(quizResponse).map((id) => {
            d.push({ question_id: id, option_id: quizResponse[id] });
        });

        try {
            const { status, data } = await api.post(`students/${user.id}/quizzes/${quizId}/answers`, {
                answers: d
            }, {
                headers: {
                    "Authorization": bearerToken,
                    "Host": "localhost",
                }
            });

            if (status == 201) {
                api.put(`students/${user.id}/quizzes/${quizId}/calculate-result`, {}, {
                    headers: {
                        "Authorization": bearerToken,
                        "Host": "localhost",
                    }
                });
                SumUserPoints(user.email, 25);
                navigate('dashboard');
            }
        } catch (e) {
            console.log('catch submithQuizzes: ' + e);
            alert("Ops, ocorreu um erro. Por favor, contate o administrador do sistema!");
        }
    }

    return (
        <QuestsContext.Provider value={{
            responded
            , quizResponse
            , resultQuiz
            , quiz
            , loadingQuiz
            , fetchQuizzes
            , createQuiz
            , setQuizResponse
            , submitQuiz
        }}>
            {children}
        </QuestsContext.Provider>
    )
};