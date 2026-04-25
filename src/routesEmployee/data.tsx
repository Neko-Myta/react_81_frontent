import CreateEmployee from "../pages/CreateEmployee/CreateEmployee";
import Employees from "../pages/Employee/Employee";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import type { RouteObj } from "./type";

export const routesEmployeeData: RouteObj[] = [
    { path: "CreateEmployee", element: <CreateEmployee />},
    { path: "Employee", element: <Employees />},
    { path: "*", element: <PageNotFound /> },
];