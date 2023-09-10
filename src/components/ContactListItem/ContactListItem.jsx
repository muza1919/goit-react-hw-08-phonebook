import PropTypes from 'prop-types';
import { Contact, Button, ItemImage } from './ContactListItem.styled';
import DeleteButton from './TrashCan.png';

const ContactListItem = ({ name, number, onDeleteContact, id }) => {
  return (
    <Contact>
      <div>
        <span>{name}</span>: <span>{number}</span>
      </div>
      <Button
        type="button"
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        <ItemImage src={DeleteButton} />
      </Button>
    </Contact>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactListItem;
