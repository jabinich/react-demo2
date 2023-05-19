import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import { legacy_createStore as createStore} from 'redux'
import Counter from './components/Counter';
import ContactInput from './components/ContactInput';
import ContactList from './components/ContactList';
import reducerContacts from './reducers/reducerContacts';
import reducerPerson from './reducers/reducerPerson';

const rootReducer = combineReducers({
  input: reducerPerson,
  list: reducerContacts
});

//Store
const store = createStore(rootReducer);

const el = <Provider store={store}>
    <ContactInput/>
    <ContactList/>
  </Provider>; 

createRoot(document.getElementById('root')).render(el);