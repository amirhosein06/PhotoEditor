import { ToolsList,ToolItem,ToolsIcon } from "../components/createtools";
import Context from '../components/context/context';
import { useContext } from "react";

const StickerTools = () => {
    const context = useContext(Context);
    
    const openHandlerBack = (targetComponent)=>{
        context.sethandleComponent(targetComponent);
    };

    return ( 
    <ToolsList>
     <ToolItem onClick={()=>{openHandlerBack(context.handlerListState.EditSize)}}><ToolsIcon className="bi bi-arrows-angle-expand"></ToolsIcon>تـغـیـیـر انـدازه</ToolItem>
     <ToolItem onClick={()=>{openHandlerBack(context.handlerListState.StickPosition)}}><ToolsIcon className="bi bi-arrows-move"></ToolsIcon>جـابـجـایـی</ToolItem>
     <ToolItem onClick={()=>{openHandlerBack(context.handlerListState.StickRotater)}}><ToolsIcon className="bi bi-arrow-repeat"></ToolsIcon>چـرخـش</ToolItem>
     <ToolItem onClick={()=>{openHandlerBack(context.handlerListState.StickTexture)}}><ToolsIcon className="bi bi-water"></ToolsIcon>بـافـت</ToolItem>
     <ToolItem onClick={()=>{openHandlerBack(context.handlerListState.StickBoreder)}}><ToolsIcon className="bi bi-circle"></ToolsIcon>حـاشـیـه</ToolItem>
     <ToolItem onClick={()=>{openHandlerBack(context.handlerListState.StickShadow)}}><ToolsIcon className="bi bi-shadows"></ToolsIcon>سـایـه</ToolItem>
     <ToolItem onClick={()=>{openHandlerBack(context.handlerListState.StickBlur)}}><ToolsIcon className="bi bi-droplet-fill"></ToolsIcon>تـار کـردن</ToolItem>
     <ToolItem onClick={()=>{openHandlerBack(context.handlerListState.StickTransparent)}}><ToolsIcon className="bi bi-brightness-alt-low-fill"></ToolsIcon>شـفـافـیـت</ToolItem>
     <ToolItem onClick={()=>{openHandlerBack(context.handlerListState.StickFilter)}}><ToolsIcon className="bi bi-transparency"></ToolsIcon>جــلـوه</ToolItem>
     <ToolItem><ToolsIcon className="bi bi-clipboard-fill"></ToolsIcon>کـپـی</ToolItem>
     <ToolItem onClick={()=>{openHandlerBack(context.handlerListState.StickColor)}}><ToolsIcon className="bi bi-palette-fill"></ToolsIcon>رنـگ</ToolItem>
     <ToolItem onClick={()=>{openHandlerBack(context.handlerListState.StickBorderRadius)}}><ToolsIcon className="bi bi-app-indicator"></ToolsIcon>خـمـیـدگـی گـوشـه هـا</ToolItem>
    </ToolsList>
     );
}
 
export default StickerTools;