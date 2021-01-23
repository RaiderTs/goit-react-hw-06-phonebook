import { useSelector, useDispatch } from 'react-redux';
import style from './ContactList.module.css';
import { deleteContact } from '../../redux/phonebook/phonebook-action';
import { onFilterContacts } from '../../redux/phonebook/phonebook-selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const items = useSelector(onFilterContacts);

  return (
    items.length !== 0 && (
      <ul className={style.list}>
        {items.map(({ id, name, phone }) => (
          <li className={style.item} key={id}>
            <p className={style.info}>
              {name}: {phone}
            </p>
            <button
              className={style.btn}
              onClick={() => dispatch(deleteContact(id))}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    )
  );
};

export default ContactList;
