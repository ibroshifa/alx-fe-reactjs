import React from 'react';

const ProfileSettings = () => {
  return (
    <div>
      <h2>Profile Settings</h2>
      <p> update profile information.</p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email"   
 id="email" name="email" />
        <br   
 />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default ProfileSettings;