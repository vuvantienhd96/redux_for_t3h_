import { DELETE_CONTACT, GET_CONTACT } from "../actions/types";

// trang thai state ban đầu
const initialState = {
        contacts: 
            [
                {
                    id: 1,
                    name: 'tienvv',
                    email: 'tienvv@somthing.com',
                    phone: '666-444-111'
                },
                {
                    id: 2,
                    name: 'alicia',
                    email: 'alicia@somthing.com',
                    phone: '333-244-111'
                },
                {
                    id: 3,
                    name: 'Bryton1',
                    email: 'Bryton@somthing.com',
                    phone: '166-555-333'
                }
            ]
}
// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
    switch (action.type) {
        case GET_CONTACT: 
            return {
                ...state
            }
        case DELETE_CONTACT: 
            return {
                ...state,
                contacts: state.contacts.filter(contact => 
                    contact.id !== action.payload)             
            }
        
        default:
            return state;
    }
}