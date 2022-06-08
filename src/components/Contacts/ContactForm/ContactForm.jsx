import PropTypes from 'prop-types';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import s from './contactForm.module.css';

const ContactForm = ({ addContact }) => {
  const [contact, setContact] = useState({
    name: '',
    phone: '',
  });

  const { name, phone } = contact;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addContact({ ...contact });
    setContact({ name: '', phone: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={s.container}>
        <label htmlFor={nanoid()} className={s.label}>
          Name
        </label>
        <input
          className={s.input}
          id={nanoid()}
          type="text"
          value={name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={handleChange}
          required
        />
      </div>
      <div className={s.container}>
        <label htmlFor={nanoid()} className={s.label}>
          Number
        </label>
        <input
          className={s.input}
          id={nanoid()}
          type="tel"
          value={phone}
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className={s.btn}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

ContactForm.defaultProps = {
  onSubmit: function () {},
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
