import ContactListItem from '../ContactListItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import { ContactListElement } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = idForDelete => {
    dispatch(deleteContact(idForDelete));
  };

  return (
    <ContactListElement>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactListItem
            key={id}
            name={name}
            number={number}
            onDeleteContact={() => {
              handleDeleteContact(id);
            }}
            id={id}
          />
        );
      })}
    </ContactListElement>
  );
};

export default ContactList;
