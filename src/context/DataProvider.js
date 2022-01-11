import { createContext, useContext, useState } from "react"
import { v4 as uuidv4 } from 'uuid';

 const DataContext = createContext()
 export const DataConsumer = () => useContext(DataContext)


const DataProvider = ({children}) => {
    const phoneBookStorage = JSON.parse(localStorage.getItem("phonebook"))
    const [phonebook, setPhonebook] = useState(phoneBookStorage || []);
    const [currentUser, setCurrentUser] = useState({
        name: "",
        phone: "",
        id: null
    });
    
    const setPhonebookfn = (dato) => {
        setPhonebook([
            ...phonebook,
            {...dato, id: uuidv4()}
        ])
        localStorage.setItem("phonebook", JSON.stringify([...phonebook, dato]))
    }

    const deleteItem = (id) => {
        setPhonebook(phonebook.filter(d => d.id !== id))
        const newPhonebook = phonebook.filter(d => d.id !== id)
        localStorage.setItem("phonebook", JSON.stringify(newPhonebook))
    }
   

    // edit user 
    const [edit, setEdit] = useState(false)
    const edituUser = (id) => {
        setEdit(true)
        console.log(id);
    }

    return (
        <DataContext.Provider value={{phonebook, setPhonebookfn, deleteItem, edit, edituUser}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider
