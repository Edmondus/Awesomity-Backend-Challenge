'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Employee.init({
    name: DataTypes.STRING,
    national_id: DataTypes.STRING,
    employee_code: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    email: DataTypes.STRING,
    dob: DataTypes.DATE,
    status: DataTypes.ENUM(['ACTIVE', 'INACTIVE']),
    position: DataTypes.ENUM(['MANAGER', 'DEVELOPER', 'DESIGNER', 'TESTER', 'DEVOPS']),
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};
