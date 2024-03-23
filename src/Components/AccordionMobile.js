import styles from "../Components/AccordionMobile.module.scss";
import react, { useState } from "react";

export default function AccordionMobile(props) {
  const [count, setCount] = useState(1);
  let timer;

  const handleClick = () => {
    timer = setTimeout(() => {
      if (count < 10) {
        setCount(count + 1);
      }
    }, 300);
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.leftInternaContainer}>
          <div onMouseOver={handleClick} className={styles.mobile}>
            <img
              src={`mobileScreens/screen_0${count}.jpeg`}
              alt={`Screen ${count}`}
            />
          </div>
        </div>
        <div className={styles.rightInternalContainer}>
          <h1>Interface description</h1>
          <p>The remote wifi interface enables to setup functions and parameters listed below:</p>
          <ul>
            <li onMouseOver={handleClick}>Counters</li>
            <li onMouseOver={handleClick}>Motor Setup</li>
            <li onMouseOver={handleClick}>Return signal configuration</li>
            <li onMouseOver={handleClick}>Pictograms selection</li>
          </ul>
        </div>
      </div>
    </>
  );
}
