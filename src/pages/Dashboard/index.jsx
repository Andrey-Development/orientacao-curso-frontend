import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import CheckboxCustomizado from '../../components/Checkbox';
import {
  Container
  , Card
  , LabelInput
  , LabelLarge
  , AreaButton
  , ButtonPrimary
  , VerticalCentered
  , CardHeader
  , LabelMedium
} from './styles';
import { UserContext } from '../../contexts/AuthContext';
import Loader from '../../components/Loader';
import { QuestsContext } from '../../contexts/QuestsContext';
function Dashboard() {
  const { loading, user } = useContext(UserContext);
  const { responded, resultQuiz, loadingQuiz, fetchQuizzes, createQuiz } = useContext(QuestsContext);
  const [quiz, setQuiz] = useState(null);
  const [count, setCount] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      fetchQuizzes();
    }, 500);
  }, [user]);



  if (loading || loadingQuiz) {
    return (
      <Container>
        <VerticalCentered>
          <Loader />
        </VerticalCentered>
      </Container>
    );
  }

  if (responded && resultQuiz) {
    return (
      <Container>
        {Object.keys(resultQuiz).map((key) => (
          <Card>
            <CardHeader>
              <LabelLarge>
                {resultQuiz[key].nome}
              </LabelLarge>
              <div>
                <LabelMedium>
                  Pontos:
                </LabelMedium>
                <LabelMedium>
                  {resultQuiz[key].value}
                </LabelMedium>
              </div>
            </CardHeader>

            <AreaButton>
              <LabelInput>
                {resultQuiz[key].descricao}
              </LabelInput>
            </AreaButton>
          </Card>
        ))}
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
          {loadingQuiz ? (
            <ButtonPrimary disabled>
              <Loader />
            </ButtonPrimary>
          ) : (
            <ButtonPrimary onClick={() => createQuiz()}>
              Responder agora
            </ButtonPrimary>
          )}
        </AreaButton>
      </VerticalCentered>
    </Container>
  )
}

export default Dashboard;
