import { useEffect, lazy } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsThunk';
import css from './Contacts.module.css';

const helmetContext = {};

const ContactForm = lazy(() => import('../components/ContactForm/ContactForm'));
const ContactList = lazy(() => import('../components/ContactList/ContactList'));
const Filter = lazy(() => import('../components/Filter/Filter'));

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <HelmetProvider context={helmetContext}>
      <Helmet>
        <title>Phonebook app</title>
      </Helmet>
      <section className="section">
        <div className={css.container}>
          <ContactForm />
          <h2 className="title">Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </section>
    </HelmetProvider>
  );
};

export default Contacts;
