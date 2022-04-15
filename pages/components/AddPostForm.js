import { useState } from "react"
import PrivatePage from "./FileUpload.js"

function AddPostForm(){
    const [data,setData] = useState({
        date: Date().toLocaleString(),
        firstName: "",
        lastName: "",
        uid: 'null',
        content:"",
        tags:'none',
        file: ""
      })
      
      const [image, setImage] = useState(null);
      const [createObjectURL, setCreateObjectURL] = useState(null);

      const uploadToServer = async (event) => {
        const body = new FormData();
        body.append("file", image);
        const response = await fetch("http://127.0.0.1:3000/api/file", {
          method: "POST",
          body
        });
        //const resData = await response.json()
      };
    
      const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
          const i = event.target.files[0];
    
          setImage(i);
          setCreateObjectURL(URL.createObjectURL(i));
          uploadToServer()
        }
      };
    

    const submitPost = async () =>{
        //const body = new FormData();
        //data.append("file", image);
        const response = await fetch('/api/posts/addPost',
        {
            method: 'POST',
            body: JSON.stringify({data})
            
        })
        const resData = await response.json()
    } 
    return(
    <>
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
            <input placeholder="First Name" onChange={(e)=> setData({...data,firstName: e.target.value})} value={data.firstName} type='text' id='1' name='1'></input> {/*first name */}
            <input placeholder="Last Name" onChange={(e)=> setData({...data,lastName: e.target.value})} value={data.lastName} type='text' id='2' name='2'></input> {/*last name */}
            <input placeholder="Tags (can us #tag)" onChange={(e)=> setData({...data,tags: e.target.value})} value={data.tags} type='text' id='3' name='3'></input> {/*phone */}
            <input placeholder="Content - Image/Video" onChange={(e)=> setData({...data,content: e.target.value})} value={data.content} type='text' id='4' name='4'></input> {/*content line */}
            <input type="file" name="myImage" onChange={uploadToClient}/>
            <button type="submit">Post!</button>
        </form>
        
    </>)

}

export default AddPostForm