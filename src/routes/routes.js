import express from 'express';
import EmployeeController from "../controllers/employeeController";
import { verifyAge } from '../middlewares/auth';

const router = express.Router();

const employeeController = new EmployeeController()

router.post('/signup', verifyAge, employeeController.signup);
router.post('/login', employeeController.signIn);
router.get('/employees', employeeController.getAllEmployees);
router.post('/employees/verify/:emp_code', employeeController.verifyEmail);
router.delete('/employees/delete/:employee_code', employeeController.deleteEmployee);
export default router;