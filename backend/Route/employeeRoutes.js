const express = require("express");
const router = express.Router();

const employeeController = require("../Controlers/employeeController");

router.get("/", employeeController.getAllEmployees);
router.post("/", employeeController.addEmployees);
router.get("/:id", employeeController.getById);
router.put("/:id", employeeController.UpdateEmployees);
router.delete("/:id", employeeController.deleteEmployees);

module.exports = router;
