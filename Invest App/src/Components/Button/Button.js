import React from "react";
import styles from "./Button.module.css";

const Button = ({ onResetInput }) => {
  return (
    <p className={styles.actions}>
      <button type="reset" className={styles.buttonAlt} onClick={onResetInput}>
        Reset
      </button>
      <button type="submit" className={styles.button}>
        Calculate
      </button>
    </p>
  );
};

export default Button;
