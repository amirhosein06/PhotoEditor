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
    /* background Photo */
    background-image: url(${props=> props.$backPhoto});
    background-repeat: no-repeat;
    background-size: cover;
    /* filter */
    filter: ${props=> props.$backFilter};
    /* background color */
    background-color: ${props=> props.$backColor};
`;
const BackMask = styled.img`
    position: absolute;
    left: 0;
    z-index: 0;
    min-width: 100%;
    min-height: auto;
    opacity: ${props=> props.$maskOpacity};
`;
const Preview = () => {
    const context = useContext(Context);

    return ( 
    <PreviewContainer>
        <BsePreview $backPhoto={context.backgroundData.src} $backFilter={context.backgroundData.filter}
        $backColor={context.backgroundData.backgroundColor}
        >
        <BackMask src={context.backgroundData.mask.src} $maskOpacity={context.backgroundData.mask.opacity}/>
        {context.itemArray.map(item=>(
            item.state === "text" ? (<Text item={item} />) :
            (<Sticker item={item} />)
        ))}
        </BsePreview>
    </PreviewContainer> 
    );
}
 
export default Preview;