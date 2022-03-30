import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Search from './search'
import Link from 'next/link'
import Footer from "./components/Footer"


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Search />
      </main>
      <Footer />
    </div>
  )
}
