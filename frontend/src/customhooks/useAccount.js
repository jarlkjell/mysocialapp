import {useEffect,useState} from "react";
import jwt_decode from "jwt-decode"




const useAccount = () => {
    const LOCAL_STORAGE_KEY = "token";
    const [user,setUser] = useState();
    const [token,setToken] = useState();
    const [userData, setUserData] = useState();
    useEffect(() => {
        const localStorageContent = JSON.parse(localStorage.getitem(LOCAL_STORAGE_KEY));
        const decodedJwt = jwt_decode(localStorageContent);
        setUser(decodedJwt.email);
        setToken(decodedJwt.access);
        setUserData(decodedJwt);
    },[])
    return[LOCAL_STORAGE_KEY,user,setUser,token,setToken,userData,setUserData];
}
export default useAccount;