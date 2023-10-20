import React from "react";
import styles from "./Icon.module.css";

function Icon({ icon: Icon }) {
  return (
    <span>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
    </span>
  );
}

export default Icon;
