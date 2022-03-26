import { useRouter } from "next/router"
import { useState } from "react"
import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Home.module.css'
import {PrismaClient,Human,Prisma} from '@prisma/client'

const prisma = new PrismaClient();

function HumanProfile({ initialHumans }){
  const [humans] = useState(initialHumans)
  const router = useRouter()
  const { searchParam } = router.query
  return <>
  <Head>
      <title>Search results for {searchParam}</title>
      <meta name="results" content="Search" />
      <link rel="icon" href="/favicon.ico" />
  </Head>


  <main className={styles.main}>
    <p>{console.log(humans[0].firstName)} </p>
    <p>{console.log(JSON.stringify(humans[0]))} </p>
    <p>{(JSON.stringify(humans[0]))} </p>
      <h1 className={styles.title}>
          This is what we have found for <a href="https://nextjs.org">{searchParam}</a>:
      </h1>
      <getServerSideProps></getServerSideProps>
      <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Amazing! &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Wow! &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Look at that! &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Outrangeues &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
  </main>
  
  </>

}

export default HumanProfile

export async function getServerSideProps() {
  const humans = await prisma.human.findMany()
  return {
    props:{
      initialHumans: humans
    }
  }

}