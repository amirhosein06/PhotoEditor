import Context from './components/context/context';
import { createGlobalStyle } from 'styled-components';
import { useState } from 'react';
import MainPage from './components/mainpage';
import vazirttf from './assets/vazir-font-v16.1.0/Vazir.ttf';
import vazireot from './assets/vazir-font-v16.1.0/Vazir.eot';
import vazirwoff from './assets/vazir-font-v16.1.0/Vazir.woff';
import vazirwoff2 from './assets/vazir-font-v16.1.0/Vazir.woff2';
import handlerList from './components/editor handlers/handlersRepo';


export const GlobalStyle = createGlobalStyle `
@font-face {
  font-family: 'vazirFont';
  src: url(${vazirwoff2}) format('woff2');
  src: url(${vazirwoff2}) format('woff2'),
  url(${vazirwoff}) format('woff'),
  url(${vazirttf}) format('ttf');
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
    -webkit-touch-callout: none;
    touch-action: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
   }
`;


function App() {
  const [toolsSideStatus, settoolsSideStatus] = useState("background");
  const [handlerListState, sethandlerListState] = useState(handlerList);
  const [handleComponent, sethandleComponent] = useState(handlerList.AddPhoto);
  const [backgroundData, setbackgroundData] = useState({
    src: "https://picsum.photos/400/400",
    filter: "",
    backgroundColor: "red",
    width: "",
    height: "",
    mask: {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf1g1Mgp6Xe-jzFpXaj3HC81JMyTHwcSqkSU-9rzTxGlsIhWol6Tn86EALvtCquO_kxaw&usqp=CAU",
      opacity: "0.1"
    }
  });
  const [itemArray, setitemArray] = useState([
    {
      state: "text",
      tarnslate: "",
      zIndex: 1,
      visiblity: "visible",
      selected: false,
      value: "سلام",
      font: "",
      color: "red",
      bold: "400",
      italic: "unset",
      underlin: "none",
      rotate: "0",
      border: {
        color: "",
        width: ""
      },
      shadow: {
        color: "",
        width: "",
        left: "0",
        top: "0"
      },
      mask: "",
      opacity: "",
      blur: "",
      lineHeight: "",
      textalighn: "",
      flip: ""
    },
    {
      state: "text",
      tarnslate: "",
      zIndex: 2,
      visiblity: "visible",
      selected: false,
      value: "2سلام",
      font: "",
      color: "red",
      bold: "400",
      italic: "unset",
      underlin: "none",
      rotate: "0",
      border: {
        color: "",
        width: ""
      },
      shadow: {
        color: "",
        width: "",
        left: "0",
        top: "0"
      },
      mask: "",
      opacity: "",
      blur: "",
      lineHeight: "",
      textalighn: "",
      flip: ""
    },
    {
      state: "text",
      tarnslate: "",
      zIndex: 3,
      visiblity: "visible",
      selected: false,
      value: "3سلام",
      font: "",
      color: "red",
      bold: "400",
      italic: "unset",
      underlin: "none",
      rotate: "0",
      border: {
        color: "",
        width: ""
      },
      shadow: {
        color: "",
        width: "",
        left: "0",
        top: "0"
      },
      mask: "",
      opacity: "",
      blur: "",
      lineHeight: "",
      textalighn: "",
      flip: ""
    },
    {
      state: "text",
      tarnslate: "",
      zIndex: 4,
      visiblity: "visible",
      selected: false,
      value: "4سلام",
      font: "",
      color: "red",
      bold: "400",
      italic: "unset",
      underlin: "none",
      rotate: "0",
      border: {
        color: "",
        width: ""
      },
      shadow: {
        color: "",
        width: "",
        left: "0",
        top: "0"
      },
      mask: "",
      opacity: "",
      blur: "",
      lineHeight: "",
      textalighn: "",
      flip: ""
    },
    {
      state: "sticker",
      tarnslate: "",
      zIndex: 5,
      type: "imagen",
      visiblity: "visible",
      selected: false,
      src: "https://picsum.photos/200/300",
      rotate: "",
      border: {
        color: "#fff",
        style: "solid",
        width: "2"
      },
      mask: "",
      shadow: {
        color: "",
        width: "",
        left: "0",
        top: "0"
      },
      opacity: "1",
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
      setitemArray: setitemArray,
      handlerListState: handlerListState,
      sethandlerListState: sethandlerListState,
      handleComponent: handleComponent,
      sethandleComponent: sethandleComponent
    }}>
      <MainPage/>
    </Context.Provider>
    </>
  );
}

export default App;
