import PropTypes from 'prop-types';
import { ContactItem, ContactName, ContactNumber, ContactBtn } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
    return (
        <ul>
            {contacts.map(contact => {
                return (
                    <ContactItem key={contact.id}>
                        <ContactName>{contact.name}:</ContactName>
                        <ContactNumber>{contact.number}</ContactNumber>
                        <ContactBtn
                            type='button'
                            onClick={() => deleteContact(contact.id)}>
                            Delete
                        </ContactBtn>
                    </ContactItem>)
            })}
        </ul>
    )
};

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired
};