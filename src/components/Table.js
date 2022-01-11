import React, {  } from "react";
import List from "./List";
import { DataConsumer } from "../context/DataProvider";

const Table = () => {
    const { phonebook, deleteItem } = DataConsumer();
   


  return (
    <>
      <h2 className="mt-5 pt-4 fs-3">Phone Book</h2>
      <table className="table mt-5" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col" style={{textAlign: "center"}}>Phone</th>
          </tr>
        </thead>
           <List phonebook={phonebook} deleteItem={deleteItem}/>
      </table>
    </>
  );
};

export default Table;
