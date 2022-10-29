import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children, pageTitle }) {
  const faviconVar = Math.floor(Math.random() * 3) + 1;

  const globalTitle = `${pageTitle ? `${pageTitle} —` : ""} Otavio Vidal`;

  return (
    <>
      <Head>
        <title>{globalTitle}</title>
        <meta property="og:type" content="website" />
        <link rel="icon" href={`favicon-${faviconVar}.ico`} />
      </Head>

      <div className="header-container">
        <Header />
      </div>
      <div className="content-entrance">
        {children} <Footer />
      </div>
    </>
  );
}
