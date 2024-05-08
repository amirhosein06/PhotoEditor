import styled from "styled-components";

const TextContain = styled.p`
  position: absolute;
  width: 50%;
  left: 0;
   &::selection{
    visibility: hidden;
    display: none;
   }
   font-size: 40px;
   cursor: move;

   /* dynamic style */
   font-family: ${props=> props.$textFont} !important;
   color: ${props=> props.$textColor};
   font-weight: ${props=> props.$textBold};
   font-style: ${props=> props.$textItalic};
   font-style: ${props=> props.$textItalic};
   text-decoration: ${props=> props.$textLine};
   rotate: ${props=> props.$textRotate}deg;
   -webkit-text-stroke: ${props=> props.$textBorderWidth}px ${props=> props.$textBorderColor};
   text-shadow: ${props=> props.$textShadowLeft}px ${props=> props.$textShadowTop}px
    ${props=> props.$textShadowWidth}px ${props=> props.$textShadowColor};
    background: url(${props=> props.$textMask}) no-repeat;
   background-clip: text;
   -webkit-text-fill-color: ${props=> props.$textColor === "" ? "transparent" : "unset"};
   opacity: ${props=> props.$textOpacity};
   filter: blur(${props=> props.$textBlur}px);
   line-height: ${props=> props.$textLineHeight}px;
   text-align: ${props=> props.$textAlighn === "" ? "center" : props.$textAlighn};
   transform: rotateX(0deg) rotateY(${props=> props.$textFlip}deg) rotateZ(0deg);


   /* border on  selected */
   border: dashed #858585;
   border-width: ${props=> props.$textSelected}px;
`;

const Text = ({item}) => {

    return ( 
    <TextContain $textFont={item.font} $textColor={item.color} $textBold={item.bold} $textItalic={item.italic}
    $textLine={item.underlin} $textRotate={item.rotate} $textBorderWidth={item.border.width} $textBorderColor={item.border.color}
    $textShadowColor={item.shadow.color} $textShadowWidth={item.shadow.width} $textShadowLeft={item.shadow.left} $textShadowTop={item.shadow.top}
    $textMask={item.mask} $textOpacity={item.opacity} $textBlur={item.blur} $textLineHeight={item.lineHeight}
    $textAlighn={item.textalighn} $textFlip={item.flip}
    $textSelected={item.selected === false ? "0" : "2"}
    >
    {item.value}</TextContain> );
}
 
export default Text;