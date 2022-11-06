import Layout from "../components/layout";
import Link from "next/link";
import Image from "next/image";
import AnimatedLogo from "../components/animatedlogo";
import { useState, useEffect } from "react";
import Container from "../components/container";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <Container>
          <div className="hero">
            <div className="title">
              <h1>Product,</h1>
              <h1>Systems,</h1>
              <h1 className="last-name">Designer.</h1>
            </div>
            <p className="hero-description">
              Brazilian-born product designer crafting systems and experiences
              in Berlin, Germany. Previously a Senior Product Designer at
              Hopper, Delivery Hero and QuintoAndar.
            </p>
          </div>
        </Container>
      </main>
    </Layout>
  );
}
