import Layout from "../components/layout";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

export default function Playground() {
  return (
    <Layout pageTitle="Playground">
      <main>
        this is the playground page
        <Link href="/">
          <a>go back to home</a>
        </Link>
      </main>
    </Layout>
  );
}
