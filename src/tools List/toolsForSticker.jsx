import { ToolsList,ToolItem,ToolsIcon } from "../components/createtools";
import Context from '../components/context/context';
import { useContext } from "react";

const StickerTools = () => {
    const context = useContext(Context);
    
    const openHandlerBack = (targetComponent,e)=>{
        context.sethandleComponent(targetComponent);
        const items = document.querySelectorAll("#toolsListstic div");
        items.forEach(i=>{
            i.classList.remove("active");
        })
        e.target.classList.add("active");
    };
    const copyToStick = ()=>{
        let newObject = [...context.itemArray];
        newObject.forEach(itemeach=>{
          if (itemeach.selected === true) {
            newObject = [...newObject,{
                state: "sticker",
                width: itemeach.width,
                height: itemeach.height,
                scale: itemeach.scale,
                tarnslate: itemeach.tarnslate,
                zIndex: newObject.length + 1,
                type: itemeach.type,
                visiblity: itemeach.visiblity,
                selected: false,
                src: itemeach.src,
                rotate: itemeach.rotate,
                border: {
                  color: itemeach.border.color,
                  style: itemeach.border.style,
                  width: itemeach.border.width
                },
                shadow: {
                  color: itemeach.shadow.color,
                  width: itemeach.shadow.width
                },
                opacity: itemeach.opacity,
                color: itemeach.color,
                filter: itemeach.filter,
                borderRadius: itemeach.borderRadius,
                blur: itemeach.blur
              }]
          };
        });
        context.setitemArray(newObject);
    };

    return ( 
    <ToolsList id="toolsListstic">
     <ToolItem className="active" onClick={(e)=>{openHandlerBack(context.handlerListState.EditSize,e)}}><ToolsIcon className="bi bi-arrows-angle-expand"></ToolsIcon>تـغـیـیـر انـدازه</ToolItem>
     <ToolItem onClick={(e)=>{openHandlerBack(context.handlerListState.StickPosition,e)}}><ToolsIcon className="bi bi-arrows-move"></ToolsIcon>جـابـجـایـی</ToolItem>
     <ToolItem onClick={(e)=>{openHandlerBack(context.handlerListState.StickRotater,e)}}><ToolsIcon className="bi bi-arrow-repeat"></ToolsIcon>چـرخـش</ToolItem>
     <ToolItem onClick={(e)=>{openHandlerBack(context.handlerListState.StickBoreder,e)}}><ToolsIcon className="bi bi-circle"></ToolsIcon>حـاشـیـه</ToolItem>
     <ToolItem onClick={(e)=>{openHandlerBack(context.handlerListState.StickShadow,e)}}><ToolsIcon className="bi bi-shadows"></ToolsIcon>سـایـه</ToolItem>
     <ToolItem onClick={(e)=>{openHandlerBack(context.handlerListState.StickBlur,e)}}><ToolsIcon className="bi bi-droplet-fill"></ToolsIcon>تـاری پـس زمـیـنـه</ToolItem>
     <ToolItem onClick={(e)=>{openHandlerBack(context.handlerListState.StickTransparent,e)}}><ToolsIcon className="bi bi-brightness-alt-low-fill"></ToolsIcon>شـفـافـیـت</ToolItem>
     <ToolItem onClick={(e)=>{openHandlerBack(context.handlerListState.StickFilter,e)}}><ToolsIcon className="bi bi-transparency"></ToolsIcon>جــلـوه</ToolItem>
     <ToolItem onClick={copyToStick}><ToolsIcon className="bi bi-clipboard-fill"></ToolsIcon>کـپـی</ToolItem>
     <ToolItem onClick={(e)=>{openHandlerBack(context.handlerListState.StickColor,e)}}><ToolsIcon className="bi bi-palette-fill"></ToolsIcon>رنـگ</ToolItem>
     <ToolItem onClick={(e)=>{openHandlerBack(context.handlerListState.StickBorderRadius,e)}}><ToolsIcon className="bi bi-app-indicator"></ToolsIcon>خـمـیـدگـی گـوشـه هـا</ToolItem>
    </ToolsList>
     );
}
 
export default StickerTools;