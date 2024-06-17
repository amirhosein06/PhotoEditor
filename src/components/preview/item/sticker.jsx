import styled from "styled-components";
import { useContext,useRef,useState } from "react";
import handlerList from "../../editor handlers/handlersRepo";


const StickerContain = styled.span`
   position: absolute;
   left: 0;
   top: 0;
   display: flex;
   align-items: center;
   justify-content: center;

   /* dynamic style */
   width: ${props=> props.$sticWidth}px;
   height: ${props=> props.$sticHeight}px;
   scale: ${props=> props.$sticScale};
   background-image: url(${props=> props.$sticSrc});
   background-size: contain;
   background-repeat: no-repeat;
   background-position: center;
   rotate: ${props=> props.$stickRotate}deg;
   border: ${props=> props.$stickBorderWidth}px ${props=> props.$stickBorderStyle} ${props=> props.$stickBorderColor};
   box-shadow: 0px 0px ${props=> props.$stickShodowWidht}px ${props=> props.$stickShodowColor};
   opacity: ${props=> props.$stickOpacity};
   background-color: ${props=> props.$stickColor};
   filter: ${props=> props.$stickFilter};
   border-radius: ${props=> props.$stickRadius}px;
   backdrop-filter: blur(${props=> props.$stickBlur}px);
   transform: ${props=> props.$stickTranslate};
   visibility: ${props=> props.$stickvibility};
   z-index: ${props=> props.$stickZindex + 1};


   /* border on  selected */
   &::before{
    content: '';
    width: ${props=> props.$sticWidth}px;
    height: ${props=> props.$sticHeight}px;
    border: dashed 2px #fff;
    display: ${props=> props.$stickSelected};
   box-shadow:  0px 0px 1px 1px #000;
   }
`;
const Translator = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  left:calc(50% - 15px);
  bottom: -15px;
  border:  1px solid #333;
  -webkit-user-drag: element;
  cursor: move;
  display: flex;
  align-items: center;
  justify-content: center;
  display: ${props=> props.$stickSelected === "block" ? "flex" : "none"};
`;
const IconOnItem = styled.i`
  font-size: 20px;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Sticker = ({item,ContexBy}) => {
  const context = useContext(ContexBy);
  const stickElement = useRef();
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);
  const [draged, setdraged] = useState(false);
  
  const selectingStick = ()=>{
   let newObject = [...context.itemArray];
   newObject.forEach(itemeach=>{
     if (itemeach === item) {
       itemeach.selected = true;
     }else{
       itemeach.selected = false;
     }
   });
   context.setitemArray(newObject);
   context.settoolsSideStatus("sticker");
   context.sethandleComponent(handlerList.EditSize);
 }
 const stickDraging = (e)=>{
  if (e.clientY !== 0 || e.clientX !== 0) {
    stickElement.current.style.transform = `translate(${e.clientX - x}px, ${e.clientY - y}px)`;
  }else{
    stickDragingDisable(e.target);
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
const stickDragingDisable = (target)=>{
  target.draggable = "false";
  let newObject = [...context.itemArray];
  newObject.forEach(itemeach=>{
    if (itemeach === item) {
      itemeach.tarnslate = stickElement.current.style.transform;
    }
  });
  context.setitemArray(newObject);
}


    return ( <StickerContain ref={stickElement} onClick={selectingStick}
       $stickRotate={item.rotate} $stickBorderWidth={item.border.width} $stickBorderStyle={item.border.style}
        $stickBorderColor={item.border.color} $sticWidth={item.width} $sticHeight={item.height} $sticScale={item.scale}
        $stickShodowWidht={item.shadow.width} $stickShodowColor={item.shadow.color} $stickOpacity={item.opacity}
        $stickColor={item.color} $stickFilter={item.filter} $stickRadius={item.borderRadius} $stickBlur={item.blur}
        $stickSelected={item.selected === false ? "none" : "block"} $stickZindex={item.zIndex}
     $sticSrc={item.src} $stickTranslate={item.tarnslate} $stickvibility={item.visiblity}>
      <Translator  onDrag={stickDraging} onMouseDown={mousedownhandler} draggable={"false"}
      $stickSelected={item.selected === false ? "none" : "block"}>
        <IconOnItem className="bi bi-arrows-move"></IconOnItem></Translator>
     </StickerContain> );
}
 
export default Sticker;