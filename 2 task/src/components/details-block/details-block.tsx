import { Fragment } from 'react';
import { buttonConsultation } from '../../mocks/buttons';
import { detailsDataDesktop, detailsDataMobile } from '../../mocks/details';
import Button from '../button/button';
import ListPresent from '../list-present/list-present';

export default function DetailsBlock ():JSX.Element{
    return(
        <Fragment>
            <div className='main__title-right-block'>
                Вместе с&nbsp;<span>бесплатной </span> <br/> <span> консультацией</span> мы&nbsp;дарим:
            </div>
            <div className="main__offer-list">
                <div className='desktop'>
                    <ListPresent props={detailsDataDesktop}/>
                </div>
                <div className='mobile'>
                    <ListPresent props={detailsDataMobile}/>
                </div>
            </div>
            <Button propsButton={buttonConsultation}/>
        </Fragment>
    );
}