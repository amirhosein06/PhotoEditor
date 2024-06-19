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
    overflow: hidden;
    //for tablet
    @media screen and (max-width: 1050px) {
        grid-column: 1/14;
        grid-row: 3/11;
    }
`;
const BsePreview = styled.div`
    height: ${props=> props.$backheight}px;
    width: ${props=> props.$backwidth}px;
    position: relative;
    border: 1px solid #37BC9B;
    /* filter */
    &::after{
        filter: ${props=> props.$backFilter};
        content: '';
        z-index: 0;
        width: 100%;
        height: 100%;
        /* background Photo */
        background-image: url(${props=> props.$backPhoto});
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
    }
    /* background color */
    background: ${props=> props.$backColor};
`;
const BackMask = styled.img`
    position: absolute;
    left: 0;
    z-index: 1;
    width: 100%;
    height: auto;
    opacity: ${props=> props.$maskOpacity};
    -webkit-user-drag: none;
`;
const Preview = () => {
    const context = useContext(Context);

    return ( 
    <PreviewContainer>
        <BsePreview $backPhoto={context.backgroundData.src} $backFilter={context.backgroundData.filter}
        $backColor={context.backgroundData.backgroundColor} $backwidth={context.backgroundData.width}
        $backheight={context.backgroundData.height}
        >
        <BackMask src={context.backgroundData.mask.src} $maskOpacity={context.backgroundData.mask.opacity}/>
        {context.itemArray.map((item,index)=>(
            item.state === "text" ? (<Text key={index} item={item} ContexBy={Context} />) :
            (<Sticker key={index} item={item} ContexBy={Context} />)
        ))}
        </BsePreview>
    </PreviewContainer> 
    );
}
 
export default Preview;