import {useState, useEffect} from 'react';

import "./styles.css";
import Form from './Form';
import List from './List';


function Contacts() {
    const  [contacts, setContacts] = useState([]);

    useEffect(()=> {
        console.log(contacts);
    }, [contacts])

    return (
        <div id='container'>
            <h1>CONTACTS</h1>
            <List contacts={contacts}/>
            <Form addContact = {setContacts} contacts={contacts}/>
        </div>
    )
}

export default Contacts
