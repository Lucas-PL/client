import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';
import React, { useState, useEffect } from 'react';


function App() {
   const [ zmienna, setZmienna ] = useState('brakZmiennej');

    useEffect(() =>{
    
      fetch(`http://localhost:4000/message`, {
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
         <p>Zmienna to: {zmienna}</p>
          <Button />
        </header>
      </div>
    )
  }

  export default App;
