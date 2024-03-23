import styles from "../Components/AccordionMobile.module.scss";
import react, { useState } from "react";

export default function AccordionMobile(props) {
  const [count, setCount] = useState(1);
  let timer;
  let x = 1;

  const handleClick = (x) => {
    timer = setTimeout(() => {
     setCount(x);
    }, 100);
  };

  return (
    <>
              <h1>Interface description</h1>
              <p>The remote wifi interface enables to setup functions and parameters listed below:</p>
      <div className={styles.mainContainer}>
        <div className={styles.leftInternaContainer}>
          <div onMouseOver={handleClick('01')} className={styles.mobile}>
            <img
              src={`mobileScreens/screen_${count}.jpeg`}
              alt={`Screen ${count}`}
            />
          </div>
        </div>
        <div className={styles.rightInternalContainer}>
          <ul>
            <li onMouseOver={()=>handleClick('01')}>Counters and Random Selection</li>
            <li onMouseOver={()=>handleClick('02')}>Main Menu</li>
            <li onMouseOver={()=>handleClick('03')}>Wings movement setup panel</li>
            <li onMouseOver={()=>handleClick('04')}>Sensor's test panel</li>
            <li onMouseOver={()=>handleClick('05')}>Feedback signals setup</li>
            <li onMouseOver={()=>handleClick('06')}>Input signals setup</li>
            <li onMouseOver={()=>handleClick('07')}>Operationg mode selection</li>
            <li onMouseOver={()=>handleClick('08')}>Random selecting</li>
            <li onMouseOver={()=>handleClick('09')}>Random selection option</li>
            <li onMouseOver={()=>handleClick('10')}>Work schedule planning</li>
            <li onMouseOver={()=>handleClick('11')}>Service settings</li>
            <li onMouseOver={()=>handleClick('12')}>Automatic tests</li>
            {/* <li onMouseOver={()=>handleClick('13')}>Settings report</li> */}
            {/* <li onMouseOver={()=>handleClick('14')}>Pictograms selection</li>
            <li onMouseOver={()=>handleClick('15')}>Pictograms selection</li>
            <li onMouseOver={()=>handleClick('16')}>Pictograms selection</li> */}
            <li onMouseOver={()=>handleClick('17')}>Settings report</li>
          </ul>
        </div>
      </div>
    </>
  );
}
