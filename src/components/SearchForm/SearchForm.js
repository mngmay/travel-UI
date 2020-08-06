import React from "react";
import CurrencyDropDown from "./CurrencyDropDown";
import InputField from "./InputField";

const SearchForm = ({ search, handleChange }) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <InputField
        label="origin"
        placeholder="SEA"
        handleChange={handleChange}
      />
      <InputField
        label="destination"
        placeholder="BOS"
        handleChange={handleChange}
      />
      <CurrencyDropDown search={search} handleChange={handleChange} />
    </form>
  );
};

export default SearchForm;
