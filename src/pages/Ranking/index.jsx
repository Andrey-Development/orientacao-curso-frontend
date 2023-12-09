import React from 'react';
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
function Home() {

  return (
    <Container>
      <Title>Ranking</Title>
      <Card>
        <AreaButton>
          <LabelLarge>
            1. Andrey Nunes - 87 pontos
          </LabelLarge>
        </AreaButton>
      </Card>
      <Card>
        <AreaButton>
          <LabelLarge>
            2. João Antonio - 82 pontos
          </LabelLarge>
        </AreaButton>
      </Card>

      <Card>
        <AreaButton>
          <LabelLarge>
            3. Felipe Becker - 77 pontos
          </LabelLarge>
        </AreaButton>
      </Card>
    </Container>
  )
}

export default Home;
