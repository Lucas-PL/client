import styles from '../Components/AccordionEmpty.module.scss';
import FeatureDescription from '../Components/FeaturesDescription';

export default function AccordionEmpty(props) {

    return (
        <>
            <div className={styles.mainContainer}>
                <FeatureDescription
                    titleOne={props.titleOne}
                    titleTwo={props.titleTwo}
                    text={props.text} />
            </div>
            <img src={props.image} />
        </>
    )

}