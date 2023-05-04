import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactsThunk';
import React from 'react';
import { selectContacts } from 'redux/contacts/selectors';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const value = {
      name: form.name.value,
      number: form.number.value.toString(),
    };
    for (const contact of contacts) {
      if (value.name === contact.name) {
        return;
      }
    }
    dispatch(addContact(value));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label + ' paragraph'}>
        Name
        <input
          className={css.input + ' paragraph'}
          type="text"
          name="name"
          pattern="^[a-zA-Z\u0400-\u04FF]+(([' -]|[a-zA-Z\u0400-\u04FF ])?[a-zA-Z\u0400-\u04FF]*)*$v"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label + ' paragraph'}>
        Number
        <input
          className={css.input + ' paragraph'}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
