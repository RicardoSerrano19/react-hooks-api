import React, {useState, useEffect} from 'react'
import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com';

const ReducerFetch = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState({})

    useEffect(() => {
        axios.get(`${URL}/posts/dasd`)
        .then(response => {
            setLoading(false)
            setPost(response.data)
            setError('')
        }).catch(error =>{
            setLoading(false)
            setPost({})
            setError('Something went wrong!')
            console.log(error)
        })
    }, [])

    return (
        <div className='App'>
            {loading ? 'loading' : post.title}
            {error ? error : null}
        </div>
    )
}

export default ReducerFetch
