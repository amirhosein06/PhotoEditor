import { ToolsList,ToolItem,ToolsIcon } from "../components/createtools";
import Context from '../components/context/context';
import { useContext } from "react";

const BackgroundTools = () => {
    const context = useContext(Context);
    
    const openHandlerBack = (targetComponent)=>{
        context.sethandleComponent(targetComponent);
    };
    const removeBackground = ()=>{
        let newObject = {...context.backgroundData};
        newObject.src = "";
        context.setbackgroundData(newObject);
    };
    
    return ( 
    <ToolsList>
     <ToolItem onClick={()=>{openHandlerBack(context.handlerListState.AddPhoto)}}><ToolsIcon className="bi bi-image-fill"></ToolsIcon>تـنـظـیـم تـصـویـر</ToolItem>
     <ToolItem onClick={()=>{openHandlerBack(context.handlerListState.AddFilter)}}><ToolsIcon className="bi bi-transparency"></ToolsIcon>جــلـوه</ToolItem>
     <ToolItem onClick={()=>{openHandlerBack(context.handlerListState.BackColor)}}><ToolsIcon className="bi bi-palette-fill"></ToolsIcon>رنـگ پـس زمـیـنـه</ToolItem>
     <ToolItem onClick={()=>{openHandlerBack(context.handlerListState.BackResizing)}}><ToolsIcon className="bi bi-arrows-fullscreen"></ToolsIcon>ابـعـاد تـصـویـر</ToolItem>
     <ToolItem onClick={()=>{openHandlerBack(context.handlerListState.BackTexture)}}><ToolsIcon className="bi bi-water"></ToolsIcon>بـافـت تـصـویـر</ToolItem>
     <ToolItem onClick={removeBackground}><ToolsIcon className="bi bi-arrow-clockwise"></ToolsIcon>حـذف پـس زمـیـنـه</ToolItem>
    </ToolsList> 
    );
}
 
export default BackgroundTools;