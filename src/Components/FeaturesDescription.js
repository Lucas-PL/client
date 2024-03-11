import React from 'react';
import styles from '../Components/FeaturesDescription.module.scss';
import Typography from '@mui/material/Typography';


export default function FeaturesDescription(props) {
    return (
        <div className={styles.mainDiv}>
            <div className={styles.backgroundDiv}> 
                <Typography style={{ color: props.color}} className={styles.upperText} variant="h2" component="h1">
                    {props.titleOne} <span style={{ color: "#0060af" }}>{props.titleTwo}</span>
                </Typography>

                <Typography style={{ color: props.color}}  variant="h5" component="h2">
                    {props.text}
                </Typography>

                <Typography style={{ color: props.color}} className={styles.bottomText} variant="body1"><span style={{ color: "#0060af" }}>European Union</span> 1996</Typography>
            </div>
        </div>
    )
}
