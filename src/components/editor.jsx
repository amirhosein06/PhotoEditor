import styled from "styled-components";
import Context from '../components/context/context';
import { useContext } from "react";

const EditorBox = styled.div`
    grid-column: 3/10;
    grid-row: 9/11;
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