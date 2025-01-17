const Employees = require("../Model/employeeModel");

// Get all employees
const getAllEmployees = async (req, res, next) => {
    let employees;
    try {
        employees = await Employees.find();
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Unable to retrieve employees" });
    }

    if (!employees || employees.length === 0) {
        return res.status(404).json({ message: "No employees found" });
    }

    return res.status(200).json({ employees });
};

// Add  new employee
const addEmployees = async (req, res, next) => {
    const { name, email, age, address } = req.body;

    let employees;
    try {
        employees = new Employees({ name, email, age, address });
        await employees.save();
    } catch (err) {
        console.error("Error saving employee:", err);
        return res.status(500).json({ message: "Failed to add employee", error: err.message });
    }

    return res.status(201).json({ message: "Employee added successfully", employees });
};

// Get employee by ID
const getById = async (req, res, next) => {
    const id = req.params.id;

    let employees;
    try {
        employees = await Employees.findById(id);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error retrieving employee" });
    }

    if (!employees) {
        return res.status(404).json({ message: "Employee not found" });
    }

    return res.status(200).json({ employees });
};

// Update employee details
const UpdateEmployees = async (req, res, next) => {
    const id = req.params.id;
    const { name, email, age, address } = req.body;

    let employees;
    try {
        employees = await Employees.findByIdAndUpdate(
            id,
            { name, email, age, address },
            { new: true } 
        );
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error updating employee details" });
    }

    if (!employees) {
        return res.status(404).json({ message: "Unable to update employee details" });
    }

    return res.status(200).json({ message: "Employee updated successfully", employees });
};

// Delete employee
const deleteEmployees = async (req, res, next) => {
    const id = req.params.id;

    let employees;
    try {
        employees = await Employees.findByIdAndDelete(id);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error deleting employee" });
    }

    if (!employees) {
        return res.status(404).json({ message: "Employee not found" });
    }

    return res.status(200).json({ message: "Employee deleted successfully", employees });
};

module.exports = {
    getAllEmployees,
    addEmployees,
    getById,
    UpdateEmployees,
    deleteEmployees,
};
