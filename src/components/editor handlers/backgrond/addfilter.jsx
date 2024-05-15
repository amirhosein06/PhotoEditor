import styled from "styled-components";

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
  width: 100%;
  height: 100%;
  display: flex;
  /* align-items: center; */
  justify-content: flex-end;
  gap: 1%;
  padding-top: 10px;
`;

const AddFilter = () => {
    return (
    <Container>
        <Title>
        <h3>انـتـخـاب جـلـوه</h3>
        </Title>
        <Content>

        </Content>
    </Container> 
    );
}
 
export default AddFilter;