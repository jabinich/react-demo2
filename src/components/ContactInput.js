import React from 'react';
import { connect } from 'react-redux';

//Action Creator
function addPerson(name){
    return { type: 'ADDCONTACT', name: name };
}

function changePerson(name){
    return { type: 'INPUTCHANGE', name: name };
}

function ContactInput(props) {
      
    function handleChange(e) {
        props.changePerson(e.target.value);
    }
      
    function handleSubmit(e) {
        e.preventDefault();
        if (props.name.trim().length !== 0) {
            props.addPerson(props.name); 
        }
        props.changePerson('');
        
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" 
          placeholder="Add new contact" 
          onChange={handleChange} 
          value={props.name} />
        <button type="submit">Add</button>
      </form>
    );
}

const mapStateToProps = state => ({
    name: state.input.name
}); 
  
const mapDispatchToProps = {
    addPerson,
    changePerson
 };

 export default connect(mapStateToProps, mapDispatchToProps)(ContactInput);