import styled from "styled-components";
import { useContext,useRef,useState } from "react";

const TextContain = styled.div`
   position: relative;
   left: 0;
   font-size: 40px;
   width: fit-content;
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
   box-shadow:  0px 0px ${props=> props.$textSelected - 2}px 1px #333;
`;
const Translator = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  position: fixed;
  left: calc(50% - 15px);
  bottom: -15px;
  border:  1px solid #333;
/* -webkit-user-drag: none; */
  cursor: move;
  display: flex;
  align-items: center;
  justify-content: center;
  display: ${props=> props.$textSelected !== "2" ? "none" : "flex"};
`;
const IconOnItem = styled.i`
  font-size: 20px;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = ({item,ContexBy}) => {
  const context = useContext(ContexBy);
  const textElement = useRef();
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);
  const [draged, setdraged] = useState(false);
   
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
  };

  const textDraging = (e)=>{
    if (e.clientY !== 0 || e.clientX !== 0) {
      textElement.current.style.transform = `translate(${e.clientX - x}px, ${e.clientY - y}px)`;
    }else{
      textDragingDisable(e.target);
    }
  };
  const mousedownhandler = (e)=>{
    e.target.draggable = "true";
    if (draged === false && x === 0 && y === 0) {
      setx(e.clientX);
      sety(e.clientY);
      setdraged(true);
    }
  }
  const textDragingDisable = (target)=>{
    target.draggable = "false";
  }


    return ( 
    <TextContain ref={textElement} onClick={selectingText}
    $textFont={item.font} $textColor={item.color} $textBold={item.bold} $textItalic={item.italic}
    $textLine={item.underlin} $textRotate={item.rotate} $textBorderWidth={item.border.width} $textBorderColor={item.border.color}
    $textShadowColor={item.shadow.color} $textShadowWidth={item.shadow.width} $textShadowLeft={item.shadow.left} $textShadowTop={item.shadow.top}
    $textMask={item.mask} $textOpacity={item.opacity} $textBlur={item.blur} $textLineHeight={item.lineHeight}
    $textAlighn={item.textalighn} $textFlip={item.flip}
    $textSelected={item.selected === false ? "0" : "2"}
    >
    {item.value} <Translator onDrag={textDraging} onMouseDown={mousedownhandler} draggable={"false"} $textSelected={item.selected === false ? "0" : "2"}
     ><IconOnItem className="bi bi-arrows-move"></IconOnItem></Translator>
    </TextContain> );
}
 
export default Text;