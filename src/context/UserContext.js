import React, {  createContext, useState } from 'react'

export const UserContext = createContext({
    email: "",
    password: "",
    role: "",
    firstName: "",
    lastName: "",
    setEmail: () => {},
    setPassword: () => {},
    setRole: () => {},
    setFirstName: () => {},
    setLastName: () => {}
})

 const UserProvider = ({children}) =>{
    const [email, setEmail] = useState("");
    const [password, setPassword]  = useState("");
    const [role, setRole]  = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    return <UserContext.Provider value =
    {{
        email,
        password,
        role,
        firstName,
        lastName,
        setEmail,
        setPassword,
        setRole,
        setFirstName,
        setLastName
    }}>{children}
        </UserContext.Provider>
};

export default UserProvider
