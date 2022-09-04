import React from "react";
import { Paper } from "../../components/paper";
import styles from "../../../styles/ShowRating.module.css";
import Router from "next/router";
import Image from "next/image";

export const ShowRating = () => {
  const { router } = Router;

  return (
    <Paper>
      <div className={styles.showRatingWrapper}>
        <Image
          src="/images/illustration-thank-you.svg"
          height={90}
          width={140}
          alt="thank"
        />
        <p className={styles.capsule}>
          You selected {router?.query.id} out of 5
        </p>

        <div className={styles.thank}>
          <h2>Thank you!</h2>
          <p>
            We appritiate you taking the time to give a rating. If you ever need
            more support, don&apos;t hesitate to get in touch.
          </p>
        </div>
      </div>
    </Paper>
  );
};
