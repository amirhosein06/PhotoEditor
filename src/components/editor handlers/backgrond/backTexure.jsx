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
  width: 40%;
  height: 60%;
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
  width: 15%;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: #fff;
  color: #3EB489;
  height: 40px;
`;
const InputRange = styled.input`
& {
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
  width: 25rem;
  width: 100%;
}
&:focus {
  outline: none;
}
&::-webkit-slider-runnable-track {
  background-color: #add8e6;
  border-radius: 0.5rem;
  height: 0.5rem;
}
&::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  margin-top: -4px;
  background-color: #808080;
  border-radius: 0.5rem;
  height: 1rem;
  width: 1rem;
}
&:focus::-webkit-slider-thumb {
  outline: 3px solid #808080;
  outline-offset: 0.125rem;
}
&::-moz-range-track {
  background-color: #add8e6;
  border-radius: 0.5rem;
  height: 0.5rem;
}
&::-moz-range-thumb {
  background-color: #808080;
  border: none; /*Removes extra border that FF applies*/
  border-radius: 0.5rem;
  height: 1rem;
  width: 1rem;
}
&:focus::-moz-range-thumb{
  outline: 3px solid #808080;
  outline-offset: 0.125rem;
}  
`;

const BackTexture = () => {
    const context = useContext(Context);
    const [FileNmae, setFileNmae] = useState("انـتـخـاب فـایـل");
    const [rangeVal, setrangeVal] = useState(0.5);

    const backTextureOpacity = (e)=>{
        setrangeVal(e.target.value);
      const newObject = {...context.backgroundData};
      newObject.mask.opacity = e.target.value;
      context.setbackgroundData(newObject);
    };
    const fileCoosing = (e)=>{
        const filenameVariable = e.target.files[0].name === "undefined" ? FileNmae : e.target.files[0].name;
        setFileNmae(filenameVariable);
        const newObject = {...context.backgroundData};
        newObject.mask.src = window.URL.createObjectURL(e.target.files[0]);
        context.setbackgroundData(newObject);
    };
    const deleteFille = ()=>{
        setFileNmae("انـتـخـاب فـایـل");
        const newObject = {...context.backgroundData};
        newObject.mask.src = "";
        context.setbackgroundData(newObject);
    };

    return ( 
        <Container>
            <ChooseFile htmlFor="fileOploder">{FileNmae}</ChooseFile>
            <input type="file" id="fileOploder" onChange={fileCoosing} style={{display: "none"}}/>
            <div style={{width: "40%",display: "flex",flexDirection: "column"}}>
            <h5 style={{color: "#fff"}}>شـفـافـیـت:</h5>
            <InputRange type="range" value={rangeVal} step={0.1} min={0} max={1} onChange={backTextureOpacity}/>
            </div>
            <Btn onClick={deleteFille}>حـذف بـافـت</Btn>
        </Container> 
     );
}
 
export default BackTexture;