import s from "./SearchForm.module.css";

const SearchForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={s.form}>
      <input name="title" type="text" className={s.input} />
      <button type="submit" className={s.btn}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
