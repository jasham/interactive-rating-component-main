import type { NextPage } from "next";
import Head from "next/head";
import { ShowRating } from "../src/modules/showRating";
import styles from "../styles/Home.module.css";

const ShowRatingMain: NextPage = () => {
  return (
    <div className={styles.container}>
      {/* <Head>
        <title>Frontend Mentor | Interactive rating component</title>
      </Head> */}

      <main className={styles.main}>
        <ShowRating />
      </main>
    </div>
  );
};

export default ShowRatingMain;
