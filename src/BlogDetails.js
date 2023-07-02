import { useHistory, useParams} from "react-router-dom";
import useFetch from "./useFetch.js";

const BlogDetails = () => {
  const { id } = useParams();
  const { Data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  const History=useHistory();

  const handleDelete = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      History.push('/');
    }) 
  }

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div> failed </div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          <button onClick={handleDelete}>delete</button>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;