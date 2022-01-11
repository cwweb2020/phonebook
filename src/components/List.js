import React, {  } from "react";
import { AiTwotonePhone } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { ImBin } from 'react-icons/im';
import { BsPencil } from 'react-icons/bs';

const List = ({phonebook, deleteItem}) => {


   console.log(phonebook);

 
  return (
    <>
      <tbody>
        {phonebook.length > 0 && phonebook.map((d, index) => (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{d.name}&nbsp; <BsFillPersonFill /> </td>
          <td></td>
          <td></td>
          <td></td>
          <td style={{textAlign: "center"}}>{d.phone}&nbsp; <AiTwotonePhone /> &nbsp;<ImBin onClick={()=> deleteItem(d.id)} />&nbsp; <BsPencil /> </td>
        </tr>
        ))}
      </tbody>
    </>
  );
};

export default List;
