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
    border-radius: 10px;
    padding: 5px;
    font-weight: 500;
    font-size: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10%;
    color: #fff;
    transition: all 1s;
    background-color: #37BC9B;
    box-shadow: 0px 0px 10px #e0e0e0;
    &:active{
        scale: 0.5;
    }
`;
const Icon = styled.i`
    font-size: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const AddItemNav = () => {
    return ( 
    <AddItemContainer>
        <Btns><Icon className="bi bi-stickies"></Icon>
            افـزودن بـرچـسـب
        </Btns>
        <Btns><Icon className="bi bi-fonts" style={{fontSize: "25px"}}></Icon>
            افـزودن مـتـن
        </Btns>
        <Btns><Icon className="bi bi-back"></Icon>
        تـغیـیـر پـس زمـیـنـه
        </Btns>
    </AddItemContainer>
    );
}
 
export default AddItemNav;