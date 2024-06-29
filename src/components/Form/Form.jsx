import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';
import { useState } from 'react';

export const Form = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    onSubmit(query);
    setQuery('');
  };
  return (
    <form className={style.form} onSubmit={handleFormSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
        onChange={handleInputChange}
        value={query}
      />
    </form>
  );
};
