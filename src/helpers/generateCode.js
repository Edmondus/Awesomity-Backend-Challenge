import { getOneEmployee } from "../services/employeeServices";

export const generateCode = () => {
  const randomNumber = Math.floor(Math.random() * (9999 - 1 + 1) + 1);
  const formatted = randomNumber.toLocaleString("en-US", {
    minimumIntegerDigits: 4,
    useGrouping: false,
  });
  return `EMP${formatted}`;
};

export const generateAndVerifyCode = async () => {
  let code = generateCode();
  let isCodeTaken = await getOneEmployee({
    employee_code: code,
  });
  while (isCodeTaken) {
    code = generateCode();
    isCodeTaken = await getOneEmployee({
      employee_code: code,
    });
  }
  return code;
};
