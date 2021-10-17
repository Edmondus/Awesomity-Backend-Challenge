import models from "../database/models";

const { Employee } = models;

export const createEmployee = async (newEmployee) => {
  return await Employee.create(newEmployee);
};

export const getAllEmployees = async (params) => {
  return await Employee.findAll({
    where: [params],
  });
};

export const getOneEmployee = async (param) => {
  return await Employee.findOne({where: [param]});
};

export const upDateEmployee = async (employee, param) => {
  return await Employee.update(employee, {
    returning: true,
    where: [param],
  });
};

export const deleteEmployee = async (param)=> {
    return Employee.destroy({where: [param]})
}
