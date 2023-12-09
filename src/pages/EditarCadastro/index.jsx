import React, { useContext } from 'react';
import { UserContext } from '../../contexts/AuthContext';
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

function Cadastro() {
    const { user, setUser } = useContext(UserContext);
    function onChangeValue(event){
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }

    async function submitForm(){
        if(user.password & user.password_confirmation !== user.password) {
            return false;
        }
    }

    return (
        <div>
            <Container>
                <Card>
                    <Title>Editar Dados Pessoais</Title>
                    <InputCustomizado label='Nome'
                        name='name'
                        type='string'
                        placeholder='Digite seu Nome...'
                        value={user.name}
                        onChange={onChangeValue}
                    />
                    <InputCustomizado label='E-mail'
                        name='email'
                        type='email'
                        placeholder='Digite seu E-mail...'
                        value={user.email}
                        onChange={onChangeValue}
                    />
                    <InputCustomizado label='Senha'
                        name='password'
                        type='password'
                        placeholder='Digite sua Senha...'
                        value={user.password}
                        onChange={onChangeValue}
                    />
                    <InputCustomizado label='Confirmar Senha'
                        name='password_confirmation'
                        type='password'
                        placeholder='Confirme sua Senha...'
                        value={user.password_confirmation}
                        onChange={onChangeValue}
                    />
                    <AreaButton>
                        <ButtonPrimary onClick={submitForm}>
                            Avançar
                        </ButtonPrimary>
                    </AreaButton>
                </Card>
            </Container>
        </div>
    );
}

export default Cadastro;
