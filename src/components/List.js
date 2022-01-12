import React, {  } from "react";
import { ImBin } from 'react-icons/im';
import { BsPencil } from 'react-icons/bs';

const List = ({ phonebook, deleteItem, edituUser, showHideEdit }) => {
    const orderedPhonebook = phonebook.sort((a, b) => a.name.localeCompare(b.name))

    const HandleUserEdit = (user) => {
      showHideEdit()
      edituUser(user)
    }

 
  return (
    <>
      <tbody>
        {phonebook.length > 0 && orderedPhonebook.map((d, index) => (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td className="text-capitalize">{d.name}</td>
          <td></td>
          <td></td>
          <td></td>
          <td style={{textAlign: "center"}}>{d.phone}</td>
          <td><ImBin onClick={()=> deleteItem(d.id)} />&nbsp;&nbsp; <BsPencil 
            onClick={()=> HandleUserEdit(d) }
          /> </td>
        </tr>
        ))}
      </tbody>
    </>
  );
};

export default List;
