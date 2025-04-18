import React, { createContext,useEffect } from 'react'
import { getlocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {

  const [userData, setUserData] = React.useState("");
  useEffect(() => {
    setLocalStorage();
    const {employees , admin} = getlocalStorage();
    setUserData({employees , admin});
  },[])
  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
      
    </div>
  )
}

export default AuthProvider

