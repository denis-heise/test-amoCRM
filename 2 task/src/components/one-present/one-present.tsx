import { detailsDataType } from "../../types/types";
import LineMarker from "../line-marker/line-marker";

type PropItem = {
    propsItem: detailsDataType
}

export default function OnePresent ({propsItem}: PropItem): JSX.Element{
    return(
        <div>
            {propsItem.details ? <a href='#'>{propsItem.title}</a> : <LineMarker/>}
            <div className={propsItem.class ? propsItem.class : ''}>
                {propsItem.details ? propsItem.details : propsItem.title}
            </div>
        </div>
    );
}