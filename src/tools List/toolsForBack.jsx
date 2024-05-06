import { ToolsList,ToolItem,ToolsIcon } from "../components/createtools";

const BackgroundTools = () => {
    return ( 
    <ToolsList>
     <ToolItem><ToolsIcon className="bi bi-image-fill"></ToolsIcon>تـنـظـیـم تـصـویـر</ToolItem>
     <ToolItem><ToolsIcon className="bi bi-transparency"></ToolsIcon>جــلـوه</ToolItem>
     <ToolItem><ToolsIcon className="bi bi-palette-fill"></ToolsIcon>رنـگ پـس زمـیـنـه</ToolItem>
     <ToolItem><ToolsIcon className="bi bi-arrows-fullscreen"></ToolsIcon>ابـعـاد تـصـویـر</ToolItem>
     <ToolItem><ToolsIcon className="bi bi-water"></ToolsIcon>بـافـت تـصـویـر</ToolItem>
     <ToolItem><ToolsIcon className="bi bi-arrow-clockwise"></ToolsIcon>حـذف پـس زمـیـنـه</ToolItem>
    </ToolsList> 
    );
}
 
export default BackgroundTools;