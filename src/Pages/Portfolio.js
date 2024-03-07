import MainTitle from '../Components/MainTitle';
import CanvasThree from '../Components/canvasThree';

export default function Portfolio() {

    return (
      <div className="App">
          <MainTitle 
            titleOne="Our" 
            titleTwo="Portfolio"
            text="Thousands of installations worldwide."/>

            <CanvasThree />
      </div>
    )
  }