import { useState } from "react"
import GridItem from "./GridItem"

function PostsGridView( {posts} ){
    return(
    <div >
      {posts?.map((post)=>{
        return(
          <GridItem data={post} />
       )
      })}
    </div>
  )

}

export default PostsGridView