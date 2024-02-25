import React from "react";
import styles from "../Components/VisitCards.module.scss";

export default function VisitCard(props) {
  return (
    <>
      <div className={styles.visitcards}>
        <div className={styles.logo}>
          <div className={styles.logoLeft}>
            <img style={{ scale: "0.8"}} src="logo-gastop.png" />
          </div>
        </div>
        <div className={styles.name}>
          <h4>{props.name}</h4>
          <p>KEY ACCOUNT MANAGER</p>
        </div>
        <div className={styles.company}>
            <div>
                GASTOP PRODUCTION LTD
                229 Krakowska Street,
                Poland
            </div>
            <div><p>telephone: 012 6615370</p></div>
        </div>
      </div>
    </>
  );
}
