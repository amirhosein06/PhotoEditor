import styled from "styled-components";

const StickerContain = styled.span`
   position: absolute;
   cursor: move;
   width: 200px;
   height: 300px;
   display: flex;
   align-items: center;
   justify-content: center;

   /* dynamic style */
   background-image: url(${props=> props.$sticSrc});
   background-size: cover;
   rotate: ${props=> props.$stickRotate}deg;
   border: ${props=> props.$stickBorderWidth}px ${props=> props.$stickBorderStyle} ${props=> props.$stickBorderColor};
   box-shadow: ${props=> props.$stickShodowLeft}px ${props=> props.$stickShodowTop}px 
   ${props=> props.$stickShodowWidht}px ${props=> props.$stickShodowColor};
   opacity: ${props=> props.$stickOpacity};
   background-color: ${props=> props.$stickColor};
   filter: ${props=> props.$stickFilter};
   border-radius: ${props=> props.$stickRadius}px;
   backdrop-filter: blur(${props=> props.$stickBlur}px);


   /* border on  selected */
   &::after{
    content: '';
    width: 200px;
    height: 300px;
    border: dashed 2px #858585;
    display: ${props=> props.$stickSelected};
   }
`;

const Sticker = ({item}) => {
    return ( <StickerContain $stickRotate={item.rotate} $stickBorderWidth={item.border.width} $stickBorderStyle={item.border.style}
        $stickBorderColor={item.border.color} $stickShodowTop={item.shadow.top} $stickShodowLeft={item.shadow.left}
        $stickShodowWidht={item.shadow.width} $stickShodowColor={item.shadow.color} $stickOpacity={item.opacity}
        $stickColor={item.color} $stickFilter={item.filter} $stickRadius={item.borderRadius} $stickBlur={item.blur}
        $stickSelected={item.selected === false ? "none" : "block"}
     $sticSrc={item.src} /> );
}
 
export default Sticker;