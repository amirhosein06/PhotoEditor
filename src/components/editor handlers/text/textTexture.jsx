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
  gap: 5%;
`;
const ChooseFile = styled.label`
  width: 70%;
  height: 80%;
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
const Btn = styled.button`
  width: 25%;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: #fff;
  color: #3EB489;
  height: 40px;
`;

const TextTexture = () => {
    const context = useContext(Context);
    const [FileNmae, setFileNmae] = useState("انـتـخـاب فـایـل");

    const fileCoosing = (e)=>{
        const filenameVariable = e.target.files[0].name === "undefined" ? FileNmae : e.target.files[0].name;
        setFileNmae(filenameVariable);
        let newObject = [...context.itemArray];
        newObject.forEach(itemeach=>{
          if (itemeach.selected === true) {
            itemeach.mask = window.URL.createObjectURL(e.target.files[0]);
            itemeach.color = "";
          };
        });
        context.setitemArray(newObject);
    };
    const deleteFille = ()=>{
        setFileNmae("انـتـخـاب فـایـل");
        let newObject = [...context.itemArray];
        newObject.forEach(itemeach=>{
          if (itemeach.selected === true) {
            itemeach.mask = "";
            itemeach.color = "#727272";
          };
        });
        context.setitemArray(newObject);
    };

    return ( 
        <Container>
            <ChooseFile htmlFor="fileOploderText">{FileNmae}</ChooseFile>
            <input type="file" id="fileOploderText" onChange={fileCoosing} style={{display: "none"}}/>
            <Btn onClick={deleteFille}>حـذف بـافـت</Btn>
        </Container>
     );
}
 
export default TextTexture;