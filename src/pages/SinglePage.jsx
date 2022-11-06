import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const SinglePage = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)

  const goBack = () => navigate(-1)
  // const goHome = () => navigate("/", {replace: true/*, state: ""*/}) // в стейт можно передать что угодно и иметь возможность прочитать это в том месте, куда перейдем

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then(data => setPost(data))
  }, [id])

  return (
    <div>
      {post && (
        <>
          <button onClick={goBack}>Go back</button>
          <Link to={"/"}>Go home</Link>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Link to={`/posts/${id}/edit`}>Edit this post</Link>
        </>
      )}
    </div>
  );
};

export default SinglePage;
