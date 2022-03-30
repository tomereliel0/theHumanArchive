import { useState } from "react"


function AddPostForm(){
    const [data,setData] = useState({
        date: Date().toLocaleString(),
        firstName: "",
        lastName: "",
        uid: 'null',
        content:"",
        tags:'none',
      })

    const submitPost = async () =>{
        
        const response = await fetch('/api/posts/addPost',
        {
            method: 'POST',
            body: JSON.stringify({data})
            
        })
        //console.log("1. submmited \n 2. data is:")
        //console.log(data)
        const resData = await response.json()
        //console.log(resData)
    } 

    return<>
    <form onSubmit={
        async (e)=>{
            try{
              await setData
              submitPost()
              e.target.reset()
            } catch {
             console.log(e)
            }
    }}
    method='post'    >
    <input onChange={(e)=> setData({...data,firstName: e.target.value})} value={data.firstName} type='text' id='1' name='1'></input> {/*first name */}
    <input onChange={(e)=> setData({...data,lastName: e.target.value})} value={data.lastName} type='text' id='2' name='2'></input> {/*last name */}
    <input onChange={(e)=> setData({...data,tags: e.target.value})} value={data.tags} type='text' id='3' name='3'></input> {/*phone */}
    <input onChange={(e)=> setData({...data,content: e.target.value})} value={data.content} type='text' id='4' name='4'></input> {/*content line */}
    <button type="submit">Send</button>
    </form>
    </>

}

export default AddPostForm