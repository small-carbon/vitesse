import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Next.js!
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}

export default Home;