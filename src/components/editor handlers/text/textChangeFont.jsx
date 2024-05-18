import styled from "styled-components";
import { useContext } from "react";
import Context from "../../context/context";

const Container = styled.div`
  width: 100%;
  height: calc(100% - 10px);
  background-color: #3EB489;
  border: 1px #3EB489 solid;
  margin-top: 10px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  padding: 5px 8px 0 8px;
  padding-inline: 2%;
  display: flex;
  align-items: center;
  justify-content: flex-end safe;
  overflow: scroll hidden;
  gap: 10px;
  &::-webkit-scrollbar{
        width: 7px;
        height: 7px;
    }
    &::-webkit-scrollbar-track{
        background: transparent;
    }
    &::-webkit-scrollbar-thumb{
        background: #ffffff;
        border-radius: 10px;
    }
`;
const FontBox = styled.div`
  min-width: 80px !important;
  height: 70px;
  font-family: ${props=>props.$fontCode} !important;
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  font-size: 20px;
  color: #0a5c3e;
`;

const TextChangeFont = () => {
  const context = useContext(Context);

    const fontsList = [
        {fontCode:`"B Arshia"`,fontName: "ارشیا"},
        {fontCode:`"B Bardiya"`,fontName: "بردیا"},
        {fontCode:`"B Koodak"`,fontName: "کودک"},
        {fontCode:`"B Mitra"`,fontName: "میترا"},
        {fontCode:"IranNastaliq",fontName: "نستعلیق"},
        {fontCode:`"B Traffic"`,fontName: "ترافیک"},
        {fontCode:`"B Badr"`,fontName: "بدر"},
        {fontCode:`"B Narenj"`,fontName: "نارنج"},
        {fontCode:`"B Elham"`,fontName: "الهام"},
        {fontCode:`"B Lotus"`,fontName: "لوتوس"},
        {fontCode:`"B Homa"`,fontName: "هما"},
        {fontCode:`"B Helal"`,fontName: "هلال"},
        {fontCode:`"B Jadid"`,fontName: "جدید"},
        {fontCode:`"B Zar"`,fontName: "زر"},
        {fontCode:`"B Titr"`,fontName: "تیتر"},
        {fontCode:`"B Roya"`,fontName: "رویا"},
        {fontCode:`"B Nazanin"`,fontName: "نازنین"}
    ];

    const chngeFont = (fontCode)=>{
      let newObject = [...context.itemArray];
      newObject.forEach(itemeach=>{
        if (itemeach.selected === true) {
          itemeach.font = fontCode;
        }
      });
      context.setitemArray(newObject);
    };
    return ( 
        <Container>
            <FontBox onClick={()=>chngeFont(`'vazirFont'`)} style={{fontSize: "10px"}} $fontCode={`'vazirFont'`}>وزیـر |<br/> پـیـش فـرض</FontBox>
         {fontsList.map((item,index)=>(
            <FontBox onClick={()=>chngeFont(item.fontCode)} key={index} $fontCode={item.fontCode}>{item.fontName}</FontBox>
         ))}
        </Container>
     );
}
 
export default TextChangeFont;