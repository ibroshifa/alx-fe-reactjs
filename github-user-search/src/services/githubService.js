import axios from 'axios';

// const GITHUB_API_KEY =  environmentVariable.env.REACT_APP_GITHUB_API_KEY;
const API_URL = 'https://api.github.com/search/users';

export const fetchUserData = async (username) => {
    try {
      const response = await axios.get(`${API_URL}${username}`);
      return response.data;
    } catch (error) {
      throw new Error('User not found');
    }
  };
  export const fetchUsersData = async ({ username, location, minRepos }) => {
    let query = `${username}`;
    
    if (location) {
      query += `+location:${location}`;
    }
    
    if (minRepos) {
      query += `+repos:>${minRepos}`;
    }



    try {
      const response = await axios.get(`${API_URL}?q=${query}`);
      
      return response.data.items;
    } catch (error) {
      throw new Error('No users found with these criteria');
    }
  };