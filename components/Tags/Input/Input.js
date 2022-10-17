import React from "react";
import styles from "./Input.module.scss";

const Input = ({ ...rest }) => {
  return (
    <div className={styles.input}>
      <input {...rest} />
    </div>
  );
};

export default Input;
