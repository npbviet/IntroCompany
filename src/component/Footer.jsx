import { useState } from "react";

import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div>
          <FontAwesomeIcon
            className={styles.icon}
            icon="fa-brands fa-facebook-f"
          />

          <FontAwesomeIcon
            className={styles.icon}
            icon="fa-brands fa-twitter"
          />
          <FontAwesomeIcon className={styles.icon} icon="fa-brands fa-google" />
          <FontAwesomeIcon
            className={styles.icon}
            icon="fa-brands fa-pinterest"
          />
          <FontAwesomeIcon
            className={styles.icon}
            icon="fa-brands fa-instagram"
          />
          <FontAwesomeIcon className={styles.icon} icon="fa-solid fa-rss" />
        </div>
        <footer>© Axure Themes 2021</footer>
      </div>
    </>
  );
}

export default Footer;
