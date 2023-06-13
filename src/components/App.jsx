import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';
import { useLocalStorage } from './hooks/hooks';

export function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const formSubmitHandler = data => {
    const isContactExists = contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    isContactExists
      ? alert(`${data.name} is already in contacts`)
      : setContacts(prevState => [...prevState, { ...data, id: nanoid() }]);
  };

  const filterForm = evt => {
    setFilter(evt.currentTarget.value);
  };

  const onFilterForm = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteItem = itemId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== itemId)
    );
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onFilterName = onFilterForm();

  return (
    <>
      <Section>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={formSubmitHandler} />
      </Section>
      <Section>
        <h2>Contacts</h2>
        <Filter value={filter} filter={filterForm} />
        <ContactsList onFilterName={onFilterName} deleteItem={deleteItem} />
      </Section>
    </>
  );
}
