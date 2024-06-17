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
const TransButton = styled.div`
  width: 25%;
  height: 70%;
  color: #fff;
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  & i{
  cursor: pointer;
  }
`;
const Content = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const StickPosition = () => {
    const context = useContext(Context);

    const textTranslatoeRightHandle = ()=>{
      let trans;
      let newObject = [...context.itemArray];
       newObject.forEach(itemeach=>{
         if (itemeach.selected === true) {
          trans = itemeach.tarnslate;
          const positSplited1 = trans.split("("),
          positSplited2 = positSplited1[1].split("px"),
          positSplitedY = positSplited2[1].split(",");

          itemeach.tarnslate = `translate(${Number(positSplited2[0]) + 5}px,${Number(positSplitedY[1])}px)`;
         }
       });
       context.setitemArray(newObject);
    };
    const textTranslatoeLeftHandle = ()=>{
      let trans;
      let newObject = [...context.itemArray];
       newObject.forEach(itemeach=>{
         if (itemeach.selected === true) {
          trans = itemeach.tarnslate;
          const positSplited1 = trans.split("("),
          positSplited2 = positSplited1[1].split("px"),
          positSplitedY = positSplited2[1].split(",");

          itemeach.tarnslate = `translate(${Number(positSplited2[0]) - 5}px,${Number(positSplitedY[1])}px)`;
         }
       });
       context.setitemArray(newObject);
    };
    const textTranslatoeUpHandle = ()=>{
      let trans;
      let newObject = [...context.itemArray];
       newObject.forEach(itemeach=>{
         if (itemeach.selected === true) {
          trans = itemeach.tarnslate;
          const positSplited1 = trans.split("("),
          positSplited2 = positSplited1[1].split("px"),
          positSplitedY = positSplited2[1].split(",");

          itemeach.tarnslate = `translate(${Number(positSplited2[0])}px,${Number(positSplitedY[1]) - 5}px)`;
         }
       });
       context.setitemArray(newObject);
    };
    const textTranslatoeDownHandle = ()=>{
      let trans;
      let newObject = [...context.itemArray];
       newObject.forEach(itemeach=>{
         if (itemeach.selected === true) {
          trans = itemeach.tarnslate;
          const positSplited1 = trans.split("("),
          positSplited2 = positSplited1[1].split("px"),
          positSplitedY = positSplited2[1].split(",");

          itemeach.tarnslate = `translate(${Number(positSplited2[0])}px,${Number(positSplitedY[1]) + 5}px)`;
         }
       });
       context.setitemArray(newObject);
    };


    return ( 
        <Container>
          <Title>جـابـجـایـی </Title>
          <Content>
          <TransButton><i onClick={textTranslatoeUpHandle} className="bi bi-arrow-up-short"></i></TransButton>
          <TransButton><i onClick={textTranslatoeDownHandle} className="bi bi-arrow-down-short"></i></TransButton>
          <TransButton><i onClick={textTranslatoeRightHandle} className="bi bi-arrow-right-short"></i></TransButton>
          <TransButton><i onClick={textTranslatoeLeftHandle} className="bi bi-arrow-left-short"></i></TransButton>
          </Content>
        </Container>
     );
}

export default StickPosition;