import React, { useContext, useEffect } from 'react';
import CheckboxCustomizado from '../../components/Checkbox';
import {
  Content
  , Container
  , Banner
  , Row
  , Card
  , ImgBody
  , CardBody
  , CardBodyDescription
  , Title
  , LabelLarge
  , CentralizedHorizontal
  , AreaButton
  , ButtonPrimary
} from './styles';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { UserContext } from '../../contexts/AuthContext';

function Home() {
  const { fectSchools } = useContext(UserContext);
  useEffect(() => {
    fectSchools();
  }, [])

  return (
    <Content>
      <Banner />
      <Container>
        <Row>
          <Card>
            <ImgBody />
          </Card>
          <Card>
            <CardBody>
              <Row>
                <Title>Sinta-se AMF</Title>
              </Row>

              <LabelLarge>Uma experiência de escolha!</LabelLarge>
              <CardBodyDescription>
                A AMF convida você para participar do Sinta-se AMF, um projeto que vem com uma proposta diversa de testes vocacionais e feiras das profissões, apresenta foco na amplitude de formação oferecida na AMF, que abrange os âmbitos pessoal, acadêmico e profissional, resultando na construção de um indivíduo responsável, capaz de, com a sua atuação, beneficiar o contexto onde está inserido, pois queremos contribuir com esse importante momento. Durante o Sinta-se AMF, além da apresentação da faculdade, cursos e do Campus Recanto Maestro, faremos o “Passando a Limpo de Jovem para Jovem”, um momento de sensibilização e reflexão individual, no qual alunos AMF contam as suas próprias experiências, em uma conversa descontraída que busca discutir tantas questões pelas quais passamos durante uma das fases mais belas e importantes da vida! Venha participar conosco!
              </CardBodyDescription>
              <CentralizedHorizontal>
                <AreaButton>
                  <Link to="/cadastre-se">
                    <ButtonPrimary>
                      Inscreva-se já!
                    </ButtonPrimary>
                  </Link>
                </AreaButton>
              </CentralizedHorizontal>
            </CardBody>
          </Card>
        </Row>
      </Container>
    </Content>
  )
}

export default Home;
