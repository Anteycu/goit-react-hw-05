const SearchForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        name="title"
        type="text"
        // value={query}
        // onChange={e => queryStringChanger(e.currentTarget.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
