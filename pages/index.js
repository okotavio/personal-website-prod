import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";

import Link from "next/link";
import Image from "next/image";
import AnimatedLogo from "../components/animatedlogo";
import { useState, useEffect } from "react";
import Container from "../components/container";
import styles from "../styles/Home.module.scss";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <main className={styles.main}>
        <Container>
          <div className="hero">
            <div className="title">
              <h1 className="motion-entrance">Product,</h1>
              <h1 className="motion-entrance motion-delay-100">Systems,</h1>
              <h1 className="italic-accent motion-entrance motion-delay-200">
                Designer.
              </h1>
            </div>
            <p className="hero-description motion-entrance motion-delay-300">
              Brazilian-born product designer crafting systems and experiences
              in Berlin. Previously a Senior Product Designer at Hopper,
              Delivery Hero and QuintoAndar.
            </p>
          </div>
        </Container>
      </main>

      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            {title}
            <br />
            {id}
            <br />
            {date}
          </li>
        ))}
      </ul>
    </Layout>
  );
}
