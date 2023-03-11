import { ItemMenu } from "../../types/types";
import OneItem from "../one-item/one-item";

type PropsItems = {
    props: ItemMenu[]
}

export default function ListItems ({props}: PropsItems): JSX.Element{
    return(
        <ul>
            {props.map(item => <OneItem key={item.title} propsItem={item}/>)}
        </ul>
    );
}
