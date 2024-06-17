// for background
import AddFilter from './backgrond/addfilter';
import AddPhoto from './backgrond/addPhoto';
import BackResizing from './backgrond/backResizing';
import BackTexture from './backgrond/backTexure';
import BackColor from './backgrond/editbackColor';

// for sticker
import StickBlur from './sticker/stickAddBlur';
import StickBoreder from './sticker/stickAddBoreder';
import StickShadow from './sticker/stickAddShadow';
import StickTransparent from './sticker/stickAddTransparent';
import StickColor from './sticker/stickColor';
import StickFilter from './sticker/stickFilter';
import StickBorderRadius from './sticker/stickRadius';
import StickRotater from './sticker/stickRoteter';
import StickPosition from './sticker/stickPosition';
import EditSize from './sticker/editSize';
import CreateNewStick from './sticker/createNewStick';

// for text
import EditTextAlighn from './text/EditTextAlighn';
import TextShadow from './text/textAddShadow';
import TextBlur from './text/textBlur';
import TextBorder from './text/textBorder';
import TextChangeFont from './text/textChangeFont';
import TextChangeStyle from './text/textChangeStyle';
import TextColor from './text/textColor';
import TextEditor from './text/textEditor';
import TextLineHeight from './text/textLineHeight';
import TextRotater from './text/textRoteter';
import TextTexture from './text/textTexture';
import TextTransparent from './text/textTransparent';
import EditTextPosition from './text/editPosition';
import EditFontSize from './text/editFontsize';


const handlerList = {
  AddFilter: (<AddFilter/>),
  AddPhoto: (<AddPhoto/>),
  BackResizing: (<BackResizing/>),
  BackTexture: (<BackTexture/>),
  BackColor: (<BackColor/>),

  StickBlur: (<StickBlur/>),
  StickBoreder: (<StickBoreder/>),
  StickShadow: (<StickShadow/>),
  StickTransparent: (<StickTransparent/>),
  StickColor: (<StickColor/>),
  StickFilter: (<StickFilter/>),
  StickBorderRadius: (<StickBorderRadius/>),
  StickRotater: (<StickRotater/>),
  StickPosition: (<StickPosition/>),
  EditSize: (<EditSize/>),
  CreateNewStick: (<CreateNewStick/>),
  
  EditTextAlighn: (<EditTextAlighn/>),
  TextBlur: (<TextBlur/>),
  TextBorder: (<TextBorder/>),
  TextChangeFont: (<TextChangeFont/>),
  TextChangeStyle: (<TextChangeStyle/>),
  TextColor: (<TextColor/>),
  TextEditor: (<TextEditor/>),
  TextLineHeight: (<TextLineHeight/>),
  TextRotater: (<TextRotater/>),
  TextShadow: (<TextShadow/>),
  TextTexture: (<TextTexture/>),
  TextTransparent: (<TextTransparent/>),
  EditTextPosition: (<EditTextPosition/>),
  EditFontSize: (<EditFontSize/>)
}

export default handlerList;