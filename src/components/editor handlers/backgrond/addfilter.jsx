import styled from "styled-components";
import { useContext } from "react";
import Context from "../../context/context";

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
`;
const Title = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10%;
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

  align-items: center;
  justify-content: flex-start safe;
  gap: 5px;
  padding-top: 5px;
  overflow: scroll hidden;
  & img{
    width: 80px !important;
    height: 80px;
    cursor: pointer;
    border-radius: 3px;
    flex: 230px;
  }
`;

const AddFilter = () => {
  const context = useContext(Context);
  const filtersList = [
    "grayscale(100%)",
    "sepia(100%)",
    "saturate(172%)",
    "blur(1.5px)",
    "brightness(35%)",
    "brightness(135%)",
    "contrast(180%)",
    "invert(80%)",
    "opacity(35%)",
    "hue-rotate(0deg)",
    "hue-rotate(60deg)",
    "hue-rotate(120deg)",
    "hue-rotate(180deg)",
    "hue-rotate(240deg)",
    "hue-rotate(360deg)"
  ]

  const filterHandling = (item)=>{
    const newObject = {...context.backgroundData};
    newObject.filter = item;
    context.setbackgroundData(newObject);
  }

    return (
    <Container>
        <Title>
        <h3>انـتـخـاب جـلـوه</h3>
        </Title>
        <h4 style={{display: context.backgroundData.src === "" ? "block" : "none",color: "#fff",margin: "30px auto 0px auto"}}>تـصـویـری انـتـخـاب نـشـده !</h4>
        <Content style={{display: context.backgroundData.src === "" ? "none" : "flex"}}>
        <img onClick={()=>filterHandling("")} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTci2hMwp3HKVdRYxa4q5i_7rHPxRn1zKYjgBlHHphF9TE1camsB2csEu7AVkxVK0vErgI&usqp=CAU"}/>
         {filtersList.map((item)=>(
            <img onClick={()=>filterHandling(item)} src={context.backgroundData.src} style={{filter: item}}/>
         ))}
        </Content>
    </Container> 
    );
}
 
export default AddFilter;