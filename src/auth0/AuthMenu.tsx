import { useAuth0 } from "@auth0/auth0-react";
// import { useState } from "react";
import LogoutButton from "./Logout";
import LoginButton from "./Login";
import Profile from './Profile';

const AuthMenu = () => {
    const { user, isAuthenticated } = useAuth0();

    if (isAuthenticated) {
        return  <div>
            <Profile /> 
            <LogoutButton /> 
       
        </div>
    } 
    return <div> <LoginButton /> </div>;
};

export default AuthMenu;