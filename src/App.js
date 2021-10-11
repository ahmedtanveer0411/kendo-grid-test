import React, { useEffect, useState } from "react";
import { Loader } from "@progress/kendo-react-indicators";

import "@progress/kendo-theme-default/dist/all.css";
import "./App.css";

import StateTable from "./components/StateTable";
import StateFetch from "./services/StateFetch";

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    try {
      const response = await StateFetch();
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (e) {
      setData({});
      setLoading(false);
    }
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="App-header">
          <Loader size="large" type="converging-spinner" />
        </div>
      ) : (
        <div className="App-header">
          <StateTable data={data} />
        </div>
      )}
    </div>
  );
}

export default App;
