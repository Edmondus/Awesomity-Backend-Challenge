import express from 'express';
import EmployeeController from "../controllers/employeeController";

const router = express.Router();

const employeeController = new EmployeeController()

router.post('/signup', employeeController.signup);
router.post('/login', employeeController.signIn);
router.get('/employees', employeeController.getAllEmployees);

export default router;