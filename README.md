# Awesomity-Backend-Challenge

THis is an employee Management system that was developed as an Awesomity taskforce challenge.

# API Endpoints:

- **POST /api/signup:** Manager signup
- **POST /api/login:** Manager login
- **GET /api/employees:** Get all employees
- **POST /api/employees/verify/:emp_code:** verify email
- **DELETE /api/employees/delete/:employee_code:** Delete an employee
- **POST /employees/suspend/:employee_code** Manager suspend an employee
- **POST /api/employees/activate/:employee_code:** Manager activate an employee
- **GET /api/employees/search/:keyWord:** Search search employee
- **GET /api/docs** Documentation

# Installation and Environment Setup

**Clone the repository from [Github](https://github.com/Edmondus/Awesomity-Backend-Challenge).**

( You will need **Git** for this, Get it [HERE](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) )

```
git clone https://github.com/Edmondus/Awesomity-Backend-Challenge.git
```

# Running the app 

## Pre-Requisites

- PostgreSQL installed
- Database `awesomity` created
- Rename the `.env.example` file to `.env` after filling in your custom variables

**To Install all dependencies:**

```
npm install
```

<!-- **To run the tests:**

```
npm test
``` -->

**To run the app:**

```
npm run dev
```


# Tools used

- Server-Side Framework: **Node/Express**
- Testing framework: **Mocha/Chai**
- Database engine: **Postgres**
- ORM: **Sequelize**



# Author:

### _[Edmond Ndayishimiye](https://github.com/Edmondus)_
