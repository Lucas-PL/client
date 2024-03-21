import MainTitle from '../Components/MainTitle';
import AccordionWhite from'../Components/AccordionWhite';


export default function Portfolio() {

  return (
    <div className="App">
      <MainTitle
        titleOne="Our"
        titleTwo="Portfolio"
        text="Thousands of installations worldwide." />
        <img src="gates_02.png" />

        <AccordionWhite fileName="gates_04.png"/>

        <img src="gates_03.png" />
        <AccordionWhite fileName="gates_05.png" />

       


      
    </div>

  )
}