import React from "react";
import useAutoComplete from "../../hooks/useAutoComplete";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const PredictiveInputField = ({ search, setSearch, label, placeholder }) => {
  function removeDuplicates(myArr, prop) {
    return myArr.filter((obj, pos, arr) => {
      return arr.map((mapObj) => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
  }

  let autoCompleteResults = useAutoComplete(search[label]).data || [];

  if (autoCompleteResults.length) {
    autoCompleteResults = removeDuplicates(autoCompleteResults, "city_code");
  }

  console.log("autoCompleteResults", autoCompleteResults);

  return (
    <div style={{ width: 300 }}>
      <Autocomplete
        id={`${label}-input`}
        freeSolo
        options={autoCompleteResults.map(
          (option) =>
            `${option.city_code} ${option.city_name}, ${option.country_name}`
        )}
        inputValue={search[label]}
        onInputChange={(e, newInputValue) => {
          setSearch({ ...search, [label]: newInputValue.slice(0, 3) });
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            margin="normal"
            variant="outlined"
            className="searchInput"
            placeholder={placeholder}
          />
        )}
      />
    </div>
  );
};

export default PredictiveInputField;
