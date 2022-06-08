import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useEffect, useCallback, useState } from 'react';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import s from './contacts.module.css';

import {
  getContacts,
  getLoading,
  getError,
} from 'redux/contacts/contacts-selectors';
import * as operations from '../../redux/contacts/contacts-operations';

const Contacts = () => {
  const contacts = useSelector(getContacts, shallowEqual);
  const loading = useSelector(getLoading, shallowEqual);
  const error = useSelector(getError, shallowEqual);

  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  const addContact = data => {
    dispatch(operations.addContact(data));
  };

  const filterContact = useCallback(
    ({ target }) => setFilter(target.value),
    [setFilter]
  );
  const filteredName = filter.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) => {
    const result = name.toLowerCase().includes(filteredName);
    return result;
  });

  const removeContact = id => {
    dispatch(operations.removeContact(id));
  };

  return (
    <div className={s.container}>
      <div className={s.phonebook}>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm addContact={addContact} />
      </div>
      <div className={s.contacts}>
        <h2 className={s.contacts__title}>Contacts</h2>
        <Filter filter={filter} filterContact={filterContact} />
        {loading && <p>...loading</p>}
        {error && <p>{error.message}</p>}
        {Boolean(filteredContacts.length) && (
          <ContactList
            contacts={filteredContacts}
            removeContact={removeContact}
          />
        )}
      </div>
    </div>
  );
};

export default Contacts;
