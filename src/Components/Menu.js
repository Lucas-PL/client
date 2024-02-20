import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Menu() {
  return (
   
     <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home"><Image src="logo-gastop.png" fluid /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Produkty</Nav.Link>
            <Nav.Link href="#features">O firmie</Nav.Link>
            <Nav.Link href="#pricing">Kontakt</Nav.Link>
            <Nav.Link href="#pricing">Portfolio</Nav.Link>
          </Nav>
        </Container>

        
      </Navbar>
    

     </>
    
  );
}

export default Menu;

