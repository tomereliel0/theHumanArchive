import { useRouter } from "next/router"
import { useState } from "react"
import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Home.module.css'
import {PrismaClient} from '@prisma/client'
import AddPostForm from '../components/AddPostForm'
import Footer from "../components/Footer"
import PostsGridView from "../components/PostsGridView"


function HumanProfile({ posts,initialHumans }){
  const [humans,setPost] = useState(initialHumans)
  const router = useRouter()
  const { searchParam } = router.query  
  
  

  return <>
  <Head>
      <title>Search results for {searchParam}</title>
      <meta name="results" content="Search" />
      <link rel="icon" href="/favicon.ico" />
  </Head>

  <main className={styles.main} >
      <h1 className={styles.title}>
          This is what we have found for <a href="https://nextjs.org">{searchParam}</a>:
      </h1>
      {<PostsGridView posts={posts}/>}
  </main>
  <Footer />
  
  </>

}

export default HumanProfile

export async function getServerSideProps(context) {
    const {params} = context
    const {searchParam} =  params
    const response = await fetch(`http://127.0.0.1:3000/api/posts/${searchParam}`,{
      method: 'POST'})
    const data = await response.json()
    return{
        props:  {
            posts:data
        }
    }
}

