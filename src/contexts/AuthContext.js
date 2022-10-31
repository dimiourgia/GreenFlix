import React from "react";

const AuthContex = React.createContext();

const AuthProvider = ({children})=>{
    return(
        <AuthContex.Provider>
            {children}
        </AuthContex.Provider>
    )
}


export default AuthProvider;