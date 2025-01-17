import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import HomePage from './Components/HomePage/HomePage';
import AddEmployees from './Components/AddEmployees/AddEmployees';
import EmployeesDetails from './Components/EmployeesDetails/EmployeesDetails';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
     
   <Navbar/>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AddEmployees" element={<AddEmployees/>} />
        <Route path="/EmployeesDetails" element={<EmployeesDetails/>}/>
        </Routes>
      </BrowserRouter>
  <Footer/>
  
    </div>
  );
}

export default App;
