import MainTitle from '../Components/MainTitle';
import LoginButton from '../Components/SmallComponents/LoginButton';
import LogoutButton from '../Components/SmallComponents/LogoutButton';



export default function Contact() {

  return (
    <>
      <div className="App">
        <MainTitle titleOne="Contact" titleTwo="Us" />
      </div>
      <h1>Auth0 Login</h1>
      <LoginButton />
      <LogoutButton />

    </>

  )
}
