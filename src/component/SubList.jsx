import { useState } from "react";

import styles from "./SubList.module.css";
import cityImg3 from "../assets/pictures/pic3.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SubList() {
  return (
    <>
      <div className={styles.sub}>
        <div className={styles.sub1}>
          <img src={cityImg3} alt="Pic3" />
        </div>
        <div className={styles.sub2}>
          <div>
            <h4>Sublist section</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className={styles.sub3}>
            <div>
              <FontAwesomeIcon
                className={styles.icon}
                icon="fa-solid fa-cloud-arrow-down"
              />
            </div>
            <div>
              <h5>Title</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet.
              </p>
            </div>
          </div>
          <div className={styles.sub3}>
            <div>
              <FontAwesomeIcon
                className={styles.icon}
                icon="fa-solid fa-cloud-arrow-up"
              />
            </div>
            <div>
              <h5>Title</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubList;
