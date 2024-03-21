import MainTitle from '../Components/MainTitle';
import AccordionWhite from'../Components/AccordionWhite';
import AccordionMain from '../Components/AccordionMain';
import AccordionEmpty from '../Components/AccordionEmpty';


export default function Portfolio() {

  return (
    <div className="App">
      <MainTitle
        titleOne="SG"
        titleTwo="NewLine"
        text="Solid solutions with reliable price." />
        <img src="gates_02.png" />

        <AccordionEmpty
          titleOne="Smooth" titleTwo="Design"
          text="Stainless steel graded design AISI304 for internal usage"  />

        <AccordionWhite
          fileName="gates_05.png"
          titleOne="System of " titleTwo="Sensors"
          text="System of sensors for effective detection of passing persons. Sophisticated algorythms of detection based on selflearning solutions."/>


        <AccordionEmpty
          titleOne="Easy" titleTwo="Installation"
          text="Full access to electronic units and operator's interface"
          image="gates_03.png" />
                

        <AccordionEmpty
          titleOne="Smooth" titleTwo="Design"
          text="Stainless steel graded design AISI304 for internal usage"  /> 

        <AccordionWhite 
          fileName="gates_04.png"
          titleOne="Wifi" titleTwo="Configuration"
          text="Optional solution for setting up the device parameters and advanced configuration. 
          Configure your device remotely. Easy to use solution."/>

        <AccordionEmpty
          titleOne="5 Years of" titleTwo="Warranty"
          text="Durable and solid solutions always have longlasting warranty periods"  /> 
      
    </div>

  )
}