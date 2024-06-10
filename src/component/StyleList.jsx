import { useState } from "react";

import styles from "./StyleList.module.css";
import cityImg5 from "../assets/pictures/pic5.jpg";

function StyleList() {
  return (
    <>
      <div className={styles.styleList}>
        <img src={cityImg5} alt="Pic" />
        <div className={styles.styleList1}>
          <h2>Stylish Axure Design</h2>
          <p>
            Use the sections you need, remove the ones you don't. Create
            gorgeous prototypes faster than ever!.
          </p>
          <button>Download</button>
        </div>
      </div>
    </>
  );
}

export default StyleList;
