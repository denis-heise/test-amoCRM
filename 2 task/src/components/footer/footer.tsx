import SocialLinks from '../social-links/social-links';
import PhoneNumber from '../number-phone/number-phone';
import Copyright from '../copyright/copyright';
import Address from '../address/address';
import ListItems from '../list-menu/list-menu';
import { aboutCompanyFooter, itemsMenuFooterFirst, itemsMenuFooterSecond } from '../../mocks/items-menu';

export default function Footer ():JSX.Element {
    return(
        <footer>
            <div className="footer__top-block">
                <div className="footer__left-block">
                    <div>
                        <h3>О компании</h3>
                        <ListItems props={aboutCompanyFooter}/>
                    </div>
                    <div>
                        <div>
                            <h3>Меню</h3>
                            <div className="footer__split-list">
                                <ListItems props={itemsMenuFooterFirst}/>
                                <ListItems props={itemsMenuFooterSecond}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__right-block">
                    <h3>Контакты</h3>
                    <PhoneNumber/>
                    <div className="footer__social-links">
                        <SocialLinks/>
                    </div>
                    <Address/>
                </div>
            </div>
            <Copyright/>
        </footer>
    );
}