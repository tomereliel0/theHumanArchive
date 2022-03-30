import { useState } from "react"


function PostsGridView({ searchParam }){
  const [search,setSearchParam] = useState(searchParam)
  const getPosts = async () =>{
    //console.log("getting posts for" + searchParam)
    const api = '/api/posts/tomer'
    const response = await fetch('/api/posts/tomer',
    {
        method: 'POST', 
    })
    setPost(await response.json())

}   
  const [posts,setPost] = useState(getPosts)
    
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    return <>
      {console.log(posts)}
      {/* { posts.map((p, i) => (
            <div className="mb-3" key={i}>
              <GridItem post={p} />
            </div>
          ))}  */}
    </>

}

export default PostsGridView

// export async function getServerSideProps() {
//     console.log("Generating Grid")
//   const prisma = new PrismaClient();            //replace with api request !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//   const posts = await prisma.post.findMany();
//   return {
//     props: {
//       initialPosts: posts
//     }
//   };
// }



// <div className={styles.grid}>
// <a href="https://nextjs.org/docs" className={styles.card}>
//   <h2>Amazing! &rarr;</h2>
//   <p>Find in-depth information about Next.js features and API.</p>
// </a>

// <a href="https://nextjs.org/learn" className={styles.card}>
//   <h2>Wow! &rarr;</h2>
//   <p>Learn about Next.js in an interactive course with quizzes!</p>
// </a>

// <a
//   href="https://github.com/vercel/next.js/tree/canary/examples"
//   className={styles.card}
// >
//   <h2>Look at that! &rarr;</h2>
//   <p>Discover and deploy boilerplate example Next.js projects.</p>
// </a>

// <a
//   href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//   className={styles.card}
// >
//   <h2>Outrangeues &rarr;</h2>
//   <p>
//     Instantly deploy your Next.js site to a public URL with Vercel.
//   </p>
// </a>
// </div>