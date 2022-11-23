import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Container from "../components/container";
import styles from "../styles/Home.module.scss";
import PostThumb from "../components/postThumb";
import { React, useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import Button from "../components/button/button";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <Layout>
      <main className={styles.main} id="main">
        <div className="polka">
          <Container>
            <div className="hero">
              <h1 className="motion-entrance">Product designer,</h1>
              <span className="motion-entrance motion-delay-200">
                <h1>
                  {prefersReducedMotion ? (
                    "design systems."
                  ) : (
                    <Typewriter
                      options={{
                        strings: [
                          "design systems.",
                          "end-to-end.",
                          "strategy.",
                          "user research.",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  )}
                </h1>
              </span>
              <p className="hero-description motion-entrance motion-delay-400">
                Brazilian-born product designer crafting systems and experiences
                in Berlin at Delivery Hero. Previously a Senior Product Designer
                at{" "}
                <a href="https://hopper.com" target="_blank">
                  Hopper
                </a>{" "}
                and{" "}
                <a href="https://quintoandar.com.br" target="_blank">
                  QuintoAndar
                </a>
                .
              </p>
              <div className="motion-entrance motion-delay-600">
                <Button
                  variant="primary"
                  link="mailto:otavioluisvidal@gmail.com"
                >
                  Reach out
                </Button>
              </div>
            </div>
            <ul>
              {allPostsData.map(({ id, date, title }) => (
                <PostThumb
                  id={id}
                  title={title}
                  link={`/work/${id}`}
                  date={date}
                />
              ))}
            </ul>
          </Container>
        </div>
      </main>
    </Layout>
  );
}
