import { ToolsList,ToolItem,ToolsIcon } from "../components/createtools";
import Context from '../components/context/context';
import { useContext } from "react";

const BackgroundTools = () => {
    const context = useContext(Context);
    
    const openHandlerBack = (targetComponent,e)=>{
        context.sethandleComponent(targetComponent);
        const items = document.querySelectorAll("#toolsListBac div");
        items.forEach(i=>{
            i.classList.remove("active");
        })
        e.target.classList.add("active");
    };
    const removeBackground = ()=>{
        let newObject = {...context.backgroundData};
        newObject.src = "";
        newObject.backgroundColor = "transparent";
        context.setbackgroundData(newObject);
    };
    
    return ( 
    <ToolsList id="toolsListBac">
     <ToolItem className="active" onClick={(e)=>{openHandlerBack(context.handlerListState.AddPhoto,e)}}><ToolsIcon className="bi bi-image-fill"></ToolsIcon>تـنـظـیـم تـصـویـر</ToolItem>
     <ToolItem onClick={(e)=>{openHandlerBack(context.handlerListState.AddFilter,e)}}><ToolsIcon className="bi bi-transparency"></ToolsIcon>جــلـوه</ToolItem>
     <ToolItem onClick={(e)=>{openHandlerBack(context.handlerListState.BackColor,e)}}><ToolsIcon className="bi bi-palette-fill"></ToolsIcon>رنـگ پـس زمـیـنـه</ToolItem>
     <ToolItem onClick={(e)=>{openHandlerBack(context.handlerListState.BackResizing,e)}}><ToolsIcon className="bi bi-arrows-fullscreen"></ToolsIcon>ابـعـاد تـصـویـر</ToolItem>
     <ToolItem onClick={(e)=>{openHandlerBack(context.handlerListState.BackTexture,e)}}><ToolsIcon className="bi bi-water"></ToolsIcon>بـافـت تـصـویـر</ToolItem>
     <ToolItem onClick={removeBackground}><ToolsIcon className="bi bi-arrow-clockwise"></ToolsIcon>حـذف پـس زمـیـنـه</ToolItem>
    </ToolsList> 
    );
}
 
export default BackgroundTools;