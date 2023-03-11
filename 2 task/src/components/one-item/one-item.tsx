import { ItemMenu } from "../../types/types";

type PropItem = {
    propsItem: ItemMenu
}

export default function OneItem ({propsItem}: PropItem): JSX.Element{
    return(
        <li  className={propsItem.class ? propsItem.class : ''}>
            <a href={propsItem.link}>{propsItem.title}</a>
        </li>
    );
}