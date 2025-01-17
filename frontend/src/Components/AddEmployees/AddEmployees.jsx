import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; 
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

      
      Swal.fire({
        title: 'Success!',
        text: 'User added successfully!',
        icon: 'success',
        confirmButtonText: 'Okay'
      });

      console.log('User added:', response.data);
    } catch (error) {
     
      Swal.fire({
        title: 'Error!',
        text: 'Error adding user!',
        icon: 'error',
        confirmButtonText: 'Try Again'
      });

      console.error('Error adding user:', error);
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
