import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import Table from "./components/Table";
import EditUserForm from "./components/EditUserForm";
import { DataConsumer } from "./context/DataProvider";

function App() {
  const { edit } = DataConsumer();


  
  return (
    <>
      <div style={divider}>
        {
          edit ? <div> <EditUserForm /> </div> : <div> <Form /> </div>
        }
           <div><Table /></div>
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
