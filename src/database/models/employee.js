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
    name: {
      type: DataTypes.STRING
    },
    national_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    employee_code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    dob: {
      type: DataTypes.DATE
    },
    status: {
      type: DataTypes.ENUM(['ACTIVE', 'INACTIVE']),
      defaultValue: "ACTIVE"
    },
    position: {
      type: DataTypes.ENUM(['MANAGER', 'DEVELOPER', 'DESIGNER', 'TESTER', 'DEVOPS'])
    },
    password: {
      type: DataTypes.STRING
    },
    email_verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  }, {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};
