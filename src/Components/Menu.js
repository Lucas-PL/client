import { Link } from 'react-router-dom';

import styles from '../Components/Menu.module.scss';
import DensityMedium from '@mui/icons-material/DensityMedium';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PortraitIcon from '@mui/icons-material/Portrait';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

let IconProducts = <AutoStoriesIcon className={styles.iconItem}/>;
let IconContact = <PhoneAndroidIcon className={styles.iconItem}/>;
let IconAbout = <PortraitIcon className={styles.iconItem}/>;
let IconPortfolio = <ThumbUpAltIcon className={styles.iconItem}/>;


function Menu() {

    function toggleVisibility(){
        let x = document.getElementById('linksContainer');
        x.classList.toggle(styles.makeVisible);  
    } 


    return (
        <>

            <div className={styles.mainContainer}>
                <div className={styles.logoContainer}>
                    <Link className={styles.icon} to={`/`}><img src="logo-gastop.png" /></Link>
                </div>
                <div className={styles.linksContainer} id="linksContainer">

                    <Link className={styles.Linki} onClick={toggleVisibility} to={`Products`}>{IconProducts}Products</Link>
                    <Link className={styles.Linki} onClick={toggleVisibility} to={`About`}>{IconAbout}About</Link>
                    <Link className={styles.Linki} onClick={toggleVisibility} to={`Portfolio`}>{IconPortfolio}Porftolio</Link>
                    <Link className={styles.Linki} onClick={toggleVisibility} to={`Contact`}>{IconContact}Contact</Link>

                </div>
                <div className={styles.iconButtonContainer}>
                    <a href="javascript:void(0);" className={styles.iconButton} onClick={toggleVisibility}>
                        <DensityMedium sx={{ border: 2, paddingTop: 1, paddingBottom: 1, minWidth: 50, borderRadius: 2, fontSize: 40 }} />
                    </a>
                </div>
            </div>

        
        </>
    );
}

export default Menu;