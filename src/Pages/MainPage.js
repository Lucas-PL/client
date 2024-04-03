import Menu from '../Components/Menu';
import MainTitle from '../Components/MainTitle';
import UserProfile from '../Components/SmallComponents/UserProfile';
import LoginButton from '../Components/SmallComponents/LoginButton';
import LogoutButton from '../Components/SmallComponents/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
// import { useAuth0 } from '@auth0/auth0-react';

export default function MainPage() {

  const { user, isAuthenticated } = useAuth0();

  return (
    <>
      <div className="App">
          <MainTitle 
            titleOne="SG" 
            titleTwo="New Line of SpeedGates" 
            text="Innovative New Line of SpeedGates "/>
           
           {isAuthenticated && (
            <>
           <h1>Witaj {user.nickname}</h1>
           <p>This webpage after login gives you more technical information about the products</p>
            </>
           )}
          
      </div>

      <h1>Auth0 Login</h1>
      <LoginButton />
      <LogoutButton />
      <UserProfile />
    </>

  )
}

