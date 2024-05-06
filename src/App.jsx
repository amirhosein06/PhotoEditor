import Context from './components/context/context';
import { createGlobalStyle } from 'styled-components';
import { useState } from 'react';
import MainPage from './components/mainpage';
import vazirttf from './assets/vazir-font-v16.1.0/Vazir.ttf';
import vazireot from './assets/vazir-font-v16.1.0/Vazir.eot';
import vazirwoff from './assets/vazir-font-v16.1.0/Vazir.woff';
import vazirwoff2 from './assets/vazir-font-v16.1.0/Vazir.woff2';


export const GlobalStyle = createGlobalStyle `
@font-face {
  font-family: 'vazirFont';
  src: url(${vazireot});
  src: url(${vazirttf}) format('ttf'),
  url(${vazirwoff}) format('woff'),
  url(${vazirwoff2}) format('woff');
}
   body{
    width: 100%;
    height: 100vh;
    font-family: 'vazirFont' !important;
   }
   #root{
    width: 100%;
    height: 100vh;
    font-family: 'vazirFont' !important;
   }
   *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'vazirFont' !important;
   }
`;


function App() {
  const [toolsSideStatus, settoolsSideStatus] = useState("background");
  const [backgroundData, setbackgroundData] = useState({
    src: "",
    filter: "",
    backgroundColor: "",
    width: "",
    height: "",
    mask: ""
  });
  const [itemArray, setitemArray] = useState([
    {
      state: "text",
      selected: false,
      value: "",
      font: "",
      color: "",
      bold: false,
      italic: false,
      underlin: false,
      delline: false,
      rotate: "",
      border: "",
      shadow: "",
      mask: "",
      opacity: "",
      blur: "",
      lineHeight: "",
      textalighn: "",
      flip: ""
    },
    {
      state: "sticker",
      selected: false,
      src: "",
      rotate: "",
      border: "",
      mask: "",
      shadow: "",
      opacity: "",
      color: "",
      filter: "",
      borderRadius: "",
      blur: ""
    }
  ]);
  return (
    <>
    <GlobalStyle />
    <Context.Provider value={{
      toolsSideStatus: toolsSideStatus,
      settoolsSideStatus: settoolsSideStatus,
      backgroundData: backgroundData,
      setbackgroundData: setbackgroundData,
      itemArray: itemArray,
      setitemArray: setitemArray
    }}>
      <MainPage/>
    </Context.Provider>
    </>
  );
}

export default App;
