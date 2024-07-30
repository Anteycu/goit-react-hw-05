const SearchForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input name="title" type="text" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
