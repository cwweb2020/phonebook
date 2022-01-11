import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import Table from "./components/Table";
import DataProvider from "./context/DataProvider";

function App() {
  return (
    <>
      <div style={divider}>
        <h1 className="fs-3 my-5">Enter information</h1>
        <DataProvider>
          <Form />
          <Table />
        </DataProvider>
      </div>
    </>
  );
}

const divider = {
  width: "45%",
  margin: "0 0 0 5%",
  paddingBottom: "80px"
};

export default App;
