import React, {useState, useEffect, useReducer} from 'react'
import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com';
const initialState = {
    loading: true,
    error: '',
    post: {}
}

const dataReducer = (state, action) => {
    switch(action.type){
        case 'SUCCESS':
            return {loading: false, error: '', post: action.payload}
        case 'ERROR':
            return {loading: false, error: action.error, post: {}}
        default:
            initialState
    }
}

const ReducerFetch = () => {
    const [state, dispatch] = useReducer(dataReducer, initialState)

    useEffect(() => {
        axios.get(`${URL}/posts/1s`)
        .then(response => {
            dispatch({type:'SUCCESS', payload: response.data})
            console.log(response.data)
        }).catch(error =>{
            dispatch({type:'ERROR', error: error + ' - Something went wrong REDUCER!'})
        })
    }, [])

    return (
        <div className='App'>
            {state.loading ? 'loading' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default ReducerFetch
