import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import { legacy_createStore as createStore} from 'redux'
import Counter from './Counter';
import ContactInput from './ContactInput';
import ContactList from './ContactList';

//Reducer Contacts
const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];
const initialStateContacts = {
  contacts: contacts
};

function reducerContacts(state = initialStateContacts, action){
  switch(action.type) {
    case 'ADDCONTACT':
      return { ...state, contacts: [...state.contacts, action.name] };
    case 'DELCONTACT':
      const newContacts = [...state.contacts];
      newContacts.splice(action.index, 1);
      return { ...state, contacts: newContacts };

      /*
      const newContacts = state.contacts.filter(
        (_, index) => index !== action.index
      );
      return {
        ...state,
        contacts: newContacts
      };*/

    default:
      return state;
  }
}

//Reducer Person
const name = '';
const initialStatePerson = {
  name: name
}

function reducerPerson(state = initialStatePerson, action){
  switch(action.type) {
    case 'INPUTCHANGE':
      return { name: action.name };
    default:
      return state;
  }
}

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