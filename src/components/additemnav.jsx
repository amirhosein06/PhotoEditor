import styled from "styled-components";

const AddItemContainer = styled.div`
    grid-column: 3/10;
    grid-row: 1/2;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2%;
`;
const Btns = styled.button`
    width: 28%;
    height: 70%;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    padding: 5px;
    font-weight: 500;
    font-size: 1em;
`;
const ChngeBackBtn = styled(Btns)`

`;
const AddTextBtn = styled(Btns)`
    
`;
const AddSticerkBtn = styled(Btns)`
    
`;

const AddItemNav = () => {
    return ( 
    <AddItemContainer>
        <AddSticerkBtn>
            افزودن برچسب
        </AddSticerkBtn>
        <AddTextBtn>
            افزودن متن
        </AddTextBtn>
        <ChngeBackBtn>
        تغییر پس زمینه
        </ChngeBackBtn>
    </AddItemContainer>
    );
}
 
export default AddItemNav;