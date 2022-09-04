import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { RatingMain } from "../src/modules/rating";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend Mentor | Interactive rating component</title>
      </Head>

      <main className={styles.main}>
        <RatingMain />
      </main>
    </div>
  );
};

export default Home;
