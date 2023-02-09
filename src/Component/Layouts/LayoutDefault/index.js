import clsx from "clsx";
import React from "react";
import { Container, Row } from "react-bootstrap";

import Header from "@/Component/Layouts/Component/Header";
import Footer from "../Component/Footer";

import styles from "./LayoutDefault.module.scss";

function LayoutDefault({ children }) {
  return (
    <>
      <div className={clsx(styles.headerDefault)}>
        <Header />
      </div>
      {children}
      <div className={clsx(styles.footerDefault)}>
        <Footer />
      </div>
    </>
  );
}

export default LayoutDefault;
