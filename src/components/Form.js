import React, { useState } from "react";
import Button from '@mui/material/Button';
import { DataConsumer } from "../context/DataProvider";



const Form = () => {
    const { setPhonebookfn } = DataConsumer();
  const [dato, setDato] = useState({
    name: "",
    phone: "",
  });

  const handleChange = (e) => {
    setDato({
      ...dato,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPhonebookfn(dato);
     
    e.target.reset();
  };

 

  return (
    <>
      <form onSubmit={handleSubmit} style={{width: "70%"}}>
        <input
        className="form-control"
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}
        />
        <input
          className="form-control mt-3"
          type="number"
          name="phone"
          placeholder="Telefono"
          onChange={handleChange}
        />
        <Button className="mt-3" type="submit" variant="contained" style={{width: "100%"}}>Add Contact</Button>
      </form>
    </>
  );
};

export default Form;
