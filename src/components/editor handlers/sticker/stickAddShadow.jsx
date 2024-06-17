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
  gap: 15px;

  & input[type="color"]{
    width: 30%;
    height: 70%;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
  }
    & input[type="color"]::-webkit-color-swatch {
    border: none;
    border-radius: 10px;
    padding: 0;
    }
    & input[type="color"]::-webkit-color-swatch-wrapper {
    border: none;
    border-radius: 10px;
    padding: 0;
    }
`;
const InputRange = styled.input`
& {
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
  width: 25rem;
  width: 50%;
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

const StickShadow = () => {
    const context = useContext(Context);

    let inputColorDefultVal = ()=>{
      let defVal;
      context.itemArray.forEach(itemeach=>{
          if (itemeach.selected === true) {
            defVal = itemeach.shadow.color;
          };
        });
      return defVal;
     };
     let inputSizeDefultVal = ()=>{
      let defVal;
      context.itemArray.forEach(itemeach=>{
          if (itemeach.selected === true) {
            defVal = Number(itemeach.shadow.width);
          };
        });
      return defVal;
      };
  
      const changeFontShadowColor = (e)=>{
          let newObject = [...context.itemArray];
          newObject.forEach(itemeach=>{
            if (itemeach.selected === true) {
              itemeach.shadow.color = e.target.value;
            };
          });
          context.setitemArray(newObject);
      };
      const changeFontShadowWidth = (e)=>{
          let newObject = [...context.itemArray];
          newObject.forEach(itemeach=>{
            if (itemeach.selected === true) {
              itemeach.shadow.width = e.target.value;
            };
          });
          context.setitemArray(newObject);
      };
    return ( 
        <Container>
        رنـگ:
        <input type="color" onChange={changeFontShadowColor} defaultValue={inputColorDefultVal()}/>
        انـدازه:
        <InputRange type="range" onChange={changeFontShadowWidth}  min={0} max={30} defaultValue={inputSizeDefultVal()}/>
    </Container>
     );
}

export default StickShadow;