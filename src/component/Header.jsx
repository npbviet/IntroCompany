import { useState } from "react";
import backgroundImage from "../assets/pictures/pic1.jpg";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <div className={styles.header}>
        <img src={backgroundImage} alt="Pic1" />
        <div className={styles.container}>
          <div className={styles.description}>
            <h1>
              AX<span>IT</span>
            </h1>
            <div className={styles.subText}>
              MODERN AXURE TEMPLATE FOR BEAUTIFUL PROTOTYPES
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet. Proin gravida dolor sit amet lacus
              accumsan et viverra justo commodo.
            </p>
            <button>Download</button>
          </div>
          <div className={styles.submitForm}>
            <form>
              <h3>
                Try Your <span>FREE</span> Trial Today
              </h3>
              <input
                className={styles.formControl}
                type="text"
                placeholder="Name"
                name="username "
              />
              <input
                className={styles.formControl}
                type="text"
                placeholder="Email"
                name="email"
              />
              <input
                className={styles.formControl}
                type="text"
                placeholder="Password"
                name="password"
              />
              <button type="submit">Get Started</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
