import { useState } from "react";

import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <>
      <div className={styles.navbar}>
        <a className={styles["navbar-brand"]} href="#">
          Ax<span>it</span>
        </a>
        <ul>
          <li>
            <a href="#" className={styles.active}>
              Features
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Reviews</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
