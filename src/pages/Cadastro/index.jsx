import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { UserContext } from '../../contexts/AuthContext';
import InputCustomizado from '../../components/Input';
import {
    Container
    , Card
    , Title
    , AreaButton
    , ButtonPrimary
} from './styles';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Dropdown from '../../components/Dropdown';

function Cadastro() {
    const { user, setUser, fectSchools, schools } = useContext(UserContext);
    const [schoolSelected, setSchoolSelected] = useState(null);

    function onChangeValue(event) {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }

    useLayoutEffect(() => {
        fectSchools();
    }, []);

    useEffect(() => {
        setUser({ ...user, school_id: schoolSelected });
    }, [schoolSelected]);

    return (
        <div>
            <Container>
                <Card>
                    <Title>Dados Pessoais</Title>
                    <InputCustomizado
                        label='Nome'
                        name='name'
                        type='string'
                        placeholder='Digite seu Nome...'
                        value={user.name}
                        onChange={onChangeValue}
                    />
                    <InputCustomizado
                        label='E-mail'
                        name='email'
                        type='email'
                        placeholder='Digite seu E-mail...'
                        value={user.email}
                        onChange={onChangeValue}
                    />
                    <Dropdown 
                        selected={schoolSelected}
                        setSelected={setSchoolSelected}
                        items={schools}
                    />
                    <InputCustomizado
                        label='Senha'
                        name='password'
                        type='password'
                        placeholder='Digite sua Senha...'
                        value={user.password}
                        onChange={onChangeValue}
                    />
                    <InputCustomizado
                        label='Confirmar Senha'
                        name='password_confirmation'
                        type='password'
                        placeholder='Confirme sua Senha...'
                        value={user.password_confirmation}
                        onChange={onChangeValue}
                    />
                    <AreaButton>
                        <Link to="/cadastrar-endereco">
                            <ButtonPrimary>
                                Avançar
                            </ButtonPrimary>
                        </Link>
                    </AreaButton>
                </Card>
            </Container>
        </div>
    );
}

export default Cadastro;
