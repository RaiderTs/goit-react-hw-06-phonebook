import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';


const addContact = createAction('add/Contact', contact => ({
    payload: {
        id: shortid.generate(),
        ...contact,
    }
}) );

const deleteContact = createAction('delete/Contact');
const filterContact = createAction('filter/Contact');

export {addContact,deleteContact,filterContact}

