import { createContext } from "react";

type Employee = {
  name: string;
  surname: string;
  age: number;
  job?: string;
  [x: string]: string | number | undefined;
};

type EmployeeContextType = {
  employees: Employee[];
  addEmployee: (emp: Employee) => void;
};

export const EmployeeContext = createContext<EmployeeContextType>({
  employees: [],
  addEmployee: () => {},
});

