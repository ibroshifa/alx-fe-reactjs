import React from 'react';
import { useQuery } from 'react-query';
const PostsComponent = () => {
    const { isLoading, isError, data , fetchPosts } = useQuery('posts', async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        return response.json();
      }, {
        cacheTime: 10000, 
        staleTime: Infinity, 
        refetchOnWindowFocus: true, 
        keepPreviousData: true, 
      });
  
    if (isLoading) return <p>Loading posts...</p>;
  
    if (isError) return <p>Error: error fetching data</p>;
  
    return (
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
        <button onClick={fetchPosts}>Refetch Posts</button>
      </ul>
    );
  };
  
  export default PostsComponent;