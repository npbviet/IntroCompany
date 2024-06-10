import { useState } from "react";

import styles from "./Standard.module.css";
import cityImg4 from "../assets/pictures/pic4.jpg";

function Standard() {
  return (
    <>
      <div className={styles.standard}>
        <div className={styles.standard1}>
          <h4>Standard Picture</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet.
          </p>
          <p>
            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </div>
        <div className={styles.standard2}>
          <img src={cityImg4} alt="Pic" />
        </div>
      </div>
    </>
  );
}

export default Standard;
