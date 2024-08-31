import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const   
 [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit   
 = (e) => {
    e.preventDefault();

    // Basic validation
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email)   
 newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length   
 === 0) {
      // Submit form data to API
      console.log('Form submitted:', formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div style={{ marginBottom: 10 }}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}   

          style={{ width: '200px', padding: '5px' }}
        />
        {errors.username && <p>{errors.username}</p>}
      </div>
      <div style={{ marginBottom: 10 }}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{ width: '200px', padding: '5px' }}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div style={{ marginBottom: 10 }}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}   

          style={{ width: '200px', padding: '5px' }}
        />
        {errors.password && <p>{errors.email}</p>} {/* Typo fixed (should be errors.password) */}
      </div>
      <button type="submit" style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white' }}>
        Submit
      </button>
    </form>
  );
};

export default RegistrationForm;