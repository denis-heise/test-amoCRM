import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import PresentationBlock from '../../components/presentation-block/presentation block';
import DetailsBlock from '../../components/details-block/details-block';

export default function MainPage ():JSX.Element {
    return(
        <div className="wrapper-page">
            <Header/>
            <main>
                <div className="main__left-block">
                    <PresentationBlock/>
                </div>
                <div className="main__right-block">
                    <DetailsBlock/>
                </div>

                <div className="main__circle-red-ligh"></div>
                <div className="main__red-ball"></div>
            </main>
            <Footer/>
        </div>
    );
}