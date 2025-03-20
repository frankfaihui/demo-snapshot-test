import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import BaseButton from "@/components/BaseButton";
import CardExample from "@/components/CardExample";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {


  return (
    <>
      <Head>
        <title>Snapshot Testing Demo</title>
        <meta name="description" content="Demo app for snapshot testing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <h1 className={styles.title}>Component Examples</h1>
          
          <section className={styles.section}>
            <h2>Button Example</h2>
            <BaseButton>Click me</BaseButton>
          </section>
          
          <section className={styles.section}>
            <h2>Card Examples</h2>
            <CardExample />
          </section>
        </main>
        <footer className={styles.footer}>
          <p>Snapshot Testing Demo Application</p>
        </footer>
      </div>
    </>
  );
}
