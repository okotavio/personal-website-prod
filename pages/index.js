import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Container from "../components/container";
import styles from "../styles/Home.module.scss";
import PostThumb from "../components/postThumb";

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
                <h1 className="motion-entrance">Product designer,</h1>
                <h1 className="motion-entrance motion-delay-200">
                  design systems.
                </h1>
              </div>
              <p className="hero-description motion-entrance motion-delay-400">
                Brazilian-born product designer crafting systems and experiences
                in Berlin at Delivery Hero. Previously a Senior Product Designer
                at Hopper and QuintoAndar.
              </p>
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
