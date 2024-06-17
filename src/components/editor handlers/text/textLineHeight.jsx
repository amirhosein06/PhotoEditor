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
  position: relative;
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
const Title = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3%;
  position: absolute;
  top: 0;
  width: 97%;
  height: 40%;
  & h3{
    font-weight: 500;
    width: fit-content;
    flex: 1;
  }
  &::after{
    content: '';
    width: 100%;
    height: 1px;
    flex: 2;
    background-color: #fff;
  }
`;

const TextLineHeight = () => {
    const context = useContext(Context);
    
    let inputDefultVal = ()=>{
        let defVal;
        context.itemArray.forEach(itemeach=>{
            if (itemeach.selected === true) {
              defVal = itemeach.lineHeight;
            };
          });
        return defVal;
    };

    const changeFontBlur = (e)=>{
        let newObject = [...context.itemArray];
        newObject.forEach(itemeach=>{
          if (itemeach.selected === true) {
            itemeach.lineHeight = e.target.value;
          };
        });
        context.setitemArray(newObject);
    };

    return ( 
        <Container>
          <Title>فـاصـلـه خـطـوط</Title>
        <InputRange type="range" onChange={changeFontBlur} defaultValue={inputDefultVal()} min={25} max={150}/>
        </Container>
     );
}
 
export default TextLineHeight;