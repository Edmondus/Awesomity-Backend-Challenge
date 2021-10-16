import models from '../database/models';

const { Employee } = models;

class EmployeeService {
  async createEmployee(newEmployee) {
    return await Employee.create(newEmployee);
  }

  async getAllEmployees(params) {
    return await Employee.findAll({
      where: params
    });
  }

  async getOneEmployee(param) {
    return await Employee.findOne({where: param});
  }

}
export default EmployeeService;
