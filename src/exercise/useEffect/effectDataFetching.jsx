import React, {useState, useEffect} from 'react'
import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com';

export default function EffectDataFetching() {
    const [posts, setPosts] = useState({});
    const [id, setId] = useState(1);
    const [idFromBtn, setIdFromBtn] = useState(1);

    useEffect(() => {
        console.log('- DataFetch: useEffect (function, [idFromBtn])')
        axios.get(`${URL}/posts/${idFromBtn}`)
            .then(res => {
                setPosts(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [idFromBtn])


    const onChangeId = (e) => {
        const id = e.target.value;
        setId(id);
    }

    const handleClick = () => {
        setIdFromBtn(id);
    }

    return (
        <div className='App'>
            <input type="text" value={id} onChange={onChangeId}/>
            <button onClick={handleClick}>Search</button>
            <div className="post row" key={posts.id}>
                <div className="user">
                    <div className="avatar">{posts.userId}</div>
                </div>
                <div className="content">
                    <div className="title">{posts.title}</div>
                    <div className="body">{posts.body}</div>
                </div>
            </div>
            {/*posts.map(post => (
                <div className="post row" key={post.id}>
                    <div className="user">
                        <div className="avatar">{post.userId}</div>
                    </div>
                    <div className="content">
                        <div className="title">{post.title}</div>
                        <div className="body">{post.body}</div>
                    </div>
                </div>
            ))*/}
        </div>
    )
}
