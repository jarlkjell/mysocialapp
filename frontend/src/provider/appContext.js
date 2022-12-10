//Add other useState to customHook later
//try using compostion instead of ContextHooK?

import { createContext,useContext } from "react";
import useAccount from "../customhooks/useAccount";


const AppContext = createContext();
const useAppContext = () => useContext(AppContext);


const AppContextProvider = ({children}) => {

    const [LOCAL_STORAGE_KEY,,user,setUser,token,setToken,userData,setUserData] = useAccount();
    return(
        <AppContext.Provider>
            value = { 
            {
                LOCAL_STORAGE_KEY,user,setUser,token,setToken,userData,setUserData
            }
        } {children}
        </AppContext.Provider>
    )
}

export {AppContextProvider, useAppContext}