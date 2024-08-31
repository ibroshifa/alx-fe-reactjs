import React from 'react';
import { useQuery } from 'react-query';
const PostsComponent = () => {
    const { isLoading, error, data , refetch } = useQuery('posts', async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      return response.json();
    });
  
    if (isLoading) return <p>Loading posts...</p>;
  
    if (error) return <p>Error: {error.message}</p>;
  
    return (
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
        <button onClick={refetch}>Refetch Posts</button>
      </ul>
    );
  };
  
  export default PostsComponent;