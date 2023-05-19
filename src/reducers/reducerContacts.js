//Reducer Contacts
const initialStateContacts = {
  contacts: ["James Smith", "Thomas Anderson", "Bruce Wayne"]
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

export default reducerContacts;