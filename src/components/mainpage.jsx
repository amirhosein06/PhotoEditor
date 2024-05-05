import styled from "styled-components";
import LayerEditor from "./layerseditor";
import AddItemNav from "./additemnav";
import Preview from "./preview/preview";
import Editor from "./editor";
import CreateTools from "./createtools";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(12,1fr);
    grid-template-rows: repeat(10,1fr);
`

const MainPage = () => {
    return ( 
    <Container>
       <LayerEditor />
       <AddItemNav />
       <Preview />
       <Editor />
       <CreateTools />
    </Container> 
    );
}
 
export default MainPage;