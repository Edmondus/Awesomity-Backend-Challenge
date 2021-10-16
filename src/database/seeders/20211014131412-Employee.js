module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Employees',
    [
      {
        name: 'Jane Doe',
        national_id: '1199780079616042',
        employee_code: 'EMP1234',
        phone_number: 'Jane Doe',
        email: 'janedoe@example.com',
        dob: '1/10/2021',
        status: 'ACTIVE',
        position: 'MANAGER',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Employees', null, {}),
};