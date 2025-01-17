import React, { useState } from 'react';
import axios from 'axios';
import './AddEmployees.css'; 

function AddEmployees() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    age: '',
    address: '',
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const response = await axios.post('http://localhost:5000/employees', userData);
      
      
      console.log('User added:', response.data);
      alert('User added successfully!');
    } catch (error) {
  
      console.error('Error adding user:', error);
      alert('Error adding user!');
    }
  };

  return (
    <div className="add-employee-container">
      <h2>Add New Employees</h2>
      <form onSubmit={handleSubmit} className="add-employee-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={userData.age}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={userData.address}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Add User</button>
      </form>
    </div>
  );
}

export default AddEmployees;
