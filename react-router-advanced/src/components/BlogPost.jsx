import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();

  // Fetch blog post data based on the id
  const blogPost ={title:"My first blog",content:"In the “Advanced React and Authentication in React JS” project, you will delve into more sophisticated aspects of React, focusing on advanced form handling, data management, routing, and testing. This project will enhance your skills in creating robust and scalable React applications while integrating essential features such as user authentication and API interactions."}    //getBlogPostById(id);

  return (
    <div>
      <h2>{blogPost.title}</h2>
      <p>{blogPost.content}</p>
    </div>
  );
};

export default BlogPost;