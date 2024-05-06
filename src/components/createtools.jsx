import styled from "styled-components";
import TextTools from "../tools List/toolsForText";
import StickerTools from "../tools List/toolsForSticker";
import BackgroundTools from "../tools List/toolsForBack";
import Context from '../components/context/context';
import { useContext } from "react";

const ToolsContainer = styled.div`
    grid-column: 10/13;
    grid-row: 2/11;
    border-top: 1px solid #48CFAD;
    overflow-y: scroll;
    &::-webkit-scrollbar{
        width: 7px;
    }
    &::-webkit-scrollbar-track{
        background: transparent;
    }
    &::-webkit-scrollbar-thumb{
        background: #37BC9B;
        border-radius: 10px;
    }
`;

// style for child component
export const ToolsList = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3% 0 6% 0;
    flex-direction: column;
`;
export const ToolItem = styled.div`
    width: 90%;
    height: 50px;
    display: flex;
    align-items: center;
    padding-right: 20px;
    gap: 5%;
    border-radius: 8px;
    cursor: pointer;
    background-color: #fff;
    border: 1px solid #48CFAD;
    color: #37BC9B;
    transition: all 0.2s;
    margin-bottom: 10px;
    &:active{
        border: 3px solid #48CFAD;
    }
`;
export const ToolsIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3em;
`;

const CreateTools = () => {
    const context = useContext(Context);
    return ( 
    <ToolsContainer>
        {context.toolsSideStatus === "background" ? (<BackgroundTools/>):
         context.toolsSideStatus === "text" ? (<TextTools/>):
         (<StickerTools/>)}
    </ToolsContainer>
    );
}
 
export default CreateTools;