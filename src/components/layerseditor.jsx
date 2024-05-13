import styled from "styled-components";
import Context from '../components/context/context';
import { useContext,useRef } from "react";

const LayerEditorContainer = styled.div`
    grid-column: 1/3;
    grid-row: 2/11;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    border-top: 1px solid #48CFAD;
    padding-top: 3%;
    overflow-y: scroll;
    flex-direction: column-reverse;
    &::-webkit-scrollbar{
        width: 7px;
    }
    &::-webkit-scrollbar-track{
        background: transparent;
    }
    &::-webkit-scrollbar-thumb{
        background: #37BC9B;
        border-radius: 10px;
    }
`;
const Layer = styled.div`
    width: 90%;
    height: 40px;
    margin: 2% 0;
    display: flex;
    align-items: center;
    border-radius: 3px;
    padding: 0 2px 0 4px;
    gap: 5px;
    border: solid;
    /* select style */
    border-width: ${props=>props.$selectCheck}px;
    border-color: ${props=>props.$selectCheck === "2" ? "#3EB489" : "#cecece"};
    order: ${props=>props.$LayerOrder};
`;
const ValueBox = styled.div`
    width: 50%;
    height: 90%;
    overflow: hidden;
    display: flex;
    align-items: center;
    border-radius: 2px;
`;
const BtnBox = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
`;
const LayerIconTools = styled.i`
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 16px;
    color: #48CFAD;
    &:hover{
        scale: 1.2;
    }
`;
const ImgBox = styled.img`
    width: 100%;
    height: auto;
`;
const Paragraf = styled.p`
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding-right: 5px;
    /* dynamic style */
    font-family: ${props=>props.$textFont};
    color: ${props=>props.$textColor};
`;
const LayerEditor = () => {
    const context = useContext(Context);
    const layerElement = useRef();

    const selectingItem = (item)=>{
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
    const deletingItem = (item)=>{
        let newObject = [...context.itemArray];
        const filteringArray = newObject.filter(u=>u !== item);
        context.setitemArray(filteringArray);
    };
    const hiddingItem = (item,e)=>{
        let newObject = [...context.itemArray];
        newObject.forEach(itemeach=>{
          if (itemeach === item) {
            if (itemeach.visiblity === "hidden") {
                itemeach.visiblity = "visible";
                e.target.classList.add("bi-eye-slash-fill");
                e.target.classList.remove("bi-eye-fill");
            }else{
                itemeach.visiblity = "hidden";
                e.target.classList.remove("bi-eye-slash-fill");
                e.target.classList.add("bi-eye-fill");
            }
          };
        });
        context.setitemArray(newObject);
    };
    const orderIncreas = (item)=>{
        let newObject = [...context.itemArray];
        const lastZindexOfitem = item.zIndex;
        newObject.forEach((itemeach)=>{ 
          if(itemeach.zIndex === (lastZindexOfitem + 1)){
            itemeach.zIndex -= 1 ;
          }else if (itemeach === item && item.zIndex < newObject.length) {
            itemeach.zIndex += 1 ;
          }
        });
        context.setitemArray(newObject);
    };
    const orderDecerement = (item)=>{
        let newObject = [...context.itemArray];
        const lastZindexOfitem = item.zIndex;
        newObject.forEach((itemeach)=>{
          if(itemeach.zIndex === (lastZindexOfitem - 1)){
            itemeach.zIndex += 1 ;
          }else if (itemeach === item && itemeach.zIndex > 1) {
            itemeach.zIndex -= 1 ;
          }
        });
        context.setitemArray(newObject);
    }

    return ( 
    <LayerEditorContainer>
        {context.itemArray.map((item,index)=>(
            item.state === "text" ? (<Layer ref={layerElement} key={index} $LayerOrder={item.zIndex}
             $selectCheck={item.selected === false ? "0.3" : "2"}>
                <ValueBox onClick={()=>{selectingItem(item)}}><Paragraf $textColor={item.color} $textFont={item.font}>{item.value}</Paragraf></ValueBox>
                <BtnBox>{item.zIndex}
                    <LayerIconTools  onClick={()=>{deletingItem(item)}} className="bLayerIconTools bi-trash3-fill"></LayerIconTools>
                    <LayerIconTools  onClick={(e)=>{hiddingItem(item,e)}} className="bi bi-eye-slash-fill"></LayerIconTools>
                    <LayerIconTools  onClick={()=>{orderDecerement(item)}} className="bi bi-chevron-down"></LayerIconTools>
                    <LayerIconTools  onClick={()=>{orderIncreas(item)}} className="bi bi-chevron-up"></LayerIconTools>
                </BtnBox>
            </Layer>) :
            (<Layer ref={layerElement} key={index}  $LayerOrder={item.zIndex} $selectCheck={item.selected === false ? "0.3" : "2"}>
                <ValueBox onClick={()=>{selectingItem(item)}}><ImgBox src={item.src} alt="شکل"/></ValueBox>
                <BtnBox>{item.zIndex}
                    <LayerIconTools onClick={()=>{deletingItem(item)}} className="bi bi-trash3-fill"></LayerIconTools>
                    <LayerIconTools onClick={(e)=>{hiddingItem(item,e)}} className="bi bi-eye-slash-fill"></LayerIconTools>
                    <LayerIconTools onClick={()=>{orderDecerement(item)}} className="bi bi-chevron-down"></LayerIconTools>
                    <LayerIconTools onClick={()=>{orderIncreas(item)}} className="bi bi-chevron-up"></LayerIconTools>
                </BtnBox>
            </Layer>)
        ))}
    </LayerEditorContainer> 
    );
}
 
export default LayerEditor;