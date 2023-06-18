import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import { Item, BtnDel } from './ContactItem.styled';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };
  return (
    <Item>
      <div>
        {name}: {number}
        <BtnDel type="button" onClick={() => handleDelete(id)}>
          Delete
        </BtnDel>
      </div>
    </Item>
  );
};

export default Contact;

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
