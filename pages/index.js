import Layout from "../components/layout";
import Link from "next/link";
import Image from "next/image";
import AnimatedLogo from "../components/animatedlogo";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout pageTitle="This is the homepage">
      <div className={styles.container}>
        <main className={styles.main}>
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </main>
      </div>
    </Layout>
  );
}
