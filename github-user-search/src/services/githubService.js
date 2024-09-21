import axios from 'axios';
const GITHUB_API_KEY = process.env.REACT_APP_GITHUB_API_KEY;
const API_URL = 'https://api.github.com/users/';

export const fetchUserData = async (username) => {
    try {
      const response = await axios.get(`${API_URL}${username}`);
      return response.data;
    } catch (error) {
      throw new Error('User not found');
    }
  };
