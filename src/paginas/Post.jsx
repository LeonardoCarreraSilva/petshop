import React, { useEffect, useState } from 'react';
import { buscar } from '../api/api';
import { useParams } from 'react-router';
import '../assets/css/post.css'
import { useHistory } from 'react-router-dom';

const Post = () =>{
  const history = useHistory()
  const {id} = useParams()
  const [post, setPost] = useState({})
  useEffect(() =>{
    buscar(`/posts/${id}`, setPost).catch(() =>{
      history.push('/404')
    })
    
  }, [id])
  return(
    <main className="container flex flex--centro">
      <article className="cartao post">
        <h2 className="cartao__titulo">{post.title}</h2>
        <p className= "cartao__texto">{post.body}</p>
      </article>

    </main>
  )
}

export default Post