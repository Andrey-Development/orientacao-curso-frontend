import React, { useContext } from 'react';
import CheckboxCustomizado from '../../components/Checkbox';
import {
  Container
  , Card
  , LabelInput
  , LabelLarge
  , AreaButton
  , ButtonPrimary
  , VerticalCentered
} from './styles';
import { UserContext } from '../../contexts/AuthContext';
import Loader from '../../components/Loader';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
function Dashboard() {
  const { loading, questsResponded } = useContext(UserContext);

  if (loading) {
    return (
      <Container>
        <VerticalCentered>
          <Loader />
        </VerticalCentered>
      </Container>
    );
  }

  console.log(questsResponded);
  if (questsResponded.length > 0) {
    return (
      <Container>
        <Card>
          <AreaButton>
            <LabelLarge>
              1. Sistemas de Informação
            </LabelLarge>
          </AreaButton >

          <AreaButton>
            <LabelInput>
              O curso de Sistemas de Informação consiste, entre outros, no desenvolvimento e aplicação da computação em diversos setores (e/ou organizações), abrangendo os aspectos técnico, gerenciais e sociológicos.
            </LabelInput>
          </AreaButton>
        </Card >
        <Card>
          <AreaButton>
            <LabelLarge>
              2. Ciências Contábeis
            </LabelLarge>
          </AreaButton>

          <AreaButton>
            <LabelInput>
              O curso de Ciências Contábeis prepara profissionais para planejar e gerenciar as contas de empresas e pessoas físicas. Ao concluir o curso, o aluno estará apto a registrar e controlar as receitas, despesas e lucros de forma eficiente.
            </LabelInput>
          </AreaButton>
        </Card>

        <Card>
          <AreaButton>
            <LabelLarge>
              3. Hotelaria
            </LabelLarge>
          </AreaButton>

          <AreaButton>
            <LabelInput>
              O curso de Hotelaria é uma graduação de nível superior com titulação tecnológica e duração média entre dois e três anos. Ao longo desse período, o curso habilita o estudante a ser o profissional responsável pelo funcionamento e direção de hotéis, pousadas, spas e diferentes tipos de alojamento e estadia.
            </LabelInput>
          </AreaButton>
        </Card>
      </Container>
    );
  }

  return (
    <Container>
      <VerticalCentered>
        <AreaButton>
          <LabelLarge>
            Responda o questionário para ganhar 25 pontos!
          </LabelLarge>
        </AreaButton >
        <AreaButton>
          <Link to="/responder">
            <ButtonPrimary>
              Responder agora
            </ButtonPrimary>
          </Link>
        </AreaButton>
      </VerticalCentered>
    </Container>
  )
}

export default Dashboard;
