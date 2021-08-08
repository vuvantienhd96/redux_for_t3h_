import React, { Component } from 'react';
import Contact from './Contact';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getContacts, deleteContacts } from './../actions/contactActions'

// controler component là gì
class Contacts extends Component {
    
    componentDidMount(){
        this.props.getContacts();
    }

    // deleteContact được gọi và được bind một cái id với phương thức bind của javascript
    deleteContact = (id) => {
        // lấy được ra parammater id

        // lấy ra giá trị state ban đầu
        const { contacts } = this.props;

        // lọc và tạo ra mảng newContacts mới với các id khác id mình click vô element
        const newContacts = contacts.filter(contact => contact.id !== id); // trả về một mảng mới không chứa id click

        // set lai state của component contacts
        this.setState({
            contacts: newContacts 
        });

    }

    // khi data được update nó sẽ fill lại và render ra data mới
    render() {
        const { contacts, deleteContacts } = this.props;
        return (
            <React.Fragment>
                {contacts.map(contact => <Contact 
                                            key={contact.id}
                                            contact={contact}
                                            // props deleteClickHandler được khai báo ở đây
                                            deleteClickHandler={deleteContacts.bind(this, contact.id)}
                                        /> )}
            </React.Fragment>
        )
    }
}

Contacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    getContacts: PropTypes.func.isRequired
}
 
const mapStatetoProps = (state) => ({
    contacts: state.contact.contacts
});

// const mapDispatchtoProps = (dispatch) => ({
//     getContacts: () => dispatch({type: GET_CONTACT})
// });

export default connect(mapStatetoProps, { getContacts, deleteContacts })(Contacts);
