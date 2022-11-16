import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
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
      <main className={styles.main} id="main">
        <div className="polka">
          <Container>
            <div className="hero">
              <div className="title">
                <h1 className="motion-entrance">
                  Product designer, design systems.
                </h1>
              </div>
              <p className="hero-description motion-entrance motion-delay-200">
                Brazilian-born product designer crafting systems and experiences
                in Berlin at Delivery Hero. Previously a Senior Product Designer
                at Hopper and QuintoAndar.
              </p>
            </div>
            <ul>
              {allPostsData.map(({ id, date, title }) => (
                <li key={id}>
                  <Link href={`/work/${id}`}>{title}</Link>
                  <br />
                  <small>
                    <Date dateString={date} />
                  </small>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      </main>
    </Layout>
  );
}
