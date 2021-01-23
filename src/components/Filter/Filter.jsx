import style from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filter } from '../../redux/phonebook/phonebook-selectors';
import { filterContact } from '../../redux/phonebook/phonebook-action';

const Filter = () => {
  const dispatch = useDispatch();
  const filterBy = useSelector(filter);

  const onChange = e => dispatch(filterContact(e.target.value));

  return (
    <label className={style.label}>
      Enter name for search
      <input
        className={style.input}
        type="text"
        name="filter"
        value={filterBy}
        onChange={onChange}
        placeholder="Enter a name to search"
      />
    </label>
  );
};

export default Filter;
