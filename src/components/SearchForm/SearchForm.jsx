import { useSearchParams } from "react-router-dom";

const SearchForm = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  return (
    <form onSubmit={onSubmit}>
      <input
        name="title"
        type="text"
        value={query}
        onChange={e => setSearchParams({ query: e.currentTarget.value })}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
