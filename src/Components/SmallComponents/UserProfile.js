import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Styles from '../SmallComponents/UserProfile.module.scss';

const UserProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
         {user.picture && <img className={Styles.logo} src={user.picture} alt={user.name} />}
        
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <ul>
          {Object.keys(user).map((objKey, i) => <li key={i}><b>{objKey}: </b>{user[objKey]} </li>)}
        </ul>
        
      </div>
    )
  );
};

export default UserProfile;