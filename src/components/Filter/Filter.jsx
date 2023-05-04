import { filterChange } from 'redux/contacts/filterSlice';
import { useDispatch } from '../../../node_modules/react-redux/es/exports';
import css from './Filter.module.css';

// eslint-disable-next-line
const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(filterChange(e.currentTarget.value));
  };

  return (
    <label className={css.label + ' paragraph'}>
      Find contacts by name
      <input
        className={css.input + ' paragraph'}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={e => handleChange(e)}
      />
    </label>
  );
};

export default Filter;
