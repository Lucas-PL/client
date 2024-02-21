import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';


function AccordionMain() {
  return (
    <Container>

    <Accordion style={{ opacity: 0.2, color: 'black'}} defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><h1>Our History</h1></Accordion.Header>
    
        <Accordion.Body style={{color: "black", opacity: 1}}>
        First Gastop company has started the manufacture and sell of access control devices in 1996 on the European market. The companies sell its devices in the whole world. First Gastop has independently developed and patented solutions for mechanisms for personal traffic control devices. These proprietary solutions are presently used on thousands of objects around the world. Currently, the company is preparing further proprietary solutions for the access control and personal traffic control industry, which puts Gastop in a group of companies with the highest innovation solutions on a global scale.
        </Accordion.Body>

      </Accordion.Item>
          
     
    </Accordion>
    <br></br>
    </Container>
  );
}

export default AccordionMain;