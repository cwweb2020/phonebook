import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const DataContext = createContext();
export const DataConsumer = () => useContext(DataContext);

const DataProvider = ({ children }) => {
  const phoneBookStorage = JSON.parse(localStorage.getItem("phonebook"));
  const [phonebook, setPhonebook] = useState(phoneBookStorage || []);
  const [currentUser, setCurrentUser] = useState({});

  const setPhonebookfn = (dato) => {
    setPhonebook([...phonebook, { ...dato, id: uuidv4() }]);
    localStorage.setItem("phonebook", JSON.stringify([...phonebook, dato]));
  };

  const deleteItem = (id) => {
    setPhonebook(phonebook.filter((d) => d.id !== id));
    const newPhonebook = phonebook.filter((d) => d.id !== id);
    localStorage.setItem("phonebook", JSON.stringify(newPhonebook));
  };

  // edit user
  const [edit, setEdit] = useState(false);

  const edituUser = (user) => {
    console.log(user);
    setCurrentUser(user);
  };

  const showHideEdit = () => {
    setEdit(!edit);
  };

  // edit user definitely
  const editUserDefinitely = (user) => {
    const newArrayPhonebook = phonebook.map((u) => {
      if (u.id === user.id) {
        u.name = user.name;
        u.phone = user.phone;
        u.id = user.id;
      }
      return u;
    });
    setPhonebook(newArrayPhonebook);
    localStorage.setItem("phonebook", JSON.stringify(newArrayPhonebook));
    showHideEdit();
  };

  return (
    <DataContext.Provider
      value={{
        phonebook,
        setPhonebookfn,
        deleteItem,
        edit,
        edituUser,
        currentUser,
        showHideEdit,
        editUserDefinitely,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
