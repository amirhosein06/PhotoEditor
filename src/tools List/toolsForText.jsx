import { ToolsList,ToolItem,ToolsIcon } from "../components/createtools";
import Context from '../components/context/context';
import { useContext } from "react";

const TextTools = () => {
    const context = useContext(Context);
    
    const openHandlerBack = (targetComponent,e)=>{
        context.sethandleComponent(targetComponent);
        const items = document.querySelectorAll("#toolsListtext div");
        items.forEach(i=>{
            i.classList.remove("active");
        })
        e.target.classList.add("active");
    };

    return ( 
    <ToolsList id="toolsListtext">
     <ToolItem  className={context.handleComponent == context.handlerListState.TextEditor && "active"} onClick={(e)=>{openHandlerBack(context.handlerListState.TextEditor,e)}}><ToolsIcon className="bi bi-pencil-square"></ToolsIcon>ویـرایـش</ToolItem>
     <ToolItem onClick={(e)=>{openHandlerBack(context.handlerListState.TextChangeFont,e)}}><ToolsIcon className="bi bi-file-earmark-font-fill"></ToolsIcon>فـونـت</ToolItem>
     <ToolItem onClick={(e)=>{openHandlerBack(context.handlerListState.TextColor,e)}}><ToolsIcon className="bi bi-palette-fill"></ToolsIcon>رنـگ</ToolItem>
     <ToolItem onClick={(e)=>{openHandlerBack(context.handlerListState.EditTextPosition,e)}}><ToolsIcon className="bi bi-arrows-move"></ToolsIcon>جـابـجـایـی</ToolItem>
     <ToolItem className={context.handleComponent == context.handlerListState.EditFontSize && "active"} onClick={(e)=>{openHandlerBack(context.handlerListState.EditFontSize,e)}}><ToolsIcon className="bi bi-arrows-angle-expand"></ToolsIcon>تـغـیـیـر انـدازه</ToolItem>
     <ToolItem><ToolsIcon className="bi bi-clipboard-fill"></ToolsIcon>کـپـی</ToolItem>
     <ToolItem onClick={(e)=>{openHandlerBack(context.handlerListState.TextChangeStyle,e)}}><ToolsIcon className="bi bi-type-underline"></ToolsIcon>سـبـک نـوشـته</ToolItem>
     <ToolItem onClick={(e)=>{openHandlerBack(context.handlerListState.TextRotater,e)}}><ToolsIcon className="bi bi-arrow-repeat"></ToolsIcon>چـرخـش</ToolItem>
     <ToolItem onClick={(e)=>{openHandlerBack(context.handlerListState.TextBorder,e)}}><ToolsIcon className="bi bi-circle"></ToolsIcon>حـاشـیـه</ToolItem>
     <ToolItem onClick={(e)=>{openHandlerBack(context.handlerListState.TextShadow,e)}}><ToolsIcon className="bi bi-shadows"></ToolsIcon>سـایـه</ToolItem>
     <ToolItem onClick={(e)=>{openHandlerBack(context.handlerListState.TextTexture,e)}}><ToolsIcon className="bi bi-water"></ToolsIcon>بـافـت مـتـن</ToolItem>
     <ToolItem onClick={(e)=>{openHandlerBack(context.handlerListState.TextTransparent,e)}}><ToolsIcon className="bi bi-brightness-alt-low-fill"></ToolsIcon>شـفـافـیـت</ToolItem>
     <ToolItem onClick={(e)=>{openHandlerBack(context.handlerListState.TextBlur,e)}}><ToolsIcon className="bi bi-droplet-fill"></ToolsIcon>تـار کـردن</ToolItem>
     <ToolItem onClick={(e)=>{openHandlerBack(context.handlerListState.TextLineHeight,e)}}><ToolsIcon className="bi bi-arrows-vertical"></ToolsIcon>فـاصـلـه خـطـوط</ToolItem>
     <ToolItem onClick={(e)=>{openHandlerBack(context.handlerListState.EditTextAlighn,e)}}><ToolsIcon className="bi bi-text-paragraph"></ToolsIcon>چـیـنـش</ToolItem>
     <ToolItem><ToolsIcon className="bi bi-arrows-expand-vertical"></ToolsIcon>وارونـه کـردن</ToolItem>

    </ToolsList>
    );
}
 
export default TextTools;