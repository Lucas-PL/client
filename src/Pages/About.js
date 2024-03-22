import Menu from '../Components/Menu';
import VisitCard from '../Components/VisitCard';
import MainTitle from '../Components/MainTitle';
import Typography from '@mui/material/Typography';
import { alignProperty } from '@mui/material/styles/cssUtils';
import React, { useState } from 'react';


export default function About() {

  const [count, setCount] = useState(1);

  const handleClick = ()=> {
    
    if (count < 10) {
      setCount(count + 1);
    }
  }
  
  const myStyle = {
    color: 'black',
    width: '40%',
    maxWidth: '250px',
    borderStyle: 'solid',
    borderWidth: '5px',
    padding: '10px',
    borderRadius: '30px',
    boxShadow: '0 0 10px 5px rgba(0, 0, 0, 0.5)'
  };

  const mainContainer = {
    display: 'flex',
    justifyContent: 'center',
    
  }

  return (
    <>
      <div className="App">

        <MainTitle
          titleOne="Our"
          titleTwo="History"
          text="We believe that the idea supported by passion, work, and engagement give a result in the form of a refined product, satisfaction and user safety." />

      </div>
    <div style={mainContainer}>
      <div style={myStyle}>
      <img src={`mobileScreens/screen_0${count}.jpeg`} alt={`Screen ${count}`} />
    
        {/* <img src=`mobileScreens/screen_0{count}.jpeg` /> */}
        {/* <h1>{count}</h1> */}
      </div>
      </div>

      <button onClick={handleClick} disabled={ count === 10 }>to jest button</button>
      <button>to jest drugi button</button>

    </>
  )
}
