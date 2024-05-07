import styled from "styled-components";
import Context from '../components/context/context';
import { useContext } from "react";

const LayerEditorContainer = styled.div`
    grid-column: 1/3;
    grid-row: 2/11;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-top: 1px solid #48CFAD;
    padding-top: 3%;
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
const Layer = styled.div`
    width: 90%;
    height: 40px;
    margin: 2% 0;
    display: flex;
    align-items: center;
    border-radius: 3px;
    border: 0.3px solid #cecece;
    padding: 0 2px 0 4px;
    gap: 5px;
`;
const ValueBox = styled.div`
    width: 50%;
    height: 90%;
    overflow: hidden;
    display: flex;
    align-items: center;
    border-radius: 2px;
`;
const BtnBox = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
`;
const LayerIconTools = styled.i`
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 16px;
    color: #48CFAD;
    &:hover{
        scale: 1.2;
    }
`;
const ImgBox = styled.img`
    width: 100%;
    height: auto;
`;
const Paragraf = styled.p`
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding-right: 5px;
`;
const LayerEditor = () => {
    const context = useContext(Context);
    return ( 
    <LayerEditorContainer>
        {context.itemArray.map(item=>(
            item.state === "text" ? (<Layer>
                <ValueBox><Paragraf>{item.value}</Paragraf></ValueBox>
                <BtnBox>
                    <LayerIconTools className="bLayerIconTools bi-trash3-fill"></LayerIconTools>
                    <LayerIconTools className="bi bi-eye-slash-fill"></LayerIconTools>
                    <LayerIconTools className="bi bi-chevron-down"></LayerIconTools>
                    <LayerIconTools className="bi bi-chevron-up"></LayerIconTools>
                </BtnBox>
            </Layer>) :
            (<Layer>
                <ValueBox><ImgBox src={item.src} alt="img"/></ValueBox>
                <BtnBox>
                    <LayerIconTools className="bi bi-trash3-fill"></LayerIconTools>
                    <LayerIconTools className="bi bi-eye-slash-fill"></LayerIconTools>
                    <LayerIconTools className="bi bi-chevron-down"></LayerIconTools>
                    <LayerIconTools className="bi bi-chevron-up"></LayerIconTools>
                </BtnBox>
            </Layer>)
        ))}
    </LayerEditorContainer> 
    );
}
 
export default LayerEditor;