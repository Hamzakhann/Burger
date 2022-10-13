import { Container } from "@mui/material";
import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import styles from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <Container maxWidth="xl" disableGutters={true}>
      <div className={styles.layout_container}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </Container>
  );
};

export default Layout;
