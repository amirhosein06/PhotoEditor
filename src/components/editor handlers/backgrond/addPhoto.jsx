import styled from "styled-components";
import { useState,useContext } from "react";
import Context from "../../context/context";

const AddphotoContain = styled.div`
  width: 100%;
  height: calc(100% - 10px);
  background-color: #3EB489;
  margin-top: 10px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  padding: 10px 8px 0 8px;
  overflow: hidden;
  padding-inline: 2%;
`;
const Title = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3%;
  & h3{
    font-weight: 500;
    width: fit-content;
    flex: 1;
  }
  &::after{
    content: '';
    width: 100%;
    height: 1px;
    flex: 2;
    background-color: #fff;
  }
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* align-items: center; */
  justify-content: flex-end;
  gap: 1%;
  padding-top: 10px;
`;
const ChooseFile = styled.label`
  width: 70%;
  height: 60%;
  border-radius: 8px;
  border: 2px dashed #fff;
  color: #fff;
  padding: 5px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
    font-weight: 600;
    cursor: pointer;
`;
const OpenGallery = styled.a`
  width: 30%;
  color:#fff ;
  height: 60%;
  background-color: #fff;
  border-radius: 8px;
  color: #3EB489;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  cursor: pointer;
  text-decoration: none;
  &:hover{
    text-decoration: underline;
  }
`;

const AddPhoto = () => {
  const context = useContext(Context);

  const [FileNmae, setFileNmae] = useState("انـتـخـاب فـایـل");
  const fileCoosing = (e)=>{
    const filenameVariable = e.target.files[0].name === "undefined" ? FileNmae : e.target.files[0].name;
    setFileNmae(filenameVariable);
    const newObject = {...context.backgroundData};
    newObject.src = window.URL.createObjectURL(e.target.files[0]);
    context.setbackgroundData(newObject);
  }
    return ( 
    <AddphotoContain>
        <Title>
        <h3>تـغـیـیـر عـکـس پـس زمـیـنـه</h3>
        </Title>
        <Content>
            <OpenGallery href="/gallery">عـــکـــس آنــلــایــن</OpenGallery>
            <ChooseFile htmlFor="fileOploder">{FileNmae}</ChooseFile>
            <input type="file" id="fileOploder" onChange={fileCoosing} style={{display: "none"}}/>
        </Content>
    </AddphotoContain>
    );
}
 
export default AddPhoto;