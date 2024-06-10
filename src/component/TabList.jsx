import { useState } from "react";

import styles from "./TabList.module.css";
import cityImg from "../assets/pictures/pic2.png";

function TabList() {
  const [activeTab, setActiveTab] = useState("Tab1");
  const content = () => {
    switch (activeTab) {
      case "Tab1":
        return (
          <div>
            <h3> First tab with soft transitioning effect.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismodbi bendum laoreet. Proin gravida dolor sit amet lacus
              accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
              Cum sociis natoque penatibus et magnis dis parturient montes.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismodbi bendum laoreet.
            </p>

            <button>Download</button>
          </div>
        );
      case "Tab2":
        return (
          <div>
            <h3> Second tab with soft transitioning effect.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismodbi bendum laoreet. Proin gravida dolor sit amet lacus
              accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
              Cum sociis natoque penatibus et magnis dis parturient montes Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismodbi bendum laoreet.
            </p>
            <button>Download</button>
          </div>
        );
      case "Tab3":
        return (
          <div>
            <h3> Third tab with soft transitioning effect.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismodbi bendum laoreet. Proin gravida dolor sit amet lacus
              accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
              Cum sociis natoque penatibus et magnis dis parturient montes Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismodbi bendum laoreet.
            </p>
            <button>Download</button>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <>
      <div className={styles.tabs}>
        <div className={styles.item1}>
          <ul>
            <li
              onClick={() => setActiveTab("Tab1")}
              className={activeTab === "Tab1" ? styles.active : ""}
            >
              Tab 1
            </li>
            <li
              onClick={() => setActiveTab("Tab2")}
              className={activeTab === "Tab2" ? styles.active : ""}
            >
              Tab 2
            </li>
            <li
              onClick={() => setActiveTab("Tab3")}
              className={activeTab === "Tab3" ? styles.active : ""}
            >
              Tab 3
            </li>
          </ul>
        </div>
        <div className={styles.item2}>{content()}</div>
        <div className={styles.item3}>
          <img src={cityImg} alt="Pic2" />
        </div>
      </div>
    </>
  );
}

export default TabList;
