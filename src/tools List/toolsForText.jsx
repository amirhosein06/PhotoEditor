import { ToolsList,ToolItem,ToolsIcon } from "../components/createtools";

const TextTools = () => {
    return ( 
    <ToolsList>
     <ToolItem><ToolsIcon className="bi bi-pencil-square"></ToolsIcon>ویـرایـش</ToolItem>
     <ToolItem><ToolsIcon className="bi bi-file-earmark-font-fill"></ToolsIcon>فـونـت</ToolItem>
     <ToolItem><ToolsIcon className="bi bi-palette-fill"></ToolsIcon>رنـگ</ToolItem>
     <ToolItem><ToolsIcon className="bi bi-clipboard-fill"></ToolsIcon>کـپـی</ToolItem>
     <ToolItem><ToolsIcon className="bi bi-type-underline"></ToolsIcon>سـبـک نـوشـته</ToolItem>
     <ToolItem><ToolsIcon className="bi bi-arrow-repeat"></ToolsIcon>چـرخـش</ToolItem>
     <ToolItem><ToolsIcon className="bi bi-circle"></ToolsIcon>حـاشـیـه</ToolItem>
     <ToolItem><ToolsIcon className="bi bi-shadows"></ToolsIcon>سـایـه</ToolItem>
     <ToolItem><ToolsIcon className="bi bi-water"></ToolsIcon>بـافـت مـتـن</ToolItem>
     <ToolItem><ToolsIcon className="bi bi-brightness-alt-low-fill"></ToolsIcon>شـفـافـیـت</ToolItem>
     <ToolItem><ToolsIcon className="bi bi-droplet-fill"></ToolsIcon>تـار کـردن</ToolItem>
     <ToolItem><ToolsIcon className="bi bi-arrows-vertical"></ToolsIcon>فـاصـلـه خـطـوط</ToolItem>
     <ToolItem><ToolsIcon className="bi bi-text-paragraph"></ToolsIcon>چـیـنـش</ToolItem>
     <ToolItem><ToolsIcon className="bi bi-arrows-expand-vertical"></ToolsIcon>وارونـه کـردن</ToolItem>

    </ToolsList>
    );
}
 
export default TextTools;