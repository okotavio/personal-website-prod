import Layout from "../components/layout";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

export default function About() {
  return (
    <Layout pageTitle="About me">
      <main>
        this is the about me page
        <Link href="/">go back to home</Link>
      </main>
    </Layout>
  );
}
