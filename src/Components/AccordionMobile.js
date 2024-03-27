import styles from "../Components/AccordionMobile.module.scss";
import react, { useState } from "react";

export default function AccordionMobile(props) {
  const [count, setCount] = useState("01");
  let timer;
  let x = 1;

  const handleClick = (x) => {
    timer = setTimeout(() => {
      setCount(x);
    }, 100);
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.leftInternalContainer}>
          <div className={styles.mobile}>
            <img
              src={`mobileScreens/screen_${count}.jpeg`}
              alt={`Screen ${count}`}
            />
          </div>
        </div>
        <div className={styles.rightInternalContainer}>
          
            <div className={styles.buttonWhite} onMouseOver={() => handleClick("02")}>Main Menu</div>
            <div className={styles.buttonWhite} onMouseOver={() => handleClick("01")}>Counters</div>
            <div className={styles.buttonWhite} onMouseOver={() => handleClick("03")}>Wings setup</div>
            <div className={styles.buttonWhite} onMouseOver={() => handleClick("04")}>Sensor's test</div>
            <div className={styles.buttonWhite} onMouseOver={() => handleClick("05")}>Feedback signals</div>
            <div className={styles.buttonWhite} onMouseOver={() => handleClick("06")}>Input signals</div>
            <div className={styles.buttonWhite} onMouseOver={() => handleClick("07")}>Operationg modes</div>
            <div className={styles.buttonWhite} onMouseOver={() => handleClick("08")}>Random selecting</div>
            <div className={styles.buttonWhite} onMouseOver={() => handleClick("09")}>Random selection</div>
            <div className={styles.buttonWhite} onMouseOver={() => handleClick("10")}>Work schedule</div>
            <div className={styles.buttonWhite} onMouseOver={() => handleClick("11")}>Service settings</div>
            <div className={styles.buttonWhite} onMouseOver={() => handleClick("12")}>Automatic tests</div>
            <div className={styles.buttonWhite} onMouseOver={() => handleClick("17")}>Settings report</div>
          
        </div>

        <div className={styles.rightInternalContainer2}>
          {/* <img className={styles.image} src="film_mobile.mp4"></img> */}
          <video width="500" muted autoPlay loop>
        <source src="film_gate_01.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>

      </div>
    </>
  );
}


