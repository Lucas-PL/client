import React from 'react';
import styles from '../Components/MainTitle.module.scss';
import Typography from '@mui/material/Typography';


export default function MainTitle(props) {
    return (
        <div className={styles.mainDiv}>
            <div className={styles.backgroundDiv}> 
                <Typography className={styles.upperText} variant="h2" component="h1">
                    {props.titleOne} <span style={{ color: "#0060af" }}>{props.titleTwo}</span>
                </Typography>

                <Typography variant="h5" component="h2">
                    {props.text}
                </Typography>

                <Typography className={styles.bottomText} variant="body1"><span style={{ color: "#0060af" }}>European Union</span> 1996</Typography>
            </div>
        </div>
    )
}
