import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import styles from '../Components/Menu.module.scss';
import DensityMedium from '@mui/icons-material/DensityMedium';


function Menu() {

  function myFunction() {
    var x = document.getElementById("myTopnav");
    var y = document.getElementById("menuMobile");
    
      if (x.className === styles.topnav) {
      x.className += styles.responsive;
          } else {
      x.className = styles.topnav;
    }
  }

  return (
    <>
   
      <div className={styles.topnav} id="myTopnav">
        <div className={styles.menuMobile} id="menuMobile">
          <Link className={styles.active} to={`/`}><img src="logo-gastop.png" /></Link>
          <Link className={styles.Linki} to={`Products`}>Products</Link>
          <Link className={styles.Linki} to={`About`}>About</Link>
          <Link className={styles.Linki} to={`Portfolio`}>Porftolio</Link>
          <Link className={styles.Linki} to={`Contact`}>Contact</Link>
        </div>

        <a href="javascript:void(0);" className={styles.icon} onClick={myFunction}>
          <DensityMedium sx={{ border: 2, paddingTop: 1, paddingBottom: 1, minWidth: 50, borderRadius: 2, fontSize: 40 }} />
        </a>
      </div>
   </>
  );
}

export default Menu;