import React, { createContext,useEffect } from 'react'
import { getlocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {

  const [userData, setUserData] = React.useState("");
  useEffect(() => {
    setLocalStorage();
    const {employees} = getlocalStorage();
    setUserData(employees);
  },[])
  return (
    <div>
      <AuthContext.Provider value={[userData,setUserData]}>
        {children}
      </AuthContext.Provider>
      
    </div>
  )
}

export default AuthProvider

