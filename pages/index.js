import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Container from "../components/container";
import styles from "../styles/Home.module.scss";
import PostThumb from "../components/postThumb";
import { React, useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import Button from "../components/button/button";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import AnimatedLogo from "../components/animatedlogo";
import Logo from "../components/logo";
import Link from "next/link";
import NavItem from "../components/navitem";
import IconButton from "../components/iconbutton/iconbutton";
import Modal from "../components/modal/modal";

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
  const [showModal, setShowModal] = useState(true);
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Layout>
      {showModal && (
        <Modal onClose={closeModal}>
        <h3>This is an older version of my portfolio</h3>
        <p>I&apos;m currently redesigning it so the projects here don&apos;t reflect my most recent work.</p>
        <p>You can reach out to me <a href="https://linkedin.com/in/otaviovidal" target="_blank" rel="noreferrer">on LinkedIn</a> and I can share a private deck with updated projects.</p>
        </Modal>
      )}
      <Container>
        <div className="hero">
          <h1>Otávio Vidal</h1>
          <p>
            Product designer building systematic and accessible experiences.
            <br />
            Constantly experimenting with the geekiest details of user
            interfaces.
            <br /> Currently working on a multi-brand design system at Delivery
            Hero.
          </p>
        </div>
      </Container>

      <main className="content" id="main">
        <div className="section">
          <div className="section-title">
            <Container>
              <h2>Selected work</h2>
            </Container>
          </div>
          <Container>
            <ul className="feed-list">
              {allPostsData.map(({ id, date, image, title, description }) => (
                <PostThumb
                  id={id}
                  key={id}
                  title={title}
                  description={description}
                  link={`/work/${id}`}
                  date={date}
                  image={image}
                />
              ))}
            </ul>
          </Container>
        </div>

        <div className="section">
          <div className="section-title">
            <Container>
              <h2>Experience</h2>
            </Container>
          </div>
          <Container>
            <div className="section-body">
              <p>
                I&apos;ve been designing products at fast-paced startups since
                2018. After working on different business domains, from
                conversion to scalability, I started specializing in design
                systems.
              </p>

              <div className="experience-list">
                <div className="experience-item">
                  <a
                    href="https://deliveryhero.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="experience-time">2022-present</div>
                    <div className="experience-role">
                      Senior Product Designer, Design Systems
                    </div>
                    <div className="experience-company">Delivery Hero</div>
                    <div className="experience-indicator">↗</div>
                  </a>
                </div>
                <div className="experience-item">
                  <a
                    href="https://hopper.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="experience-time">2021-22</div>
                    <div className="experience-role">
                      Senior Product Designer
                    </div>
                    <div className="experience-company">Hopper</div>
                    <div className="experience-indicator">↗</div>
                  </a>
                </div>
                <div className="experience-item">
                  <a
                    href="https://quintoandar.com.br"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="experience-time">2018-21</div>
                    <div className="experience-role">
                      Senior Product Designer, Design Systems
                    </div>
                    <div className="experience-company">QuintoAndar</div>
                    <div className="experience-indicator">↗</div>
                  </a>
                </div>
              </div>
              <Button
                link="https://drive.google.com/file/d/1_nsprB3PGrtYcXfJrhbidR1VktYhjVvz/view"
                newWindow
              >
                Download resume
              </Button>
            </div>
          </Container>
        </div>
      </main>
    </Layout>
  );
}
