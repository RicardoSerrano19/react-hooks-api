import React, {useState, useEffect} from 'react'
import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com';

export default function EffectDataFetching() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        console.log('- DataFetch: useEffect (function, [])')
        axios.get(`${URL}/posts`)
            .then(res => {
                setPosts(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className='App'>
            {posts.map(post => (
                <div className="post row" key={post.id}>
                    <div className="user">
                        <div className="avatar">{post.userId}</div>
                    </div>
                    <div className="content">
                        <div className="title">{post.title}</div>
                        <div className="body">{post.body}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}
