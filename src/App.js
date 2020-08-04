import React, { useState } from "react";
import { ReactQueryDevtools } from "react-query-devtools";
import CheapestTickets from "./components/CheapestTickets";
import SearchForm from "./components/SearchForm";

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
      <SearchForm search={search} handleChange={handleChange} />
      <CheapestTickets search={search} />
      <ReactQueryDevtools />
    </div>
  );
}

export default App;
