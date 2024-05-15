import styled from "styled-components";
import { useState,useContext,useEffect} from "react";
import Context from "../context/context";

const BlurBack = styled.div`
   z-index: 40;
   position: absolute;
   top: 0;
   width: 100%;
   height: 100%;
   backdrop-filter: blur(2px);
   display: flex;
   align-items: flex-end;
   justify-content: center;
`;
const GalleryContain = styled.div`
   width: 70%;
   height: 93%;
   background-color: #fff;
   box-shadow: 0px -1px 6px #dddddd;
   border-top-right-radius: 8px;
   border-top-left-radius: 8px;
`;
const GalleryNav = styled.div`
   width: 100%;
   height: 9%;
   padding: 10px 10px 0 10px;
   z-index: 3;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 1%;
   margin-bottom: 20px;
   & input{
      width: 79.5%;
      height: 100%;
      border-radius: 8px;
      border: 1px solid #3EB489;
      color: #067c51;
      font-weight: 400;
      font-size: 17px;
      outline: none;
      padding-right: 2%;
   }
   & input::placeholder{
      color: #067c51;
      font-weight: 400;
   }
   & button{
      width: 19.5%;
      height: 100%;
      border-radius: 8px;
      background-color: #3EB489;
      font-weight: 500;
      color: #fff;
      font-size: large;
      border: none;
      cursor: pointer;
      transition: all .5s;
      -webkit-transition: all .5s;
   }
`;
const GalleryContent = styled.div`
   width: 100%;
   height: calc(91% - 20px);
   overflow: hidden scroll;
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
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(auto);
    & img{
      border: 2px solid #fff;
      width: 100%;
      height: auto;
      cursor: pointer;
    }
`;


const Gallry = () => {
  const context = useContext(Context);

   const [imgShowedNum, setimgShowedNum] = useState(9);
   const [inputValue, setinputValue] = useState("");
   const [submitBtnShower, setsubmitBtnShower] = useState("none");

   const backToMain = ()=>{
      window.location.assign("/");
   };
   const inputChangeHandle = (e)=>{
      setinputValue(e.target.value);
      if (e.target.value) {
         setsubmitBtnShower("block");
      }else{
         setsubmitBtnShower("none");
      };
   };
   const contantHandleScroll = (e)=>{
      if (e.target.scrollTop >= (imgShowedNum / 3 * 80)) {
         setimgShowedNum(imgShowedNum + 3);
      };
   };
   const imgSelected = (e)=>{
      localStorage.clear();
      let newobject = [{...context.backgroundData}];
      newobject[0].src = e.target.src;
      localStorage.setItem("backData",JSON.stringify(newobject[0]));
      localStorage.setItem("arrayData",JSON.stringify(context.itemArray));
      window.location.assign("/");
   };
   const sendInputImgTo = ()=>{
      localStorage.clear();
      let newobject = [{...context.backgroundData}];
      newobject[0].src = inputValue;
      localStorage.setItem("backData",JSON.stringify(newobject[0]));
      localStorage.setItem("arrayData",JSON.stringify(context.itemArray));
      window.location.assign("/");
   };

    return ( 
    <BlurBack>
        <GalleryContain>
           <GalleryNav>
            <input onChange={inputChangeHandle} value={inputValue} type="text" placeholder="نـشـانـی ایـنـتـرنـتـی عـکـس خـود را داریـد؟ ایـنـجـا وارد کـنـیـد"/>
            <button onClick={sendInputImgTo} style={{display: submitBtnShower}}>تـنـظـیـم</button>
            <button onClick={backToMain}>بـازگـشـت</button>
           </GalleryNav>
           <GalleryContent onScroll={contantHandleScroll}>
            {Array(imgShowedNum).fill({}).map((i,index)=>(
               <img onClick={imgSelected} src={`https://picsum.photos/id/${index + 10}/400/400`} alt={"image lorem picsum"} />
            ))}
           </GalleryContent>
        </GalleryContain>
    </BlurBack>
    );
}
 
export default Gallry;