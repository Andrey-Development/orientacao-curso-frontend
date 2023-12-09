import React from 'react';
import CheckboxCustomizado from '../../components/Checkbox';
import {
  Container
  , AreaButton
  , ButtonPrimary
  , ButtonSecondary
} from './styles';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
function Home() {

  return (
    <Container>
      <AreaButton>
        <Link to="/acessar">
          <ButtonPrimary>Login</ButtonPrimary>
        </Link>
      </AreaButton>
      <AreaButton>
        <Link to="/cadastre-se">
          <ButtonSecondary>
            Cadastrer-se
          </ButtonSecondary>
        </Link>
      </AreaButton>
    </Container>
  )
}

export default Home;
