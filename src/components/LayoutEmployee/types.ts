import type { Key, ReactNode } from "react";
export interface LayoutProps {
    children: ReactNode
}

export interface NavLinkObj {
    [x: string]: Key | null | undefined;
    to: string;
    linkName: string;
}

export interface Employee {
  name: string;
  surname: string;
  age: number;
  job?: string;
  [key: string]: string | number | undefined;
}

export interface ContextType {
  employees: Employee[];
  addEmployee: (emp: Employee) => void;
}

