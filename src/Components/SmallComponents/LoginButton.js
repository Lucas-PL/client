import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import styles from '../SmallComponents/LoginButton.module.scss';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    
    console.log("loginWithRedirect: ", loginWithRedirect);
    console.log("isAuthenticated: ", isAuthenticated);

    const handleLogin = async ()=> {
        await loginWithRedirect({
            appState: {
                returnTo: "About",
            }
        });
    };

    return (
       
        !isAuthenticated && (
        <a className={styles.login} onClick={handleLogin}>
            LogIn
        </a>
        )
        )
    
}

export default LoginButton;