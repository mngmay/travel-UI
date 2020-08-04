import React, { useState } from "react";
import { ReactQueryDevtools } from "react-query-devtools";
import CheapestTickets from "./components/CheapestTickets";

import "./App.css";

function App() {
  const [search, setSearch] = useState({
    destination: "HKT",
    origin: "MOW",
    depart: "",
    ret: "",
    curr: "USD",
  });

  return (
    <div className="App">
      <CheapestTickets search={search} />
      <ReactQueryDevtools />
    </div>
  );
}

export default App;
