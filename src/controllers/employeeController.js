import * as employeeServices from "../services/employeeServices";
import { hashPassword, checkPassword, getJwtToken } from "../middlewares/auth";
import sendEmail from "../helpers/sendEmail";
import { generateAndVerifyCode } from "../helpers/generateCode";
// sign up

export default class Employee {
  async signup(req, res) {
    try {
      const code = await generateAndVerifyCode();
      const employee = req.body;
      const password = hashPassword(employee.password);
      const employeeWithHashedPassword = {
        ...employee,
        password,
        dob: new Date(employee.dob),
        employee_code: code,
      };
      const createEmployee = await employeeServices.createEmployee(
        employeeWithHashedPassword
      );
      if (createEmployee) {
        const emailVerificationLink = `${process.env.BASE_URL}/employees/verify/${createEmployee.employee_code}`;
        sendEmail(emailVerificationLink, createEmployee.email);
        return res.status(201).json({
          success: true,
          status: 201,
          message: "account created successfully",
          data: createEmployee,
        });
      }
    } catch (err) {
      if (err.name === "ValidationError") {
        const messages = Object.values(err.errors).map((val) => val.message);

        return res.status(400).json({
          success: false,
          error: messages,
        });
      } else {
        return res.status(500).json({
          success: false,
          message: "Server Error",
          err,
        });
      }
    }
  }

  // sign In

  async signIn(req, res) {
    try {
      const { email, password } = req.body;
      const employee = await employeeServices.getOneEmployee({ email });
      if (employee && employee.dataValues) {
        const employeeDetails = employee.dataValues;
        if (checkPassword(password, employeeDetails.password)) {
          const employeeDetailsWithoutPassword = { ...employeeDetails };
          delete employeeDetailsWithoutPassword.password;
          const token = getJwtToken(employeeDetailsWithoutPassword);
          return res.status(200).json({
            token,
            data: employeeDetailsWithoutPassword,
          });
        } else {
          return res.status(403).json({
            error: "email or password incorrect",
          });
        }
      } else {
        return res.status(404).json({
          error: "employee not found.",
        });
      }
    } catch (err) {
      throw err;
    }
  }

  async verifyEmail(req, res) {
    try {
      const empCode = req.params;
      employeeServices.upDateEmployee(
        { email_verified: true },
        { employee_code: empCode }
      );
      return res.status(200).json({
        success: "email verfied successfully",
        statusCode: 200,
      });
    } catch (error) {
      throw error;
    }
  }

  async getAllEmployees(req, res, next) {
    try {
      const employees = await employeeServices.getAllEmployees();
      if (employees) {
        return res.status(200).json({
          success: true,
          status: 200,
          count: employees.length,
          data: employees,
        });
      }
    } catch (err) {
      next(err);
    }
  }


  async deleteEmployee(req,res,next) {
    try {
      const { employee_code } = req.params;
      
          const employee = await employeeServices.getOneEmployee({employee_code});
          if(employee){
              const update = await employeeServices.deleteEmployee({employee_code});
    
              return res.status(200).json({
                success: true,
                status: 200,
                data: update,
                message: "employee deleted successfully"
              });
            }else{
              return res.status(404).json({
                status: 404,
                message: "Employee not found"
              })
            }
            
          } catch (err) {
          next(err);
      }
    }
  }
