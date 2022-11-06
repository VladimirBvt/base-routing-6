import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";

const BlogPage = () => {
  const [posts, setPosts] = useState([])
  console.log(useLocation()) //
  // {
  // hash: "",              // хэш
  // key: "ve1l92tq",       // уникальный ключ этой страницы
  // pathname: "/posts",    // полный путь
  // search: "",            // get параметры, например /posts?x=1
  // state: null,           // любые данные, которые можно передавать при навигации куда-либо
  // }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then(data => setPosts(data))
    }, [])

  return (
    <div>
      <h1>Our news</h1>
      <Link to="/posts/new">Add new post</Link> {/* Переход на приватный роут */}
      {
        posts.map((post) => (
          <Link to={`/posts/${post.id}`} key={post.id}>
            <li>{post.title}</li>
          </Link>
        ))
      }
    </div>
  );
};

export default BlogPage;
