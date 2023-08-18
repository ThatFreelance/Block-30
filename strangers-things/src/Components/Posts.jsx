import { useState, useEffect } from "react"
import API_URL from "../API"
//import MessagesForm from "./MessageForm.jsx"

function Posts() {
    const [data, setData] = useState([])
    useEffect(()=>{
        const fetchPosts = async () => {
            try {
              const response = await fetch(`${API_URL}/posts`)
          
              const result = await response.json();
              setData(result.data.posts)
              console.log(result);
              return result
            } catch (error) {
              console.error(error);
            }
          }
          fetchPosts();
    },[])

  return (
    <>
    <div>
        <h1>Posts</h1>
        {data.map((post)=>(
            <div key={post.id} className="postsSection">
                <h2>{post.title}</h2>
                <h2>{post.author.username}</h2>
                <h2>{post.price}</h2>
                <h2>{post.location}</h2>
                <p>{post.description}</p>
            </div>
        ))}
    </div>
    </>
  )
}

export default Posts