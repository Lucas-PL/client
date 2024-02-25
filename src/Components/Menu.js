import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import styles from '../Components/Menu.module.scss';

function Menu() {
  return (
    <>
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src="logo-gastop.png"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav fill>
          {/* <div className={styles.menuRight}> */}
            <Link className={styles.Linki} to={`Products`}>Products</Link>
            <Link className={styles.Linki} to={`About`}>About</Link>
            <Link className={styles.Linki} to={`Portfolio`}>Porftolio</Link>
            <Link className={styles.Linki} to={`Contact`}>Contact</Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Menu;