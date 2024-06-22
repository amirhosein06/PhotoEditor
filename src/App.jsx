import Context from './components/context/context';
import { createGlobalStyle } from 'styled-components';
import { useState,useEffect } from 'react';
import { Routes,Route } from 'react-router-dom';
import MainPage from './components/mainpage';
import vazireot from './assets/vazir-font-v16.1.0/Vazir.eot';
import vazirwoff from './assets/vazir-font-v16.1.0/Vazir.woff';
import vazirwoff2 from './assets/vazir-font-v16.1.0/Vazir.woff2';
import handlerList from './components/editor handlers/handlersRepo';
import Gallry from './components/routing components/gallery';
import About from './components/routing components/about';


export const GlobalStyle = createGlobalStyle `
@font-face {
  font-family: 'vazirFont';
  src: url(${vazirwoff2}) format('woff');
  src: url(${vazirwoff2}) format('woff'),
  url(${vazirwoff}) format('woff2'),
  url(${vazireot}) format('eot');
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
  .active{
    border-width: 3px;
  }
`;


function App() {
  const [toolsSideStatus, settoolsSideStatus] = useState("background");
  const [handlerListState, sethandlerListState] = useState(handlerList);
  const [handleComponent, sethandleComponent] = useState(handlerList.AddPhoto);
  var tablet = window.matchMedia("(max-width: 1050px)");
  var mobile = window.matchMedia("(max-width: 550px)");
  const [defultBack, setdefultBack] = useState({
    src: "",
    filter: "",
    backgroundColor: "",
    width: mobile.matches ? window.innerWidth : tablet.matches ? "622" : "450",
    height: mobile.matches ? window.innerWidth : tablet.matches ? "622" : "450",
    mask: {
      src: "",
      opacity: "0.5"
    }
  });
  const [defultItems, setdefultItems] = useState([]);
  const [backgroundData, setbackgroundData] = useState(defultBack);
  const [itemArray, setitemArray] = useState(defultItems);

  useEffect(()=>{
    const backData = JSON.parse(localStorage.getItem("backData"));
    const arrayData = JSON.parse(localStorage.getItem("arrayData"));

    if (itemArray == defultItems && backgroundData == defultBack) {
      if (backData == null && arrayData == null) {
        localStorage.clear();
        localStorage.setItem("backData",JSON.stringify(backgroundData));
        localStorage.setItem("arrayData",JSON.stringify(itemArray));
        return;
      }else{
        setitemArray(arrayData);
        setbackgroundData(backData);
        return;
      }
    }else{
      localStorage.clear();
      localStorage.setItem("backData",JSON.stringify(backgroundData));
      localStorage.setItem("arrayData",JSON.stringify(itemArray));
      return;
    }
  });

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
      <Routes>
        <Route path='/gallery' Component={Gallry}/>
        <Route path='/about' Component={About}/>
        <Route path='/' Component={MainPage}/>
        <Route path='*' Component={MainPage}/>
      </Routes>
    </Context.Provider>
    </>
  );
}

export default App;
