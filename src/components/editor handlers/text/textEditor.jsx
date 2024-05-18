import styled from "styled-components";
import { useContext,useState,useEffect } from "react";
import Context from "../../context/context";

const Container = styled.div`
  width: 100%;
  height: calc(100% - 10px);
  background-color: #3EB489;
  margin-top: 10px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  padding: 5px 8px 0 8px;
  overflow: hidden;
  padding-inline: 2%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5%;
`;
const TextAreaForEdit = styled.textarea`
  resize: none;
  width: 100%;
  height: 70%;
  border-radius: 8px;
  border: none;
  outline: none;
  padding: 7px 10px;
  font-size: 20px;
  &:focus{
    border: 1px solid #0f5e41;
  }
`;

const TextEditor = () => {
  const context = useContext(Context);
  const [textareaDefultVal, settextareaDefultVal] = useState("مـتـن نـمـونـه");

  useEffect(()=>{
    context.itemArray.forEach(itemeach=>{
        if (itemeach.selected === true) {
          settextVal(itemeach.value);
          settextareaDefultVal(itemeach.value);
        }else{
            settextareaDefultVal("مـتـن نـمـونـه");
        }
      });
  });

  const [textVal, settextVal] = useState(textareaDefultVal);


  const textAreaHanleChange = (e)=>{
    settextVal(e.target.value);
    let newObject = [...context.itemArray];
    newObject.forEach(itemeach=>{
      if (itemeach.selected === true) {
        itemeach.value = e.target.value;
      }
    });
    context.setitemArray(newObject);
  };

    return (    
    <Container>
      <TextAreaForEdit autoFocus="true" value={textVal} onChange={textAreaHanleChange}></TextAreaForEdit>
    </Container>
    );
}
 
export default TextEditor;