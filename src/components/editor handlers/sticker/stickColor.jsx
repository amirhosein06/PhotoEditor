import styled from "styled-components";
import { useContext,useState,useEffect } from "react";
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
    width: 100%;
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

const StickColor = () => {
  const context = useContext(Context);
  const [colorInputVal, setcolorInputVal] = useState();

  useEffect(()=>{
    context.itemArray.forEach(itemeach=>{
        if (itemeach.selected === true) {
          setcolorInputVal(itemeach.color);
        };
      });
  },[]);
  const changeColorHandle = (e)=>{
    setcolorInputVal(e.target.value);
    let newObject = [...context.itemArray];
    newObject.forEach(itemeach=>{
      if (itemeach.selected === true) {
        itemeach.color = e.target.value;
      }
    });
    context.setitemArray(newObject);
  };

    return ( 
        <Container>
            <Title>انـتـخـاب رنـگ </Title>
            <Content>
                <input onChange={changeColorHandle} type="color" value={colorInputVal}/>
            </Content>
        </Container>
     );
}
 

export default StickColor;