import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/AuthContext';
import GoogleIcon from '/img/google-logo.svg';
import InputCustomizado from '../../components/Input';
import {
  Container
  , Card
  , AreaInput
  , LabelInput
  , Input
  , Title
  , AreaButton
  , ButtonPrimary
  , ButtonSecondary
  , LinkPrimary
  , LinkSecondary
  , Divisao
  , IconGoogle
} from './styles';
import Loader from '../../components/Loader';

function Login() {
  const { user, setUser, loading, ResgatarPontos } = useContext(UserContext);

  return (
    <Container>
      <Card>
        <Title>Resgatar pontos</Title>
        <InputCustomizado
          label='E-mail'
          type='email'
          placeholder='Digite seu E-mail...'
          value={user.email}
          onChange={(value) => {
            setUser({...user, email: value.currentTarget.value});
          }}
        />

        <AreaButton>
          <ButtonPrimary onClick={() => {
            ResgatarPontos();
          }}
          >
            {loading ? <Loader /> : "Submeter Pontos"}
          </ButtonPrimary>
        </AreaButton>
      </Card>
    </Container>
  );
}

export default Login;
