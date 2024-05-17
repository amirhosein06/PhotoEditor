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
  gap: 5%;
`;
const SizeCreator = styled.div`
  width: 10%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  color: #fff;
  cursor: pointer;
  font-size: 17px;
  & i{
    font-size: 28px;
  }
`;


const BackResizing = () => {
  const context = useContext(Context);

  const backResizeHandling = (x,y)=>{
    const newObject = {...context.backgroundData};
    newObject.width = x;
    newObject.height = y;
    context.setbackgroundData(newObject);
  };

    return ( 
    <Container>
       <SizeCreator onClick={()=>{backResizeHandling("450","450")}}><i className="bi bi-square"></i>1:1</SizeCreator>
       <SizeCreator onClick={()=>{backResizeHandling("330","440")}}><i className="bi bi-tablet"></i>3:4</SizeCreator>
       <SizeCreator onClick={()=>{backResizeHandling("600","450")}}><i className="bi bi-tablet-landscape"></i>4:3</SizeCreator>
       <SizeCreator onClick={()=>{backResizeHandling("250","444")}}><i className="bi bi-phone"></i>9:16</SizeCreator>
       <SizeCreator onClick={()=>{backResizeHandling("727","409")}}><i className="bi bi-phone-landscape"></i>16:9</SizeCreator>
    </Container> 
    );
}
 
export default BackResizing;