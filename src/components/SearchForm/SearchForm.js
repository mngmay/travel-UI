import React from "react";

const SearchForm = ({ children }) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      {children}
    </form>
  );
};

export default SearchForm;
