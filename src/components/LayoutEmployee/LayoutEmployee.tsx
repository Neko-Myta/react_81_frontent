import { useState } from "react";
import { StyledNavLink } from "../NavigationLink/NavigationLink";
import { navLinkData } from "./data";
import {
  Footer,
  GoBackButton,
  Header,
  LayoutComponent,
  Logo,
  LogoContainer,
  Main,
  NavContainer,
} from "./styles";
import type { Employee, LayoutProps, NavLinkObj } from "./types";
import { useNavigate } from "react-router-dom";
import { EmployeeContext } from "./NameContext";

function LayoutEmployee({ children }: LayoutProps) {
  // useNavigate - это хук из библиотеки react-router-dom. При вызове он
  // возвращает функцию, которую мы сохраняем в переменную и при вызове этой функции
  // мы можем передать путь и произойдет редирект
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate("/");
  };

  const goBack = () => {
    navigate(-1);
  };

  // Add state for employees (initially empty array)
  const [employees, setEmployees] = useState<Employee[]>([]);

  // Function to add a new employee
  const addEmployee = (emp: Employee) => {
    setEmployees((prev) => [...prev, emp]);
  };

  const navLinks = navLinkData.map((navLink: NavLinkObj) => {
    return (
      <StyledNavLink key={navLink.id} to={navLink.to}>
        {navLink.linkName}
      </StyledNavLink>
    );
  });

  return (
    <EmployeeContext.Provider value={{ employees, addEmployee }}>
      <LayoutComponent>
        <Header>
          <LogoContainer>
            <Logo onClick={goToHomePage}>81</Logo>
            <GoBackButton onClick={goBack}>{"<<<"}</GoBackButton>
          </LogoContainer>
          <NavContainer>{navLinks}</NavContainer>
        </Header>

        <Main>
          {children}
        </Main>

        <Footer>
          <Logo onClick={goToHomePage}>81</Logo>
        </Footer>
      </LayoutComponent>
    </EmployeeContext.Provider>
  );
}

export default LayoutEmployee;