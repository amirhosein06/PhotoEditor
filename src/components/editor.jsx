import styled from "styled-components";
import Context from '../components/context/context';
import { useContext } from "react";

const EditorBox = styled.div`
    grid-column: 3/10;
    grid-row: 9/11;
    //for tablet
    @media screen and (max-width: 1050px) {
        grid-column: 1/14;
        grid-row: 12/14;
    }
`;

const Editor = () => {
    const context = useContext(Context);

    return ( 
    <EditorBox>
        {context.handleComponent}
    </EditorBox>
    );
}
 
export default Editor;