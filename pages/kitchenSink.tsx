import type { NextPage } from "next";
import React from "react";
import { Button } from "../src/components/button";
import { Paper } from "../src/components/paper";
// import { Rating } from "../src/components/rating";
import { Star } from "../src/components/star";
import styles from "../styles/KitchenSink.module.css";

const Home: NextPage = () => {
  const onSelectRadio = (id: number) => {
    console.log("Here is event", id);
  };

  const onClickButton = () => {
    console.log("Clicked");
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Here you will found list of components used in this project</h1>
        <section id="paper">
          <h2>This section shows paper component.</h2>
          <Paper>
            <p>This is paper component</p>
          </Paper>
        </section>
        <section id="rating">
          <h2>This section shows rating component.</h2>
          <Rating onSelectRadio={onSelectRadio} />
        </section>
        <section id="rating">
          <h2>This section shows button component.</h2>
          <Button onClickButton={onClickButton} />
        </section>
        <section id="rating">
          <h2>This section shows star component.</h2>
          <Star />
        </section>
      </main>
    </div>
  );
};

export default Home;
