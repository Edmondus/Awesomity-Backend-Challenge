
import EmployeeServices from '../services/employeeServices';
import { hashPassword, checkPassword, getJwtToken } from '../middlewares/auth';
// sign up

export default class Employee {
  async signup(req, res) {
    try {
      const employeeServices = new EmployeeServices();
      const employee = req.body;
      const password = hashPassword(employee.password);
      const employeeWithHashedPassword = {...employee, password, dob: new Date(employee.dob)};
      const createEmployee = await employeeServices.createEmployee(employeeWithHashedPassword);
      if(createEmployee) {
        return res.status(201).json({
            success: true,
            status: 201,
            message: 'account created successfully',
            data: createEmployee
        });
      }
    } catch (err) {
      if(err.name === 'ValidationError') {
          const messages = Object.values(err.errors).map(val => val.message);

          return res.status(400).json({
              success: false,
              error: messages
          });
      } else {
          return res.status(500).json({
              success: false,
              error: 'Server Error'});
        }
      }
  }

  // sign In

  async signIn(req, res){
    try {
      const employeeServices = new EmployeeServices();
      const {email, password} = req.body;
      const employee = await employeeServices.getOneEmployee({email});
      if(employee && employee.dataValues) {
        const employeeDetails = employee.dataValues;
        if(checkPassword(password, employeeDetails.password)) {
          const employeeDetailsWithoutPassword = {...employeeDetails};
          delete employeeDetailsWithoutPassword.password;
          const token = getJwtToken(employeeDetailsWithoutPassword);
          return res.status(200).json({
            token,
            data: employeeDetailsWithoutPassword
          });
        } else { 
          return res.status(403).json({
            error: 'email or password incorrect'
          });
        }
      } else {
        return res.status(404).json({
          error: 'user not found.'
        });
      }
        
    } catch (err) {
      throw err
    }
}

  async getAllEmployees(req, res) {
    try {
      const employees = await employeeServices.getAllEmployees();
      if (employees) {
        return res.status(200).json({
          success: true,
          status: 200,
          count: employees.length,
          data: employees
      });
      }
    } catch (err) {
      return res.status(500).json({
          success: false,
          status: 500,
          error: 'Server error'
      });
    }
  }

}