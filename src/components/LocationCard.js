import React from "react";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { commonCurrencies } from "../constants/currencies.js";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import useGetLocation from "../hooks/useGetLocation";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "60%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  container: {
    maxHeight: 400,
  },
}));

const LocationCard = ({ location, currency, flights }) => {
  const classes = useStyles();

  const columns = [
    { id: "airline", label: "Airport", minWidth: 20 },
    {
      id: "price",
      label: "Price",
      minWidth: 20,
      format: (value) => `${commonCurrencies[currency].symbol}${value}`,
    },
    { id: "departure_at", label: "Departure", minWidth: 20 },
    { id: "return_at", label: "Return", minWidth: 20 },
  ];
  const rows = flights;

  const cityName = useGetLocation(location).data?.filter(
    (city) => city.code === location
  )[0].name;

  const countryName = useGetLocation(location).data?.filter(
    (city) => city.code === location
  )[0].country_name;

  return (
    <Paper
      className={classes.root}
      style={{ margin: "0 auto", marginTop: "20px" }}
    >
      <h1 style={{ textAlign: "center" }}>{`${location} ${
        cityName ? "- " + cityName : ""
      }${countryName ? ", " + countryName : ""}`}</h1>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={uuidv4()}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={uuidv4()}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : column.id === "departure_at" ||
                            column.id === "return_at"
                          ? moment(value).format("LLL")
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default LocationCard;
