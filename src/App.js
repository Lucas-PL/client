import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';
import React, { useState, useEffect } from 'react';
import RegistrationForm from './Components/RegistrationForm';
import Trial from './Components/Trial';


function App() {
   const [ zmienna, setZmienna ] = useState('brakZmiennej');

    useEffect(() =>{

      const hostlink = (process.env.NODE_ENV == 'development') ? "http://localhost:4000": "http://www.gastopstorage.com.pl:4000";
      console.log(" to jest hostlink:  ", hostlink)
      // console.log("to jest process env:  ", process.env.REACT_APP_LOCALHOST)
    
      fetch(hostlink +'/message', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        }

      })
        .then(response => response.json())
        .then((data) => {
          console.log("To jest dana: ", data);
          setZmienna(data.user)
        })
        .catch(error => console.error(error));
    
      }, []);


    return (
      <div className="App">
        <header className="App-header">
          <RegistrationForm />
         <p>Zmienna to: {zmienna}</p>
         <p>environment data: {process.env.REACT_APP_LOCALHOST}</p>
         <p>The NODE_ENV IS:  {process.env.NODE_ENV}</p>
          <Button />
          <Trial />
        </header>
      </div>
    )
  }

  export default App;
