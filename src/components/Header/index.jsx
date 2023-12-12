import amfLogo from '/img/logo-home.png';
import { FaTrophy } from '@react-icons/all-files/fa/FaTrophy';
import { useContext } from 'react';
import { UserContext } from '../../contexts/AuthContext/index.jsx';
import { Link } from 'react-router-dom';
import {
    HeaderView
    , DivHeader
    , LogoImg
    , ButtonPrimary
    , DivRanking
    , LabelHeader
    , LabelHeaderLogoff
} from './styles.js';
import { QuestsContext } from '../../contexts/QuestsContext/index.jsx';

function Header() {
    const { loading, signed, user, logIn, logOut, } = useContext(UserContext);

    return (
        <HeaderView>
            <Link to="/">
                <DivHeader>
                    <LogoImg src={amfLogo} alt="AmF logo" />
                </DivHeader>
            </Link>

            {signed ? (user.points > 0 ? (
                <Link to="ranking">
                    <DivHeader>
                        <DivRanking>
                            <LabelHeader>
                                <FaTrophy />
                            </LabelHeader>
                            <LabelHeader>
                                Ranking
                            </LabelHeader>
                        </DivRanking>
                    </DivHeader>
                </Link>
            ) : (
                <DivHeader>
                    <DivRanking>
                        <LabelHeaderLogoff>
                            <FaTrophy />
                        </LabelHeaderLogoff>
                        <LabelHeaderLogoff title='Responda o questionáro para liberar o Ranking!'>
                            Ranking
                        </LabelHeaderLogoff>
                    </DivRanking>
                </DivHeader>
            )) : (
                <DivHeader>
                    <DivRanking>
                    </DivRanking>
                </DivHeader>
            )}

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
