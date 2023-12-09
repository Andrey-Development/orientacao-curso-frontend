import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/AuthContext';
import GoogleIcon from '/img/google-logo.svg';
import InputCustomizado from '../../components/Input';
import Loader from '../../components/Loader';
import {
  Container
  , Card
  , AreaInput
  , Title
  , AreaButton
  , ButtonPrimary
  , LinkPrimary
  , LinkSecondary
} from './styles';
import { Link } from 'react-router-dom';

function Login() {
  const { loading, logIn, user, setUser } = useContext(UserContext);

  return (
    <Container>
      <Card>
        <Title>Realizar Login</Title>
        <InputCustomizado
          label='E-mail'
          name='email'
          type='email'
          placeholder='Digite seu E-mail...'
          value={user.email}
          onChange={(value) => {
            setUser({ ...user, email: value.currentTarget.value });
          }}
        />
        <InputCustomizado
          label='Senha'
          name='password'
          type='password'
          placeholder='********'
          maxLength={16}
          value={user.password}
          onChange={(value) => {
            setUser({ ...user, password: value.currentTarget.value });
          }}
        />
        <AreaButton>
          {loading ? (
            <ButtonPrimary type='submit' disabled>
              <Loader />
            </ButtonPrimary>
          ) : (
            <ButtonPrimary type='submit' onClick={() => {
              logIn();
            }}
            >
              Entrar
            </ButtonPrimary>
          )}
        </AreaButton>
        <AreaInput>
          <LinkSecondary>Esqueceu sua Senha?</LinkSecondary>
        </AreaInput>
        <AreaButton>
          <Link to="/cadastre-se">
            <LinkPrimary>Crie sua conta agorar!</LinkPrimary>
          </Link>
          {/* <Divisao /> */}
          {/* <ButtonSecondary><IconGoogle src={GoogleIcon} />Entrar com o Google</ButtonSecondary> */}
        </AreaButton>
      </Card>
    </Container>
  );
}

export default Login;
