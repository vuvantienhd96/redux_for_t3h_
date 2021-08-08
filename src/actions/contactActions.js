import { ADD_CONTACT, DELETE_CONTACT, GET_CONTACT } from './types'

export const getContacts = () => {
    return {
        type: GET_CONTACT
    };
};

export const deleteContacts = (id) => {
    return {
        type: DELETE_CONTACT,
        payload: id
    };
};

export const addContacts = (contact) => {
    return {
        type: ADD_CONTACT,
        payload: contact
    };
};
