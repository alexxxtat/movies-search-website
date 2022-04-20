import React from "react";

const Search = ({ search, setSearchText }) => {
  const inputHandler = (e) => {
    //console.log(e.target.value);
    setSearchText(e.target.value);
    //search();
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };
  return (
    <div className="search">
      <input
        id="searchingText"
        className="input"
        onChange={inputHandler}
        type="text"
        placeholder="Search..."
        required
        onKeyUp={handleKeyPress}
      ></input>
      <button onClick={search}>Go</button>
    </div>
  );
};

export default Search;
