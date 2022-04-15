import { useRouter } from "next/router"
import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Home.module.css'
import Footer from "../components/Footer"

function Search(){
    const router = useRouter()
    const search = () =>
    {
        const searchParam = document.querySelector('#searchParam').value
        router.push('/search/'+searchParam)
    }
    

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    return <>
    <Head>
        <title>Search for a HUMAN!</title>
        <meta name="description" content="Search" />
        <link rel="icon" href="/favicon.ico" />
    </Head>


    <main className={styles.main}>
        <h1 className={styles.title}>
            Search for a <a href="/search">HUMAN!</a>
        </h1>
        <div>
            <input type="text" id="searchParam" name="searchParam"></input>
            <button onClick={search}>Search</button>
        </div>
    </main>
    </>

}

export default Search