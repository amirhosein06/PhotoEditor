import { ToolsList,ToolItem,ToolsIcon } from "../components/createtools";
import Context from '../components/context/context';
import { useContext } from "react";

const TextTools = () => {
    const context = useContext(Context);
    
    const openHandlerBack = (targetComponent)=>{
        context.sethandleComponent(targetComponent);
    };

    return ( 
    <ToolsList>
     <ToolItem onClick={()=>{openHandlerBack(context.handlerListState.TextEditor)}}><ToolsIcon className="bi bi-pencil-square"></ToolsIcon>ویـرایـش</ToolItem>
     <ToolItem onClick={()=>{openHandlerBack(context.handlerListState.TextChangeFont)}}><ToolsIcon className="bi bi-file-earmark-font-fill"></ToolsIcon>فـونـت</ToolItem>
     <ToolItem onClick={()=>{openHandlerBack(context.handlerListState.TextColor)}}><ToolsIcon className="bi bi-palette-fill"></ToolsIcon>رنـگ</ToolItem>
     <ToolItem onClick={()=>{openHandlerBack(context.handlerListState.EditTextPosition)}}><ToolsIcon className="bi bi-arrows-move"></ToolsIcon>جـابـجـایـی</ToolItem>
     <ToolItem onClick={()=>{openHandlerBack(context.handlerListState.EditFontSize)}}><ToolsIcon className="bi bi-arrows-angle-expand"></ToolsIcon>تـغـیـیـر انـدازه</ToolItem>
     <ToolItem><ToolsIcon className="bi bi-clipboard-fill"></ToolsIcon>کـپـی</ToolItem>
     <ToolItem onClick={()=>{openHandlerBack(context.handlerListState.TextChangeStyle)}}><ToolsIcon className="bi bi-type-underline"></ToolsIcon>سـبـک نـوشـته</ToolItem>
     <ToolItem onClick={()=>{openHandlerBack(context.handlerListState.TextRotater)}}><ToolsIcon className="bi bi-arrow-repeat"></ToolsIcon>چـرخـش</ToolItem>
     <ToolItem onClick={()=>{openHandlerBack(context.handlerListState.TextBorder)}}><ToolsIcon className="bi bi-circle"></ToolsIcon>حـاشـیـه</ToolItem>
     <ToolItem onClick={()=>{openHandlerBack(context.handlerListState.TextShadow)}}><ToolsIcon className="bi bi-shadows"></ToolsIcon>سـایـه</ToolItem>
     <ToolItem onClick={()=>{openHandlerBack(context.handlerListState.TextTexture)}}><ToolsIcon className="bi bi-water"></ToolsIcon>بـافـت مـتـن</ToolItem>
     <ToolItem onClick={()=>{openHandlerBack(context.handlerListState.TextTransparent)}}><ToolsIcon className="bi bi-brightness-alt-low-fill"></ToolsIcon>شـفـافـیـت</ToolItem>
     <ToolItem onClick={()=>{openHandlerBack(context.handlerListState.TextBlur)}}><ToolsIcon className="bi bi-droplet-fill"></ToolsIcon>تـار کـردن</ToolItem>
     <ToolItem onClick={()=>{openHandlerBack(context.handlerListState.TextLineHeight)}}><ToolsIcon className="bi bi-arrows-vertical"></ToolsIcon>فـاصـلـه خـطـوط</ToolItem>
     <ToolItem onClick={()=>{openHandlerBack(context.handlerListState.EditTextAlighn)}}><ToolsIcon className="bi bi-text-paragraph"></ToolsIcon>چـیـنـش</ToolItem>
     <ToolItem><ToolsIcon className="bi bi-arrows-expand-vertical"></ToolsIcon>وارونـه کـردن</ToolItem>

    </ToolsList>
    );
}
 
export default TextTools;