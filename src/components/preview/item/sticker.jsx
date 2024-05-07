import styled from "styled-components";

const StickerContain = styled.img`
   position: absolute;
   resize: both;
  overflow: auto;
  max-height: auto;
  max-width: 100%;
   min-height: 10%;
   min-width: auto;
`;

const Sticker = ({item}) => {
    return ( <StickerContain src={item.src} /> );
}
 
export default Sticker;