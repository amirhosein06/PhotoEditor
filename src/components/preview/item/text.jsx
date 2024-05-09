import styled from "styled-components";
import { useContext } from "react";

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
   border: dashed #fff;
   border-width: ${props=> props.$textSelected}px;
   box-shadow:  0px 0px ${props=> props.$textSelected - 2}px 1px #000;
`;

const Text = ({item,ContexBy}) => {
  const context = useContext(ContexBy);
  
  const selectingText = ()=>{
    let newObject = [...context.itemArray];
    newObject.forEach(itemeach=>{
      if (itemeach === item) {
        itemeach.selected = true;
      }else{
        itemeach.selected = false;
      }
    });
    context.setitemArray(newObject);
  }
  // const textOndraging = (e)=>{
  //   e.target.style.left += e.nativeEvent.layerX / 100 + "%";
  //   e.target.style.top += e.nativeEvent.layerY / 100 + "%";
  //    console.log(e);
  // }

    return ( 
    <TextContain onClick={selectingText}
    $textFont={item.font} $textColor={item.color} $textBold={item.bold} $textItalic={item.italic}
    $textLine={item.underlin} $textRotate={item.rotate} $textBorderWidth={item.border.width} $textBorderColor={item.border.color}
    $textShadowColor={item.shadow.color} $textShadowWidth={item.shadow.width} $textShadowLeft={item.shadow.left} $textShadowTop={item.shadow.top}
    $textMask={item.mask} $textOpacity={item.opacity} $textBlur={item.blur} $textLineHeight={item.lineHeight}
    $textAlighn={item.textalighn} $textFlip={item.flip}
    $textSelected={item.selected === false ? "0" : "2"}
    >
    {item.value}</TextContain> );
}
 
export default Text;