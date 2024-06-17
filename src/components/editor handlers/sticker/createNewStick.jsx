import styled from "styled-components";
import { useContext,useState } from "react";
import Context from "../../context/context";
import handlerList from "../handlersRepo";

const Container = styled.div`
  width: 100%;
  height: calc(100% - 5px);
  background-color: #3EB489;
  margin-top: 5px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  padding: 7px 8px 0 8px;
  overflow: hidden;
  padding-inline: 2%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5%;
`;
const ChooseFile = styled.label`
  width: 40%;
  height: 90%;
  border-radius: 8px;
  border: 2px dashed #fff;
  color: #fff;
  padding: 5px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
    font-weight: 600;
    cursor: pointer;
`;
const LeftSide = styled.div`
  width: 60%;
  height: 90%;
  color: #fff;
  display: flex;
  flex-direction: column;
`;
const SticBox = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10%;
  padding-top: 5%;
  & span{
    background-color: #fff;
    cursor: pointer;
  }
`;

const CreateNewStick = () => {
  const context = useContext(Context);
  const [FileNmae, setFileNmae] = useState("انـتـخـاب فـایـل");

  const fileCoosing = (e)=>{
    const filenameVariable = e.target.files[0].name === "undefined" ? FileNmae : e.target.files[0].name;
    setFileNmae(filenameVariable);
    let newObject = [...context.itemArray];
    newObject.forEach(itemeach=>{
        itemeach.selected = false;
    });
    newObject = [...newObject,{
        state: "sticker",
        width: "200",
        height: "200",
        scale: "1",
        tarnslate: "translate(0px,0px)",
        zIndex: newObject.length + 1,
        type: "imagen",
        visiblity: "visible",
        selected: true,
        src: window.URL.createObjectURL(e.target.files[0]),
        rotate: "",
        border: {
          color: "",
          style: "solid",
          width: ""
        },
        shadow: {
          color: "",
          width: ""
        },
        opacity: "1",
        color: "transparent",
        filter: "",
        borderRadius: "",
        blur: ""
    }];
    context.setitemArray(newObject);
    context.settoolsSideStatus("sticker");
    context.sethandleComponent(handlerList.EditSize);
};
const addCircle = ()=>{
    let newObject = [...context.itemArray];
    newObject.forEach(itemeach=>{
        itemeach.selected = false;
    });
    newObject = [...newObject,{
        state: "sticker",
        width: "200",
        height: "200",
        scale: "1",
        tarnslate: "translate(0px,0px)",
        zIndex: newObject.length + 1,
        type: "circle",
        visiblity: "visible",
        selected: true,
        src: "",
        rotate: "",
        border: {
          color: "",
          style: "solid",
          width: ""
        },
        shadow: {
          color: "",
          width: ""
        },
        opacity: "1",
        color: "#727272",
        filter: "",
        borderRadius: "100",
        blur: ""
    }];
    context.setitemArray(newObject);
    context.settoolsSideStatus("sticker");
    context.sethandleComponent(handlerList.EditSize);
};
const addSquare = ()=>{
    let newObject = [...context.itemArray];
    newObject.forEach(itemeach=>{
        itemeach.selected = false;
    });
    newObject = [...newObject,{
        state: "sticker",
        width: "200",
        height: "200",
        scale: "1",
        tarnslate: "translate(0px,0px)",
        zIndex: newObject.length + 1,
        type: "square",
        visiblity: "visible",
        selected: true,
        src: "",
        rotate: "",
        border: {
          color: "",
          style: "solid",
          width: ""
        },
        shadow: {
          color: "",
          width: ""
        },
        opacity: "1",
        color: "#727272",
        filter: "",
        borderRadius: "",
        blur: ""
    }];
    context.setitemArray(newObject);
    context.settoolsSideStatus("sticker");
    context.sethandleComponent(handlerList.EditSize);
};
const addRectangle = ()=>{
    let newObject = [...context.itemArray];
    newObject.forEach(itemeach=>{
        itemeach.selected = false;
    });
    newObject = [...newObject,{
        state: "sticker",
        width: "200",
        height: "100",
        scale: "1",
        tarnslate: "translate(0px,0px)",
        zIndex: newObject.length + 1,
        type: "rectangle",
        visiblity: "visible",
        selected: true,
        src: "",
        rotate: "",
        border: {
          color: "",
          style: "solid",
          width: ""
        },
        shadow: {
          color: "",
          width: ""
        },
        opacity: "1",
        color: "#727272",
        filter: "",
        borderRadius: "",
        blur: ""
    }];
    context.setitemArray(newObject);
    context.settoolsSideStatus("sticker");
    context.sethandleComponent(handlerList.EditSize);
};

    return ( 
    <Container>
        <ChooseFile htmlFor="fileOploderStick">{FileNmae}</ChooseFile>
        <input type="file" id="fileOploderStick" onChange={fileCoosing} style={{display: "none"}}/>
        <LeftSide>
           افـزودن شـکـل :
           <SticBox>
             <span onClick={addSquare} style={{width: "50px",height: "50px"}}></span>
             <span onClick={addCircle} style={{width: "50px",height: "50px",borderRadius: "50%"}}></span>
             <span onClick={addRectangle} style={{width: "100px",height: "50px"}}></span>
           </SticBox>
        </LeftSide>
    </Container> 
    );
}
 
export default CreateNewStick;