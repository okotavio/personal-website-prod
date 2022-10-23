import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import styles from "../styles/Home.module.css";

export default function Layout({ children, pageTitle }) {
  const faviconVar = Math.floor(Math.random() * 3) + 1;
  return (
    <>
      <Head>
        <title>
          {pageTitle} {pageTitle ? "—" : ""} Otávio ✦ Product Designer
        </title>
        <meta property="og:type" content="website" />
        <link rel="icon" href={`favicon-${faviconVar}.ico`} />
      </Head>

      <Header />
      {children}
      <Footer />
    </>
  );
}
