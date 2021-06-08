import React from "react";

const SearchBox = ({ setSearch }) => {
  return (
    <div>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
};

export default SearchBox;
