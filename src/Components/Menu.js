import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import styles from '../Components/Menu.module.scss';
import DensityMedium from '@mui/icons-material/DensityMedium';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PortraitIcon from '@mui/icons-material/Portrait';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';



function Menu() {

  function myFunction() {
    var x = document.getElementById("myTopnav");
    var y = document.getElementById("menuMobile");

    if (x.className === styles.topnav) {
      x.className += styles.responsive;
    } else {
      x.className = styles.topnav;
      let IconProducts = "b ";
      let IconContact = " b";
      
    }
  }
  
  let IconProducts = <AutoStoriesIcon sx={{ paddingBottom: 1, fontSize: 50, opacity: 0.3, marginRight: 2 }} />;
  let IconContact = <PhoneAndroidIcon sx={{ paddingBottom: 1, fontSize: 50, opacity: 0.3, marginRight: 2 }} />;
  let IconAbout = <PortraitIcon sx={{ paddingBottom: 1, fontSize: 50, opacity: 0.3, marginRight: 2 }} />;
  let IconPortfolio = <ThumbUpAltIcon sx={{ paddingBottom: 1, fontSize: 50, opacity: 0.3, marginRight: 2 }} />;
  
  return (
    <>

      <div className={styles.topnav} id="myTopnav">
        <div className={styles.menuMobile} id="menuMobile">
          {/* <Link className={styles.active} to={`/`}><img src="logo-gastop.png" /></Link>
          <Link className={styles.Linki} to={`Products`}>{IconProducts}Products</Link>
          <Link className={styles.Linki} to={`About`}>{IconAbout}About</Link>
          <Link className={styles.Linki} to={`Portfolio`}>{IconPortfolio}Porftolio</Link>
          <Link className={styles.Linki} to={`Contact`}>{IconContact}Contact</Link> */}
          <Link className={styles.active} to={`/`}><img src="logo-gastop.png" /></Link>
          <Link className={styles.Linki} to={`Products`}>{IconProducts}Products</Link>
          <Link className={styles.Linki} to={`About`}>{IconAbout}Orders</Link>
          <Link className={styles.Linki} to={`Portfolio`}>{IconPortfolio}Manuals</Link>
          <Link className={styles.Linki} to={`Contact`}>{IconContact}Service</Link>
          <Link className={styles.Linki} to={`Contact`}>{IconContact}Documents</Link>
          <Link className={styles.Linki} to={`Contact`}>{IconContact}News</Link>
          <Link className={styles.Linki} to={`Contact`}>{IconContact}Contact</Link>
        </div>

        <a href="javascript:void(0);" className={styles.icon} onClick={myFunction}>
          <DensityMedium sx={{ border: 2, paddingTop: 1, paddingBottom: 1, minWidth: 50, borderRadius: 2, fontSize: 40 }} />
        </a>
      </div>
    </>
  );
}

export default Menu;