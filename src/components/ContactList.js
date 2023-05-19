import React from 'react';
import { connect } from 'react-redux';

//Action Creator
function deletePerson(index){
    return { type: 'DELCONTACT', index: index };
}

function ContacList(props) {
  
    function delContact(index){
      props.deletePerson(index);
    }
  
    const listItems = props.contacts.map((val, index) =>
      <div className='item_div'>
      <li key={index}>{val}</li>
      <button onClick={ ()=> delContact(index) }>Remove</button>
      </div>
    );
    return <ul>{listItems}</ul>;
}

const mapStateToProps = state => ({
    contacts: state.list.contacts
}); 

const mapDispatchToProps = {
    deletePerson
 };

 export default connect(mapStateToProps, mapDispatchToProps)(ContacList);