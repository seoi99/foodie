import { combineReducers } from 'redux';
import modals from './modal_reducer';
import photos from './photo_ui_reducer';


export default combineReducers({
  modals,
  photos,
});
