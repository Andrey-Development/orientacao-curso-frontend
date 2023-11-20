import amfLogo from '/img/logo-home.png';
import { HeaderView, DivHeader, LogoImg, ButtonPrimary } from './styles.js';

function Header() {
    return (
        <HeaderView className='header'>
            <DivHeader>
                <LogoImg src={amfLogo} className="logo-amf" alt="AmF logo" />
            </DivHeader>
            <DivHeader>
                <ButtonPrimary>Login</ButtonPrimary>
            </DivHeader>
        </HeaderView>
    )
}

export default Header;
