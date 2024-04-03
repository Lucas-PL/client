import { useAuth0 } from '@auth0/auth0-react';
import styles from '../SmallComponents/LogoutButton.module.scss';

const LogoutButton = () => {
    const { logout , isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
        <a className={styles.logout} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Logout
        </a>
        )
     
    )
}

export default LogoutButton