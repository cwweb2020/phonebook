import React, { useState } from "react";
import Button from "@mui/material/Button";
import { DataConsumer } from "../context/DataProvider";

const EditUserForm = () => {
  const { currentUser, editUserDefinitely } = DataConsumer();
  const [dato, setDato] = useState(currentUser);



  const handleChange = (e) => {
    setDato({
      ...dato,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    e.target.reset();
  };

  // edit user

  return (
    <>
      <h1 className="fs-3 my-5">Edit information</h1>
      <form onSubmit={handleSubmit} style={{ width: "70%" }}>
        <input
          className="form-control"
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={dato.name}
        />
        <input
          className="form-control mt-3"
          type="number"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          value={dato.phone}
        />
        <Button
          className="mt-3"
          type="submit"
          variant="contained"
          style={{ width: "100%" }}
          onClick={() => editUserDefinitely(dato)}
        >
          Edit Contact
        </Button>
      </form>
    </>
  );
};

export default EditUserForm;
