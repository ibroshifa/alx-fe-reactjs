import { useState } from 'react';
import { fetchUsersData } from '../services/githubService';
import SearchBar from './SearchBar';
const Search = () => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);
  const [users, setUsers] = useState([]);
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');

  const handleSubmit = async (e) => {
   e.preventDefault();
    setLoading(true);
    setError(null);
    setUsers([]);

    try {
    //   const data = await fetchUserData(username);
    //   setUserData(data);
    const data = await fetchUsersData({ username, location, minRepos });
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form> */}
      {/* <SearchBar onSearch={handleSubmit} /> */}

      <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-md mx-auto">
      <div>
        <label className="block text-sm font-medium">GitHub Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 w-full"
          placeholder="Enter GitHub username"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 w-full"
          placeholder="Enter location"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Minimum Repositories</label>
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 w-full"
          placeholder="Min repos count"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Search
      </button>
    </form>

      {loading && <p>Loading...</p>}
      {/* "Looks like we cant find the user" */}
      {error && <p>Looks like we cant find the user</p>}
      {/* "login" */}
      {users.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {users.map((user) => (
            <div key={user.id} className="border p-4 rounded">
              <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
              <h3 className="text-lg font-bold">{user.login}</h3>
              <p>{user.location}</p>
              <p>Public Repositories: {user.public_repos}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
      {/* {userData && (
        <div>
          <img src={userData.avatar_url} alt={userData.name} width="100" />
          <h3>{userData.name}</h3>
          <p>{userData.bio}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
          View Profile
          </a>
        </div>
      )} */}
    </>
  );
};

export default Search;
