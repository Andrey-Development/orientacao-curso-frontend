import React, { useContext, useLayoutEffect, useState } from 'react';
import api from '../../services/api';
import { UserContext } from '../../contexts/AuthContext';
import CheckboxCustomizado from '../../components/Checkbox';
import {
  Container
  , Card
  , AreaInput
  , LabelInput
  , Input
  , LabelLarge
  , Title
  , AreaButton
  , ButtonPrimary
  , ButtonSecondary
  , LinkPrimary
  , LinkSecondary
  , Divisao
  , AreaCheckbox
  , VerticalCentered
  , InputStyled
} from './styles';
import { QuestsContext } from '../../contexts/QuestsContext';
import Loader from '../../components/Loader';

function Quest() {
  const { loadingQuiz, quiz, quizResponse, setQuizResponse, submitQuiz } = useContext(QuestsContext);
  const [quest, setQuest] = useState(null);
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState(false);

  useLayoutEffect(() => {
    setSelected(false);
    
    if(quizResponse[quiz[page].id]) {
      document.querySelector(`input[value="${quizResponse[quiz[page].id]}"]`).checked = true;
      setSelected(true);
    }
  }, [page]);

  const handleChange = (event) => {
    const check = event.target;
    setQuizResponse({ ...quizResponse, [quiz[page].id]: check.value });
    setSelected(true);
  };

  if (loadingQuiz) {
    return (
      <Container>
        <VerticalCentered>
          <Loader />
        </VerticalCentered>
      </Container>
    );
  }

  return (
    <Container>
      <Card>
        <Title>Questão {(page + 1)} de {quiz.length}</Title>
        <LabelLarge>
          {quiz[page].question}
        </LabelLarge>
        {
          quiz[page].options.map(({ id, option }) => (
            <CheckboxCustomizado key={id}
              label={option}
              name="resposta"
              type="radio"
              value={id}
              checked={id == quizResponse[quiz[page].id]}
              onClick={handleChange}
            />
          ))
        }
        <AreaButton>
          <ButtonSecondary
            disabled={!page}
            onClick={() => {
              setPage(page - 1);
            }}
          >
            Voltar
          </ButtonSecondary>
          {(page + 1) >= quiz.length ? (
            <ButtonSecondary
              disabled={!selected}
              onClick={() => {
                submitQuiz();
              }}
            >
              Ver Resultado
            </ButtonSecondary>
          ) : (
            <ButtonSecondary
              disabled={!selected}
              title={selected ? "Avançar" : "Selecione uma opção para avançar"}
              onClick={() => {
                setPage(page + 1);
              }}
            >
              Próximo
            </ButtonSecondary>
          )}
        </AreaButton>
      </Card>
    </Container>
  )
}

export default Quest;
