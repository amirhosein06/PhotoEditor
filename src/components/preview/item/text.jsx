import styled from "styled-components";

const TextContain = styled.p`
   position: absolute;
  resize: both;
  overflow: auto;
  max-height: 100%;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
   &::selection{
    visibility: hidden;
    display: none;
   }
   font-size: 20px;
`;

const Text = ({item}) => {
    return ( <TextContain>Text</TextContain> );
}
 
export default Text;