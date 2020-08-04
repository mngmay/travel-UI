import React from "react";

const SearchForm = ({ search, handleChange }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>
        Origin:
        <input
          type="text"
          placeholder="SEA"
          name="origin"
          value={search.origin}
          onChange={handleChange}
        />
      </label>
      <label>
        Destination:
        <input
          type="text"
          placeholder="HKT"
          name="destination"
          value={search.destination}
          onChange={handleChange}
        />
      </label>
      <label>
        Currency:
        <input
          type="text"
          placeholder="USD"
          name="curr"
          value={search.curr}
          onChange={handleChange}
        />
      </label>
    </form>
  );
};

export default SearchForm;
