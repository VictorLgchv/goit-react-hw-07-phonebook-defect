import { useSelector } from 'react-redux';
import Contact from 'components/ContactItem/ContactItem';
import { getContacts, getFilter } from 'redux/selectors';
import { Ul } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const normalizedFilter = filter.toLocaleLowerCase();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      <Ul>
        {visibleContacts.map(({ id, name, number }) => {
          return <Contact key={id} id={id} name={name} number={number} />;
        })}
      </Ul>
    </>
  );
};

export default ContactList;