import React, { useState } from "react";
import { ReactQueryDevtools } from "react-query-devtools";
import CssBaseline from "@material-ui/core/CssBaseline";
import Dashboard from "./components/Dashboard";
import CheapestTickets from "./components/CheapestTickets";
import SearchForm from "./components/SearchForm";
import Header from "./components/Header";

import "./App.css";

function App() {
  const [search, setSearch] = useState({
    destination: "",
    origin: "",
    depart: "",
    ret: "",
    curr: "USD",
  });

  const handleChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
    console.log(search);
  };

  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Dashboard>
        <SearchForm search={search} handleChange={handleChange} />
        <CheapestTickets search={search} />
      </Dashboard>
      <ReactQueryDevtools />
    </div>
  );
}

export default App;
