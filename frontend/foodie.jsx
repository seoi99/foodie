import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as SessionApiUtil from './util/session_api_util';
import{fetchAllBusinesses} from './util/business_api_util';


document.addEventListener('DOMContentLoaded', ()=> {
  let store;
  if (window.currentUser) {
  const preloadedState = {
    entities: {
      users: { [window.currentUser.id]: window.currentUser }
    },
    session: { currentUserId: window.currentUser.id }
  };
  store = configureStore(preloadedState);
} else {
  store = configureStore();
}
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchAllBusinesses = fetchAllBusinesses;
  });
