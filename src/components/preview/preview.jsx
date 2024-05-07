import styled from "styled-components";
import Context from '../context/context';
import { useContext } from "react";
import Text from "./item/text";
import Sticker from "./item/sticker";

const PreviewContainer = styled.div`
    grid-column: 3/10;
    grid-row: 2/9;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const BsePreview = styled.div`
    height: 450px;
    width: 450px;
    position: relative;
    background-color: red;
`;
const Preview = () => {
    const context = useContext(Context);

    return ( 
    <PreviewContainer>
        <BsePreview>
        {context.itemArray.map(item=>(
            item.state === "text" ? (<Text item={item} />) :
            (<Sticker item={item} />)
        ))}
        </BsePreview>
    </PreviewContainer> 
    );
}
 
export default Preview;