import axios from 'axios'
import React, { useEffect, useState } from 'react'
const DataFetchingWithId = () => {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                setPost(res.data)
            })
            .catch(error => {
                console.log(error.message)
                setPost({title:'Request failed with status code 404'})
            })
    },[id])
    return (
        <div>
            <input type="text" value={id} onChange={e=>setId(e.target.value)} />
            <div>{post.title}</div>
        </div>
    )
}
export default DataFetchingWithId