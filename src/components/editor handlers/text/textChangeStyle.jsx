import styled from "styled-components";
import { useContext,useState } from "react";
import Context from "../../context/context";

const Container = styled.div`
  width: 100%;
  height: calc(100% - 10px);
  background-color: #3EB489;
  margin-top: 10px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  padding: 10px 8px 0 8px;
  overflow: hidden;
  padding-inline: 2%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ChangeStyleButton = styled.div`
  width: 25%;
  height: 70%;
  color: #fff;
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: underline;
  & i{
  cursor: pointer;
  }
`;

const TextChangeStyle = () => {
    const context = useContext(Context);

    
    const textToBold = ()=>{
        let newObject = [...context.itemArray];
        newObject.forEach(itemeach=>{
          if (itemeach.selected === true) {
            if (itemeach.bold === "900") {
                itemeach.bold = "400";
            }else{
                itemeach.bold = "900";
            }
          };
        });
        context.setitemArray(newObject);
    };
    const textToItalic = ()=>{
        let newObject = [...context.itemArray];
        newObject.forEach(itemeach=>{
          if (itemeach.selected === true) {
            if (itemeach.italic === "italic") {
                itemeach.italic = "unset";
            }else{
                itemeach.italic = "italic";
            }
          };
        });
        context.setitemArray(newObject);
    };

    const textToUnderline = ()=>{
        let newObject = [...context.itemArray];
        newObject.forEach(itemeach=>{
          if (itemeach.selected === true) {
            if (itemeach.underlin === "underline") {
                itemeach.underlin = "none";
            }else{
                itemeach.underlin = "underline";
            }
          };
        });
        context.setitemArray(newObject);
    };
    const textToDelLine = ()=>{
        let newObject = [...context.itemArray];
        newObject.forEach(itemeach=>{
          if (itemeach.selected === true) {
            if (itemeach.underlin === "line-through") {
                itemeach.underlin = "none";
            }else{
                itemeach.underlin = "line-through";
            }
          };
        });
        context.setitemArray(newObject);
    };

    return ( 
        <Container>
        <ChangeStyleButton><i onClick={textToBold} className="bi bi-type-bold"></i></ChangeStyleButton>
        <ChangeStyleButton><i onClick={textToItalic} className="bi bi-type-italic"></i></ChangeStyleButton>
        <ChangeStyleButton><i onClick={textToUnderline} className="bi bi-type-underline"></i></ChangeStyleButton>
        <ChangeStyleButton><i onClick={textToDelLine} className="bi bi-type-strikethrough"></i></ChangeStyleButton>
      </Container>
     );
}
 
export default TextChangeStyle;