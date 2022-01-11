import React, {  } from "react";
import { ImBin } from 'react-icons/im';
import { BsPencil } from 'react-icons/bs';

const List = ({phonebook, deleteItem}) => {
    const orderedPhonebook = phonebook.sort((a, b) => a.name.localeCompare(b.name))

   console.log(orderedPhonebook);

 
  return (
    <>
      <tbody>
        {phonebook.length > 0 && phonebook.map((d, index) => (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{d.name}</td>
          <td></td>
          <td></td>
          <td></td>
          <td style={{textAlign: "center"}}>{d.phone}&nbsp; &nbsp;<ImBin onClick={()=> deleteItem(d.id)} />&nbsp;&nbsp; <BsPencil /> </td>
        </tr>
        ))}
      </tbody>
    </>
  );
};

export default List;
