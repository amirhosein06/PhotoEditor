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

const EditTextAlighn = () => {
    const context = useContext(Context);

    const textToCenter = ()=>{
        let newObject = [...context.itemArray];
        newObject.forEach(itemeach=>{
          if (itemeach.selected === true) {
                itemeach.textalighn = "center";
          };
        });
        context.setitemArray(newObject);
    };
    const textToRight = ()=>{
        let newObject = [...context.itemArray];
        newObject.forEach(itemeach=>{
          if (itemeach.selected === true) {
            if (itemeach.textalighn === "right") {
                itemeach.textalighn = "center";
            }else{
                itemeach.textalighn = "right";
            }
          };
        });
        context.setitemArray(newObject);
    };

    const textToLeft = ()=>{
        let newObject = [...context.itemArray];
        newObject.forEach(itemeach=>{
          if (itemeach.selected === true) {
            if (itemeach.textalighn === "left") {
                itemeach.textalighn = "center";
            }else{
                itemeach.textalighn = "left";
            }
          };
        });
        context.setitemArray(newObject);
    };

    return ( 
        <Container>
        <ChangeStyleButton><i onClick={textToRight} className="bi bi-text-right"></i></ChangeStyleButton>
        <ChangeStyleButton><i onClick={textToCenter} className="bi bi-text-center"></i></ChangeStyleButton>
        <ChangeStyleButton><i onClick={textToLeft} className="bi bi-text-left"></i></ChangeStyleButton>
      </Container>
     );
}
 
export default EditTextAlighn;