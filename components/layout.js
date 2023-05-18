import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "./header";
import SystemBar from "./systembar";
import Footer from "./footer";

export default function Layout({ children, pageTitle }) {
  const globalTitle = `${pageTitle ? `${pageTitle} —` : ""} Otavio Vidal`;
  const faviconVar = Math.floor(Math.random() * 9) + 1;

  return (
    <div>
      <Head>
        <title>{globalTitle}</title>
        <meta property="og:type" content="website" />
        <link rel="icon" href={`assets/favicon-${faviconVar}.ico`} />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@32,400,0,0"
        />
      </Head>
      <Header />
      <div className="page-entrance">
        {children}
        <Footer />
      </div>
    </div>
  );
}
