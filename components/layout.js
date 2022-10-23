import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import styles from "../styles/Home.module.css";

export default function Layout({ children, pageTitle }) {
  const [faviconVar, setFaviconVar] = useState(
    Math.floor(Math.random() * 3) + 1
  );

  useEffect(() => {
    if (faviconVar === 3) {
      setFaviconVar(Math.floor(Math.random() * 2) + 1);
    } else {
      setFaviconVar(faviconVar + 1);
    }
  }, []);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:type" content="website" />
        <link rel="icon" href={`favicon-${faviconVar}.ico`} />
      </Head>

      <Header />
      {children}
      <Footer />
    </>
  );
}
