import React from "react";
import useAutoComplete from "../../hooks/useAutoComplete";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const PredictiveInputField = ({ search, setSearch, label, handleChange }) => {
  function removeDuplicates(myArr, prop) {
    return myArr.filter((obj, pos, arr) => {
      return arr.map((mapObj) => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
  }

  let autoCompleteResults = useAutoComplete(search.origin).data || [];

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
        inputValue={search.origin}
        onInputChange={(e, newInputValue) => {
          setSearch({ ...search, [label]: newInputValue.slice(0, 3) });
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            margin="normal"
            variant="outlined"
            name={label}
            value={search.origin}
          />
        )}
      />
    </div>
  );
};

export default PredictiveInputField;
