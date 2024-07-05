import { useSearchParams } from "react-router-dom";

const SearchForm = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") ?? "";

  const queryStringChanger = query => {
    const nextParam = query !== "" ? { query } : {};
    setSearchParams(nextParam);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        name="title"
        type="text"
        value={query}
        onChange={e => queryStringChanger(e.currentTarget.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
