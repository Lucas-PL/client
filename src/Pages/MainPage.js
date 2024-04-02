import Menu from '../Components/Menu';
import MainTitle from '../Components/MainTitle';

import LoginButton from '../Components/SmallComponents/LoginButton';
import LogoutButton from '../Components/SmallComponents/LogoutButton';


export default function MainPage() {

  return (
    <div className="App">
      <MainTitle
        titleOne="SG"
        titleTwo="New Line of SpeedGates"
        text="Innovative New Line of SpeedGates " />

      <h1>Auth0 Login</h1>
      <LoginButton />
      <LogoutButton />
    </div>
  )
}

