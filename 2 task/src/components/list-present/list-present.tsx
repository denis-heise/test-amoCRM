import { Fragment } from "react";
import { detailsDataType } from "../../types/types";
import OnePresent from "../one-present/one-present";

type PropsPresent = {
    props: detailsDataType[]
}

export default function ListPresent ({props}: PropsPresent): JSX.Element{
    return(
        <Fragment>
            {props.map(item => <OnePresent key={item.title} propsItem={item}/>)}
        </Fragment>
    );
}
