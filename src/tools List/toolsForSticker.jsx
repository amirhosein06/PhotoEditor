import { ToolsList,ToolItem,ToolsIcon } from "../components/createtools";

const StickerTools = () => {
    return ( 
    <ToolsList>
     <ToolItem><ToolsIcon className="bi bi-arrow-repeat"></ToolsIcon>چـرخـش</ToolItem>
     <ToolItem><ToolsIcon className="bi bi-water"></ToolsIcon>بـافـت</ToolItem>
     <ToolItem><ToolsIcon className="bi bi-circle"></ToolsIcon>حـاشـیـه</ToolItem>
     <ToolItem><ToolsIcon className="bi bi-shadows"></ToolsIcon>سـایـه</ToolItem>
     <ToolItem><ToolsIcon className="bi bi-droplet-fill"></ToolsIcon>تـار کـردن</ToolItem>
     <ToolItem><ToolsIcon className="bi bi-brightness-alt-low-fill"></ToolsIcon>شـفـافـیـت</ToolItem>
     <ToolItem><ToolsIcon className="bi bi-transparency"></ToolsIcon>جــلـوه</ToolItem>
     <ToolItem><ToolsIcon className="bi bi-clipboard-fill"></ToolsIcon>کـپـی</ToolItem>
     <ToolItem><ToolsIcon className="bi bi-palette-fill"></ToolsIcon>رنـگ</ToolItem>
     <ToolItem><ToolsIcon className="bi bi-app-indicator"></ToolsIcon>خـمـیـدگـی گـوشـه هـا</ToolItem>
    </ToolsList>
     );
}
 
export default StickerTools;