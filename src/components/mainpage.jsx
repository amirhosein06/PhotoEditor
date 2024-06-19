import styled from "styled-components";
import LayerEditor from "./layerseditor";
import AddItemNav from "./additemnav";
import Preview from "./preview/preview";
import Editor from "./editor";
import CreateTools from "./createtools";
import { useContext } from "react";
import Context from "./context/context";
import handlerList from "./editor handlers/handlersRepo";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(12,1fr);
    grid-template-rows: repeat(10,1fr);
    //for tablet
    @media screen and (max-width: 1050px) {
        grid-template-rows: repeat(13,1fr);
    }
`;
const NewProjectBtn = styled.button`
    grid-column: 1/3;
    grid-row: 1/2;
    background-color: #fff;
    margin: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
    gap: 5%;
    border-radius: 8px;
    color: #37BC9B;
    border: 1px solid #37BC9B;
    box-shadow: 0px 0px 3px #37bc9b40;
    cursor: pointer;
    font-weight: 600;
    //for tablet
    @media screen and (max-width: 1050px) {
        grid-column: 1/6;
        grid-row: 1/2;
        font-size: 25px;
        font-weight: 400;
    }
    & i{
        font-size: 22px;
        display: flex;
    align-items: center;
    justify-content: center;
    }
    &:hover{
        scale: 0.95;
    }
`;
const DownloadBtn = styled.button`
    grid-column: 11/13;
    grid-row: 1/2;
    background-color: #fff;
    margin: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
    gap: 5%;
    border-radius: 8px;
    color: #37BC9B;
    border: 1px solid #37BC9B;
    box-shadow: 0px 0px 3px #37bc9b40;
    cursor: pointer;
    font-weight: 600;
    //for tablet
    @media screen and (max-width: 1050px) {
       grid-column: 8/13;
       grid-row: 1/2;
       font-size: 25px;
       font-weight: 400;
    }
    & i{
        font-size: 22px;
        display: flex;
    align-items: center;
    justify-content: center;
    }
    &:hover{
        scale: 0.95;
    }
`;
const AboutLink = styled.a`
    grid-column: 10/11;
    grid-row: 1/2;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13.5px;
    color: #37BC9B;
    text-decoration: none;
    cursor: default;
    //for tablet
    @media screen and (max-width: 1050px) {
       grid-column: 6/8;
       grid-row: 1/2;
       font-size: 16.5px;
    }
    &:hover{
        text-decoration: underline;
    }
`;

const MainPage = () => {
    const context = useContext(Context);

    const createNewProject = ()=>{
        // یادم باشه alert
        context.setbackgroundData({
            src: "",
            filter: "",
            backgroundColor: "",
            width: "450",
            height: "450",
            mask: {
              src: "",
              opacity: "0.5"
            }
          });
        context.setitemArray([]);
        context.sethandleComponent(handlerList.AddPhoto);
        context.settoolsSideStatus("background");
    };

    return ( 
    <Container>
       <LayerEditor />
       <AddItemNav />
       <Preview />
       <Editor />
       <CreateTools />
       <NewProjectBtn onClick={createNewProject}>پـروژه جـدیـد <b>|</b> <i class="bi bi-plus-circle"></i></NewProjectBtn>
       <AboutLink href="/about">دربـاره مـن</AboutLink>
       <DownloadBtn>ذخـیـره <b>|</b> <i class="bi bi-box-arrow-down"></i></DownloadBtn>
    </Container> 
    );
}
 
export default MainPage;