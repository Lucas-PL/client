import { Link } from 'react-router-dom';
import styles from '../Components/Menu.module.scss';
import DensityMedium from '@mui/icons-material/DensityMedium';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PortraitIcon from '@mui/icons-material/Portrait';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

let IconProducts = <AutoStoriesIcon sx={{ paddingBottom: 1, fontSize: 50, opacity: 0.3, marginRight: 2 }} />;
let IconContact = <PhoneAndroidIcon sx={{ paddingBottom: 1, fontSize: 50, opacity: 0.3, marginRight: 2 }} />;
let IconAbout = <PortraitIcon sx={{ paddingBottom: 1, fontSize: 50, opacity: 0.3, marginRight: 2 }} />;
let IconPortfolio = <ThumbUpAltIcon sx={{ paddingBottom: 1, fontSize: 50, opacity: 0.3, marginRight: 2 }} />;


function Menu() {

    function myFunction(){
        console.log('my function triggered');
    } 


    return (
        <>

            <div className={styles.mainContainer}>
                <div className={styles.logoContainer}>
                    <Link className={styles.icon} to={`/`}><img src="logo-gastop.png" /></Link>
                </div>
                <div className={styles.linksContainer}>
                    <Link className={styles.Linki} to={`Products`}>{IconProducts}Products</Link>
                    <Link className={styles.Linki} to={`About`}>{IconAbout}About</Link>
                    <Link className={styles.Linki} to={`Portfolio`}>{IconPortfolio}Porftolio</Link>
                    <Link className={styles.Linki} to={`Contact`}>{IconContact}Contact</Link>
                </div>
                <div className={styles.iconButtonContainer}>
                    <a href="javascript:void(0);" className={styles.icon} onClick={myFunction}>
                        <DensityMedium sx={{ border: 2, paddingTop: 1, paddingBottom: 1, minWidth: 50, borderRadius: 2, fontSize: 40 }} />
                    </a>
                </div>
            </div>

        
        </>
    );
}

export default Menu;