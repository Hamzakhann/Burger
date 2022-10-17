import React from "react";
import styles from "./Textarea.module.scss";

const Textarea = ({ ...rest }) => {
  return (
    <div className={styles.text_area_container}>
      <textarea rows={6} {...rest} />
    </div>
  );
};

export default Textarea;
