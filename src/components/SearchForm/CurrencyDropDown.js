import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const currencies = [
  {
    value: "USD",
    label: "$ USD",
  },
  { value: "CAD", label: "$" },
  {
    value: "EUR",
    label: "€ EUR",
  },
  {
    value: "AED",
    label: "د.إ.‏ AED",
  },
  {
    value: "AFN",
    label: "؋ AFN",
  },
  {
    value: "ALL",
    label: "Lek ALL",
  },
  {
    value: "CNY",
    label: "¥ CNY",
  },
  {
    value: "DKK",
    label: "kr DKK",
  },
  {
    value: "KRW",
    label: "₩ KRW",
  },
  {
    value: "JPY",
    label: "¥ JPY",
  },
];

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
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
    </form>
  );
}
