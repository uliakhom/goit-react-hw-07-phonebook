import PropTypes from 'prop-types';
import s from './contactList.module.css';

const ContactList = ({ contacts, removeContact }) => {
  const elements = contacts.map(item => (
    <li key={item.id} className={s.item}>
      {item.name}: {item.phone}
      <button onClick={() => removeContact(item.id)} className={s.btn}>
        Delete
      </button>
    </li>
  ));
  return <ul className={s.list}>{elements}</ul>;
};

export default ContactList;

ContactList.defaultProps = {
  contacts: [],
  removeContact: function () {},
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
  removeContact: PropTypes.func.isRequired,
};
