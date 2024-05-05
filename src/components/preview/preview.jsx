import styled from "styled-components";

const PreviewContainer = styled.div`
    grid-column: 3/10;
    grid-row: 2/8;
    background-color: red;
`;

const Preview = () => {
    return ( 
    <PreviewContainer>
        Preview
    </PreviewContainer> 
    );
}
 
export default Preview;