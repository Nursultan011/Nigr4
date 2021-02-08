import Head from "next/head";
import styles from "../styles/Home.module.css";

import {
  Header,
  Hero,
  Partners,
  AboutUs,
  AboutProgram,
  Footer,
  Gallery,
  FAQ,
  News,
} from "../components";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <AboutProgram />
      <AboutUs />
      <News />
      <FAQ />
      <Gallery />
      <Partners />
      <Footer />
    </div>
  );
}
