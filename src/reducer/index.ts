import { combineReducers } from 'redux';
import darkmode from '../components/rightmenu/DarkMode/darkmode';
import friend from '../components/leftmenu/friends/friend';
import messageToggle from '../components/message/messageReducer';
import settingsToggle from '../components/leftmenu/setSettings/setSettingsReducer';
import writeToggle from '../components/write/writeReducer';
import PostAdd from '../components/content/postAddReducer';
import loginToggle from '../components/loginwindow/loginWindowReducer';
import MailBox from '../components/message/MailBox';
import MailToggle from '../components/message/MailToggle';
import userReducer from './user';
import postReducer from './post';

const rootReducer = combineReducers({
  darkmode,
  friend,
  messageToggle,
  settingsToggle,
  writeToggle,
  loginWindow: loginToggle,
  PostAdd,
  MailBox,
  MailToggle,
  user: userReducer,
  post: postReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
