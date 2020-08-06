import React from "react";
import { commonCurrencies } from "../../constants/currencies";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const currencies = Object.values(commonCurrencies);

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function CurrencyDropDown({ search, handleChange }) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-select-currency-native"
          className="searchInput"
          select
          label="currency"
          name="curr"
          value={search.curr}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          variant="outlined"
        >
          {currencies.map((option) => (
            <option key={option.code} value={option.code}>
              {`${option.symbol_native} ${option.name}`}
            </option>
          ))}
        </TextField>
      </div>
    </form>
  );
}
