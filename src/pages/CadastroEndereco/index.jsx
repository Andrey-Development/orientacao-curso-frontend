import React, { useContext } from 'react';
import { UserContext } from '../../contexts/AuthContext';
import InputCustomizado from '../../components/Input';
import {
    Container
    , Card
    , Title
    , AreaButton
    , ButtonPrimary
} from './styles';
import Loader from '../../components/Loader';

function CadastroEndereco() {
    const { loading, user, setUser, createStudent } = useContext(UserContext);

    function onChangeValue(event) {
        const { name, value } = event.target;
        setUser({
            ...user,
            address: {
                ...user.address,
                [name]: value
            }
        });
    }

    return (
        <div>
            <Container>
                <Card>
                    <Title>Endereço</Title>
                    <InputCustomizado label='País'
                        name='country'
                        type='string'
                        placeholder='Informe o País...'
                        value={user.address.country ?? ''}
                        onChange={onChangeValue}
                    />
                    <InputCustomizado label='CEP'
                        name='cep'
                        type='string'
                        placeholder='Informe seu CEP...'
                        value={user.address.cep ?? ''}
                        onChange={onChangeValue}
                    />
                    <InputCustomizado label='Estado'
                        name='state'
                        type='string'
                        placeholder='Informe a Sigla do Estado...'
                        value={user.address.state ?? ''}
                        onChange={onChangeValue}
                    />
                    <InputCustomizado label='Cidade'
                        name='city'
                        type='string'
                        placeholder='Informe a Cidade...'
                        value={user.address.city ?? ''}
                        onChange={onChangeValue}
                    />
                    <InputCustomizado label='Bairro'
                        name='neighborhood'
                        type='string'
                        placeholder='Informe seu Bairro...'
                        value={user.address.neighborhood ?? ''}
                        onChange={onChangeValue}
                    />
                    <InputCustomizado label='Rua'
                        name='street'
                        type='string'
                        placeholder='Informe seu Rua...'
                        value={user.address.street ?? ''}
                        onChange={onChangeValue}
                    />
                    <InputCustomizado label='Número'
                        name='number'
                        type='string'
                        placeholder='Informe seu Número...'
                        value={user.address.number ?? ''}
                        onChange={onChangeValue}
                    />
                    <InputCustomizado label='Complemento'
                        name='complement'
                        type='string'
                        placeholder='Informe seu Complemento...'
                        value={user.address.complement ?? ''}
                        onChange={onChangeValue}
                    />
                    <AreaButton>
                        {loading ? (
                            <ButtonPrimary disabled>
                                <Loader />
                            </ButtonPrimary>
                        ) : (
                            <ButtonPrimary onClick={() => createStudent()}>
                                Cadastrar
                            </ButtonPrimary>
                        )}
                    </AreaButton>
                </Card>
            </Container>
        </div >
    );
}

export default CadastroEndereco;
