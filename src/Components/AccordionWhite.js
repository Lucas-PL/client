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
                </div>

            </div>
        </>
    )

}