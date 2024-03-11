import MainTitle from '../Components/MainTitle';
import CanvasThree from '../Components/canvasThree';
import styles from '../Pages/Portfolio.module.scss';
import FeaturesDescription from '../Components/FeaturesDescription';
import SgSensors from '../Components/sgSensors';
import CardReader from '../Components/CardReader';

export default function Portfolio() {

  return (
    <div className="App">
      <MainTitle
        titleOne="Our"
        titleTwo="Portfolio"
        text="Thousands of installations worldwide." />
      <div className={styles.mobileMain}>

        { /* OKNO - TELEFON Z WIFI */}
        <div className={styles.mobileIphone}>
          <CanvasThree />
        </div>
        <div className={styles.mobileText}>
          <FeaturesDescription titleOne="Wifi Control Panel" titleTwo="Easy setup for more then 100 functions" text="Different modes of operation, return signal configuration, diagnostic mode etc." />
        </div>
      </div>

      { /* OKNO - SYSTEM CZUJNIKÓW */}
      <div className={styles.sensorsSystem}>
        <div className={styles.mobileText}>
          <FeaturesDescription color="white" titleOne="Sensors System" titleTwo="AI inteligence" text="System of sensors with very speedy STM processor and sophisticated software algorytm allow this device to react in miliseconds.  " />
        </div>
        <div className={styles.mobileIphone}>
          <SgSensors />
        </div>
      </div>

      { /* OKNO - SPACE FOR READERS */}
      <div className={styles.mobileMain}>
        <div className={styles.mobileText}>
          <FeaturesDescription titleOne="Space for readers" titleTwo="Comfort" text="Card reader zone with mounting elements.  " />
        </div>
        <div className={styles.mobileIphone}>
          <CardReader />
        </div>
      </div>
    </div>

  )
}