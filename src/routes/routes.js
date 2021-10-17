import express from 'express';
import EmployeeController from "../controllers/employeeController";
import { verifyAge,isAuthorized } from '../middlewares/auth';

const router = express.Router();

const employeeController = new EmployeeController()

router.post('/signup', verifyAge, employeeController.signup);
router.post('/login', employeeController.signIn);
router.get('/employees', employeeController.getAllEmployees);
router.post('/employees/verify/:emp_code', employeeController.verifyEmail);
router.delete('/employees/delete/:employee_code',isAuthorized, employeeController.deleteEmployee);
router.post('/employees/suspend/:employee_code', isAuthorized ,employeeController.suspendEmployee);
router.post('/employees/activate/:employee_code', isAuthorized, employeeController.activateEmployee);
router.get('/employees/search/:keyWord', employeeController.searchEmployee);
export default router;