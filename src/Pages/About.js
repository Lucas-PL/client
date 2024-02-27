import Menu from '../Components/Menu';
import PageTitle from '../Components/PageTitle';
import VisitCard from '../Components/VisitCard';
import MainTitle from '../Components/MainTitle';

export default function About() {

    return (
      <>
      <div className="App">
      <MainTitle 
        titleOne="Our" 
        titleTwo="History" 
        text="We believe that the idea supported by passion, work, and engagement give a result in the form of a refined product, satisfaction and user safety."/>
    
      </div>
      <VisitCard name="Eryk Batorowicz"/>
      <VisitCard name="Tomasz Zieliński"/>
      </>
    )
  }
