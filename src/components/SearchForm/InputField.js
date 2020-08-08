import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function InputField({ label, placeholder, handleChange }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField
        id="outlined-textarea"
        name={label}
        label={label}
        placeholder={placeholder}
        multiline
        variant="outlined"
        onChange={handleChange}
      />
    </div>
  );
}
