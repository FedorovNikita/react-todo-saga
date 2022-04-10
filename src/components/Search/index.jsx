import "./index.scss";

const Search = ({ searchTodo, handleSearch }) => {
  return (
    <input type="text" value={searchTodo} onChange={(e) => handleSearch(e)} className="input search" placeholder="Поиск..."/>
  );
};

export default Search;
