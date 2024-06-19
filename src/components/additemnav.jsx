import styled from "styled-components";
import Context from '../components/context/context';
import { useContext } from "react";
import handlerList from "./editor handlers/handlersRepo";

const AddItemContainer = styled.div`
    grid-column: 3/10;
    grid-row: 1/2;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2%;
    //for tablet
    @media screen and (max-width: 1050px) {
       grid-column: 1/13;
       grid-row: 2/3;
    }
`;
const Btns = styled.button`
    width: 30%;
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
    transition: all 0.1s;
    background-color: #37BC9B;
    box-shadow: 0px 0px 10px #e0e0e0;
    //for tablet
    @media screen and (max-width: 1050px) {
       grid-column: 1/13;
       grid-row: 2/3;
       font-size: 1.5em;
       height: 90%;
    }
    &:active{
        scale: 0.9;
    }
`;
const Icon = styled.i`
    font-size: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    //for tablet
    @media screen and (max-width: 1050px) {
       font-size: 25px;
    }
`;
const Icontext = styled(Icon)`
    font-size: 25px !important;
    //for tablet
    @media screen and (max-width: 1050px) {
        font-size: 33px !important;
    }
`;

const AddItemNav = () => {
    const context = useContext(Context);

    const createNewSticker = ()=>{
        let newObject = [...context.itemArray];
        newObject.forEach(itemeach=>{
            itemeach.selected = false;
        });
        context.setitemArray(newObject);
        context.sethandleComponent(handlerList.CreateNewStick);
    };
    const createNewText = ()=>{
        context.settoolsSideStatus("text");
        let newObject = [...context.itemArray];
        newObject.forEach(itemeach=>{
            itemeach.selected = false;
        });
        newObject = [...newObject,{
            state: "text",
            tarnslate: "translate(0px,0px)",
            zIndex: newObject.length + 1,
            visiblity: "visible",
            selected: true,
            value: "مـتـن نـمـونـه",
            font: "",
            size: 40,
            color: "#727272",
            bold: "400",
            italic: "unset",
            underlin: "none",
            rotate: "0",
            border: {
              color: "#fff",
              width: "0"
            },
            shadow: {
              color: "#fff",
              width: "0"
            },
            mask: "",
            opacity: "1",
            blur: "0",
            lineHeight: "40",
            textalighn: "center",
            flip: "0"
        }]
        context.setitemArray(newObject);
        context.sethandleComponent(handlerList.TextEditor);
    };
    const changeBackground = ()=>{
        context.settoolsSideStatus("background");
        let newObject = [...context.itemArray];
        newObject.forEach(itemeach=>{
            itemeach.selected = false;
        });
        context.setitemArray(newObject);
        context.sethandleComponent(handlerList.AddPhoto);
    };

    return ( 
    <AddItemContainer>
        <Btns onClick={createNewSticker}><Icon className="bi bi-stickies"></Icon>
            افـزودن بـرچـسـب
        </Btns>
        <Btns onClick={createNewText}><Icontext className="bi bi-fonts"></Icontext>
            افـزودن مـتـن
        </Btns>
        <Btns onClick={changeBackground}><Icon className="bi bi-back"></Icon>
        تـغیـیـر پـس زمـیـنـه
        </Btns>
    </AddItemContainer>
    );
}
 
export default AddItemNav;