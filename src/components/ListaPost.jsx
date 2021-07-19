import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { buscar } from "../api/api";

const ListaPost = ({ url }) => {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    buscar(url, setPost);
  }, [url]);

  return (
    <section className="posts container">
      {posts.map((post) => (
        <Link
          className={`cartao-post cartao-post--${post.categoria}`}
          to={`/posts/${post.id}`}
        >
          <article key={post.id}>
            <h3 className="cartao-post__titulo">{post.title}</h3>
            <p className="cartao-post__meta">{post.metadescription}</p>
          </article>
        </Link>
      ))}
    </section>
  );
};

export default ListaPost;
