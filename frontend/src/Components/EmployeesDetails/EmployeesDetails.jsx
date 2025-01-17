import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EmployeesDetails.css';

function EmployeesDetails() {
  const [employees, setEmployees] = useState([]);
  const [editEmployee, setEditEmployee] = useState(null);
  const [updateData, setUpdateData] = useState({
    name: '',
    email: '',
    age: '',
    address: ''
  });

 
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:5000/employees');
        setEmployees(response.data.employees);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };
    fetchEmployees();
  }, []);

 
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/employees/${id}`);
      setEmployees(employees.filter(employee => employee._id !== id)); 
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const handleEdit = (employee) => {
    setEditEmployee(employee);
    setUpdateData({
      name: employee.name,
      email: employee.email,
      age: employee.age,
      address: employee.address
    });
  };

 
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5000/employees/${editEmployee._id}`,
        updateData
      );
      setEmployees(employees.map(emp => (emp._id === editEmployee._id ? response.data.employees : emp)));
      setEditEmployee(null); 
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  return (
    <div className="employees-details-container">
      <h2>Employees Details</h2>

      {editEmployee ? (
        <form onSubmit={handleUpdate} className="edit-form">
          <h3>Edit Employee</h3>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={updateData.name}
              onChange={(e) => setUpdateData({ ...updateData, name: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={updateData.email}
              onChange={(e) => setUpdateData({ ...updateData, email: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              value={updateData.age}
              onChange={(e) => setUpdateData({ ...updateData, age: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              value={updateData.address}
              onChange={(e) => setUpdateData({ ...updateData, address: e.target.value })}
              required
            />
          </div>
          <button type="submit" className="submit-btn">Update Employee</button>
        </form>
      ) : (
        <div className="employee-list">
          {employees.length > 0 ? (
            <ul>
              {employees.map((employee) => (
                <li key={employee._id} className="employee-item">
                  <div className="employee-info">
                    <p>Name: {employee.name}</p>
                    <p>Email: {employee.email}</p>
                    <p>Age: {employee.age}</p>
                    <p>Address: {employee.address}</p>
                  </div>
                  <button onClick={() => handleEdit(employee)} className="edit-btn">Edit</button>
                  <button onClick={() => handleDelete(employee._id)} className="delete-btn">Delete</button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No employees available.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default EmployeesDetails;
