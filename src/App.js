import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import Table from "./components/Table";
import DataProvider from "./context/DataProvider";

function App() {
  return (
    <>
      <div style={divider}>
        <DataProvider>
           <div><Form /></div>
           <div><Table /></div>
        </DataProvider>
      </div>
    </>
  );
}

const divider = {
  width: "85%",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  margin: "auto"
};

export default App;
