//Reducer Person
const initialStatePerson = {
  name: ''
}

function reducerPerson(state = initialStatePerson, action){
  switch(action.type) {
    case 'INPUTCHANGE':
      return { name: action.name };
    default:
      return state;
  }
}

export default reducerPerson;
