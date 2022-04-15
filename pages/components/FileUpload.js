import { useState } from "react"


export default function PrivatePage(props) {
    const [image, setImage] = useState(null);
    const [createObjectURL, setCreateObjectURL] = useState(null);
  
    const uploadToClient = (event) => {
      if (event.target.files && event.target.files[0]) {
        const i = event.target.files[0];
  
        setImage(i);
        setCreateObjectURL(URL.createObjectURL(i));
        console.log(createObjectURL)
      }
    };
  
    const uploadToServer = async (event) => {
    console.log(image)
      const body = new FormData();
      body.append("file", image);
      const response = await fetch("http://127.0.0.1:3000/api/file", {
        method: "POST",
        body
      });
      const resData = await response.json()
    };
  
    return (
      <div>
        <div>
          <img src={createObjectURL} />
          <h4>Select Image</h4>
          <input type="file" name="myImage" onChange={uploadToClient} />
          <button
            className="btn btn-primary"
            type="submit"
            onClick={uploadToServer}
          >
            Send to server
          </button>
        </div>
      </div>
    );
  }