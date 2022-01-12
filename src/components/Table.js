import React, {  } from "react";
import List from "./List";
import { DataConsumer } from "../context/DataProvider";
import { BsFillPersonFill } from 'react-icons/bs';
import { AiTwotonePhone } from 'react-icons/ai';

const Table = () => {
    const { phonebook, deleteItem, edituUser, showHideEdit } = DataConsumer();
   


  return (
    <>
      <h2 className="mt-5 fs-3">Phone Book</h2>
      <table className="table mt-4" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name <BsFillPersonFill /></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col" style={{textAlign: "center"}}>Phone <AiTwotonePhone /></th>
          </tr>
        </thead>
           <List phonebook={phonebook} deleteItem={deleteItem} edituUser={edituUser} showHideEdit={showHideEdit} />
      </table>
    </>
  );
};

export default Table;
