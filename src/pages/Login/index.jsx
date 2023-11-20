import { useContext, useState } from 'react';
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

function Login() {
  const { logIn } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [passwowrd, setPasswowrd] = useState('');

  return (
    <Container>
      <Card>
        <Title>Realizar Login</Title>
        <InputCustomizado
          label='E-mail'
          name='email'
          type='email'
          placeholder='Digite seu E-mail...'
          value={email}
          onChange={(value) => {
            setEmail(value.currentTarget.value);
          }}
        />
        <InputCustomizado
          label='Senha'
          name='password'
          type='password'
          placeholder='********'
          maxLength={16}
          value={passwowrd}
          onChange={(value) => {
            setPasswowrd(value.currentTarget.value);
          }}
        />
        <AreaButton>
          <ButtonPrimary onClick={() => {
            logIn({email: email, passwowrd: passwowrd})
          }}
          >
            Entrar
          </ButtonPrimary>
        </AreaButton>
        <AreaInput>
          <LinkSecondary>Esqueceu sua Senha?</LinkSecondary>
        </AreaInput>
        <AreaButton>
          <LinkPrimary>Criar uma conta agorar!</LinkPrimary>
          <Divisao />
          <ButtonSecondary><IconGoogle src={GoogleIcon} />Entrar com o Google</ButtonSecondary>
        </AreaButton>
      </Card>
    </Container>
  );
}

export default Login;
