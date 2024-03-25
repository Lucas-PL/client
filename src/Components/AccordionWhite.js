import styles from '../Components/AccordionWhite.module.scss';
import FeatureDescription from '../Components/FeaturesDescription';

export default function AccordionWhite(props) {

    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.leftInternalContainer}>
                    <img src={props.fileName} />
                </div>
                <div className={styles.rightInternalContainer}>
                    
                    <FeatureDescription
                     titleOne={props.titleOne} 
                     titleTwo={props.titleTwo}
                     text={props.text} />

                     <img className={styles.image} src="gate.jpg"></img>
                </div>

            </div>
        </>
    )

}