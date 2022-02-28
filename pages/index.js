import Head from 'next/head'
import Home from '../components/home/Home'
import styles from '../styles/Home.module.css'

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>uzmovie</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home/>

    </div>
  )
}
