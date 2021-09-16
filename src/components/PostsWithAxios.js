import React, { useState, useEffect } from 'react'
import '../App.css';
import axios from 'axios'

function PostsWithAxios() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const axiosPosts = async () => {
            const response = await axios('https://jsonplaceholder.typicode.com/posts');
            setPosts(response.data);
        };
        axiosPosts();
    }, []);

    const useaxiosPosts = posts.map((post) => {
        return <div>
            <h3>{post.id}</h3>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
        </div>
    })

    return (
        <>
            <h1 className='h1'>Axios With UseState and UseEffect</h1>
            <h2 className='h1'>Dummy API - https://jsonplaceholder.typicode.com/posts</h2>
            <div className="axioscontainer">
                {posts && useaxiosPosts}
            </div>
        </>
    );
}

export default PostsWithAxios;