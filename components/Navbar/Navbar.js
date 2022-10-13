import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { PrimaryButton } from "../Buttons/Buttons";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_img_container}>
        <Image
          src="/images/logo.png"
          alt="navbar logo"
          width={100}
          height={100}
          objectFit="contain"
        />
      </div>
      <div className={styles.navbar_links_container}>
        <Typography variant="body1">Home</Typography>
        <Typography variant="body1">About Us</Typography>
        <Typography variant="body1">Menu</Typography>
        <Typography variant="body1">Pages</Typography>
        <Typography variant="body1">Contact Us</Typography>
        <div className={styles.btn_container}>
          <PrimaryButton>Shop Online</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
