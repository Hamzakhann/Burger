import { Divider as MuiDivider } from "@mui/material";
import React from "react";
import styles from "./Divider.module.scss";

const Divider = ({ width }) => {
  return (
    <div className={styles.divider} style={{ maxWidth: width }}>
      <MuiDivider />
    </div>
  );
};

export default Divider;
