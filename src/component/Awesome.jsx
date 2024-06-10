import { useState } from "react";

import styles from "./Awesome.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Awesome() {
  return (
    <>
      <div className={styles.awesome}>
        <h2>Why This is Awesome</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className={styles.cards}>
          <div className={styles.card1}>
            <FontAwesomeIcon
              className={styles.icon}
              icon="fa-regular fa-lightbulb"
            />
            <h3>Thoughtful Design</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet. Proin gravida dolor sit amet lacus
              accumsan et viverra.
            </p>
          </div>
          <div className={styles.card2}>
            <FontAwesomeIcon
              className={styles.icon}
              icon="fa-regular fa-keyboard"
            />
            <h3>Well Crafted</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet. Proin gravida dolor sit amet lacus
              accumsan et viverra.
            </p>
          </div>
          <div className={styles.card3}>
            <FontAwesomeIcon
              className={styles.icon}
              icon="fa-solid fa-bolt-lightning"
            />
            <h3>Easy To Customize</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet. Proin gravida dolor sit amet lacus
              accumsan et viverra.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Awesome;
