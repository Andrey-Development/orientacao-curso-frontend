import React, { useContext, useEffect, useState } from 'react';
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
  , HeaderRanking
  , LabelRanking
  , VerticalCentered
} from './styles';
import { UserContext } from '../../contexts/AuthContext';
import Loader from '../../components/Loader';

function Ranking() {
  const { loading, ranking, getRanking } = useContext(UserContext);
  const [count, setCount] = useState(1);

  useEffect(() => {
    getRanking();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (ranking != null) {
        ranking.students.map((student) => {
          console.log(student);
        });

      }
    }, 300)
  }, [ranking]);

  if (ranking) {
    return (
      <Container>
        <Title>Ranking {ranking.schoolName}</Title>
        <Card>
          <AreaButton>
            <HeaderRanking>
              Classificação
            </HeaderRanking>
            <HeaderRanking>
              Nome
            </HeaderRanking>
            <HeaderRanking>
              Pontos
            </HeaderRanking>
          </AreaButton>
          {ranking.students != null && Object.keys(ranking.students).map((key) => (
            <AreaInput>
              <LabelRanking>
                {Number(key) + 1}
              </LabelRanking>
              <LabelRanking>
                {ranking.students[key].name}
              </LabelRanking>
              <LabelRanking>
                {ranking.students[key].points}
              </LabelRanking>
            </AreaInput>
          ))}
        </Card>
      </Container>
    )
  }

  if (loading) {
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
      <Title>Ranking</Title>
      <Card>
        <AreaButton>
          <LabelLarge>
            Ainda não há resultados disponíveis!
          </LabelLarge>
        </AreaButton>
      </Card>
    </Container>
  )
}

export default Ranking;
