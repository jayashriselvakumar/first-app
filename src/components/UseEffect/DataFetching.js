import axios from 'axios'
import React, { useEffect, useState } from 'react'
const DataFetching = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                setPosts(response.data)
            })
            .catch(error => {
                console.log(error.message)
            })
    },[])
    return (
       <div>
        <ul>
            {posts.map(post=><li key={post.id}>{post.title}</li>)}
        </ul>
       </div> 
    )
}
export default DataFetching