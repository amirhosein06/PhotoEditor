import styled from "styled-components";
import { useContext } from "react";
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
const InputRange = styled.input`
& {
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
  width: 25rem;
  width: 100%;
  margin-bottom: 10px;
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
  border: none;
  border-radius: 0.5rem;
  height: 1rem;
  width: 1rem;
}
&:focus::-moz-range-thumb{
  outline: 3px solid #808080;
  outline-offset: 0.125rem;
}  
`;

const EditFontSize = () => {
    const context = useContext(Context);

    let inputDefultVal = ()=>{
        let defVal;
        context.itemArray.forEach(itemeach=>{
            if (itemeach.selected === true) {
              defVal = itemeach.size;
            };
          });
        return defVal;
    };

    const changeFontSize = (e)=>{
        let newObject = [...context.itemArray];
        newObject.forEach(itemeach=>{
          if (itemeach.selected === true) {
            itemeach.size = e.target.value;
          };
        });
        context.setitemArray(newObject);
    };

    return ( 
        <Container>
            <InputRange type="range" onChange={changeFontSize} defaultValue={inputDefultVal()} min={10} max={200}/>
        </Container>
     );
}
 
export default EditFontSize;