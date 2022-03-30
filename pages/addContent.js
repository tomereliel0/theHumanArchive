import { useRouter } from "next/router"
import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Home.module.css'
import AddPostForm from "./components/AddPostForm"

function AddContent(){

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    return <>
    <Head>
        <title>Search for a HUMAN!</title>
        <meta name="description" content="Search" />
        <link rel="icon" href="/favicon.ico" />
    </Head>


    <main className={styles.main}>
        <h1 className={styles.title}>
            Add some content or <a href="/search">Search for something!</a>
        </h1>
        <div>
           <AddPostForm />
        </div>
    </main>
    </>

}

export default AddContent