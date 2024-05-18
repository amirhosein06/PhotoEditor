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
`;
const Title = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3%;
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
const Content = styled.div`
    &::-webkit-scrollbar{
        width: 7px;
        height: 7px;
    }
    &::-webkit-scrollbar-track{
        background: transparent;
    }
    &::-webkit-scrollbar-thumb{
        background: #ffffff;
        border-radius: 10px;
    }
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  gap: 2%;
  padding-top: 10px;
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
const GradiantContain = styled.div`
    width: 70%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    & div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 60%;
    }
    & div input[type="color"]{
        width: 49%;
        height: 30px;
        padding: 0;
        border: none;
        border-radius: 10px;
        margin: 0 .5%;
    }
    & div input[type="color"]::-webkit-color-swatch {
    border: none;
    border-radius: 10px;
    padding: 0;
    }
    & div input[type="color"]::-webkit-color-swatch-wrapper {
    border: none;
    border-radius: 10px;
    padding: 0;
    }
    & div span{
        width: 100%;
        height: 100%;
    }
    & button{
        width: 25%;
        height: 30px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        color: #3EB489;
        height: 40px;
    }

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

const BackColor = () => {
  const context = useContext(Context);
  const [rangeVal, setrangeVal] = useState(90);
  const [color1Val, setcolor1Val] = useState("red");
  const [color2Val, setcolor2Val] = useState("blue");

  const backColorHandling = (e)=>{
    const newObject = {...context.backgroundData};
    newObject.backgroundColor = e.target.value;
    context.setbackgroundData(newObject);
  };
  const backGradiantHandle = ()=>{
    const newObject = {...context.backgroundData};
    newObject.backgroundColor = `linear-gradient(${rangeVal}deg,${color1Val},${color2Val})`;
    context.setbackgroundData(newObject);
  };

    return ( 
        <Container>
        <Title>
        <h3>رنـگ پـس زمـیـنـه</h3>
        </Title>
        <Content>
          <input type="color" onChange={backColorHandling} defaultValue={context.backgroundData.backgroundColor}/>
          <GradiantContain>
            <h5>طـیـف رنـگ:</h5>
            <div>
            <InputRange type="range" onChange={(e)=>{setrangeVal(e.target.value)}} value={rangeVal} min={0} max={360}/>
            <span>
            <input type="color" onChange={(e)=>{setcolor1Val(e.target.value)}} value={color1Val}/>
            <input type="color" onChange={(e)=>{setcolor2Val(e.target.value)}} value={color2Val}/>
            </span>
            </div>
            <button onClick={backGradiantHandle}>اعـمـال</button>
          </GradiantContain>
        </Content>
    </Container> 
     );
}
 
export default BackColor;