import { createContext, useState } from "react";


const AuthenticationContext = createContext();
const inithialAuth = null;

const AuthenticationProvider = ({children}) => {
    const [auth, setAuth] = useState(inithialAuth);

    const handleAuth = (e) => {
        console.log(e.target.value);
        auth ? setAuth(null) : setAuth(true);
    }

    const data = {auth, handleAuth};

    return <AuthenticationContext.Provider value={data}>{children}</AuthenticationContext.Provider>
}

export {AuthenticationProvider};
export default AuthenticationContext;
