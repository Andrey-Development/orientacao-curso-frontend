import amfLogo from '/img/logo-home.png';
import { HeaderView, DivHeader, LogoImg, ButtonPrimary } from './styles.js';
import { useContext } from 'react';
import { UserContext } from '../../contexts/AuthContext/index.jsx';
import { Link } from 'react-router-dom';

function Header() {
    const { loading, signed, user, logIn, logOut, } = useContext(UserContext);

    return (
        <HeaderView>
            <DivHeader>
                <LogoImg src={amfLogo} className="logo-amf" alt="AmF logo" />
            </DivHeader>
            <DivHeader>
                {signed ?
                    (
                        <ButtonPrimary onClick={() => {
                            logOut();
                        }}
                        >Sair</ButtonPrimary>
                    ) : (
                        <Link to="/acessar">
                            <ButtonPrimary>Acessar</ButtonPrimary>
                        </Link>
                    )}
            </DivHeader>
        </HeaderView>
    )
}

export default Header;
