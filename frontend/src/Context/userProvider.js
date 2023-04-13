import React, { createContext, useState } from 'react';

export const User = createContext();


const UserProvider = ({ children }) => {

    const [token, setToken] = useState(null);


  return (
    <User.Provider value={ {token, setToken} }>
        { children }
    </User.Provider>
  )
}

export default UserProvider;