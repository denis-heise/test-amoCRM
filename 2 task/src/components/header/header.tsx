import SocialLinks from '../social-links/social-links';
import PhoneNumber from '../number-phone/number-phone';
import Logo from '../logo/logo';
import {itemMenuHeader} from '../../mocks/items-menu';
import ListItems from '../list-menu/list-menu';

export default function Header ():JSX.Element {
    return(
        <header>
            <div className="header__left-block">
                <Logo/>
                <nav className="header__menu">
                    <ListItems props={itemMenuHeader}/>   
                </nav>
            </div>
            <div className="header__right-block">
                <PhoneNumber/>
                <div className="header__social-links">
                    <SocialLinks/>
                </div>
            </div>

            <div className="header__circle-purple-ligh"></div>
            <div className="header__purple-ball"></div>
            <div className="header__red-ball"></div>
        </header>
    );
}