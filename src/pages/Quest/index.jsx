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
  , IconGoogle
} from './styles';

function Quest() {
  // const { quests } = useContext(UserContext);
  const [quest, setQuest] = useState("Mantenho o foco em atividades que possuo maior domínio, mas não deixo de trabalhar pontos de melhoria em mim.");

  // useLayoutEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await api.get('/test');
  //       console.log(response.data);
  //       setTest(response.data);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   }

  //   fetchData();
  // }, []);

  return (
    <div>
      <Container>
        <Card>
          <Title>Questão 3 de 8</Title>
          <LabelLarge>
            Mantenho o foco em atividades que possuo maior domínio, mas não deixo de trabalhar pontos de melhoria em mim?
          </LabelLarge>
          <CheckboxCustomizado
            label='Empatia e Habilidade de Negociação'
            name='resposta'
            type='radio'
            value=""
          />
          <CheckboxCustomizado
            label='Pensamento Analítico'
            name='resposta'
            type='radio'
          />
            <CheckboxCustomizado
              label='Comunicação'
              name='resposta'
              type='radio'
            />
          <CheckboxCustomizado
            label='Criatividade e Inovação'
            name='resposta'
            type='radio'
          />
          <CheckboxCustomizado
            label='Gestão do Tempo'
            name='resposta'
            type='radio'
          />

          <AreaButton>
            <ButtonSecondary onClick={() => {
              console.log();
            }}>
              Voltar
            </ButtonSecondary>
            <ButtonSecondary onClick={() => {
              console.log();
            }}>
              Próximo
            </ButtonSecondary>
          </AreaButton>
        </Card>
      </Container>
    </div>
  )
}

export default Quest;
