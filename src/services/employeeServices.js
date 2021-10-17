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

export const searchEmployee = async(keyWord)=>{
  const results = await Employee.findAll({where:{[Op.or]:[{name: {[Op.like]: `%${keyWord}%`}}, {position: {[Op.like]: `%${keyWord}%`}},{email: {[Op.like]: `%${keyWord}%`}},{phone: {[Op.like]: `%${keyWord}%`}}, {emp_code: {[Op.like]: `%${keyWord}%`}}]}})
  if(results){
    return {status:true, results}
  }else{
    return {status:false, message:'something wen wrong', statusCode:500}
  }
} 