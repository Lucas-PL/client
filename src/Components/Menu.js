import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import styles from '../Components/Menu.module.scss';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import ReactPlayer from 'react-player';

import video from '../FILM_GASTOP.mp4'

function Menu() {

  function myFunction() {
    var x = document.getElementById("myTopnav");
   
    if (x.className === styles.topnav) {

      x.className += styles.responsive;
      
    } else {

      x.className = styles.topnav;
    }
  }



  return (
    <>
   
      <div className={styles.topnav} id="myTopnav">
        <Link className={styles.active} to={`/`}><img src="logo-gastop.png" /></Link>
        {/* <div className={styles.menuMobile}> */}
          <Link className={styles.Linki} to={`Products`}>Products</Link>
          <Link className={styles.Linki} to={`About`}>About</Link>
          <Link className={styles.Linki} to={`Portfolio`}>Porftolio</Link>
          <Link className={styles.Linki} to={`Contact`}>Contact</Link>
        {/* </div> */}

        <a href="javascript:void(0);" className={styles.icon} onClick={myFunction}>
          <DensityMedium sx={{ border: 2, paddingTop: 1, paddingBottom: 1, minWidth: 50, borderRadius: 2, fontSize: 40 }} />
        </a>
      </div>





      <Navbar expand="lg">
        {/* <ReactPlayer
        src="../FILM_GASTOP.mp4"
        controls={true}
        width="800px"
        height="450px"/> */}

        {/* <video src={video} width="1200" height="400" muted autoplay></video>
      <video src={video} width="1200" height="400" controls autoplay /> */}

        {/* <Container>
          <Navbar.Brand href="#home"><img src="logo-gastop.png" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav fill>
              {/* <div className={styles.menuRight}> */}
        {/* <Link className={styles.Linki} to={`Products`}>Products</Link>
              <Link className={styles.Linki} to={`About`}>About</Link>
              <Link className={styles.Linki} to={`Portfolio`}>Porftolio</Link>
              <Link className={styles.Linki} to={`Contact`}>Contact</Link> */}

        {/* </Nav> */}
        {/* </Navbar.Collapse> */}
        {/* </Container> */}
      </Navbar>
    </>
  );
}

export default Menu;