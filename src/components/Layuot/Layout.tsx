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
import type { LayoutProps, NavLinkObj } from "./type";
import { useNavigate } from "react-router-dom";
import { NameContext } from "./NameContext";

function Layout({ children }: LayoutProps) {
    const [name, setName] = useState<string | undefined>("Egor Ivanenko");
    
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

  const navLinks = navLinkData.map((navLink: NavLinkObj) => {
    return (
      <StyledNavLink key={navLink.id} to={navLink.to}>
        {navLink.linkName}
      </StyledNavLink>
    );
  });

  return (
    <NameContext.Provider value={{ name, setName }}>
    <LayoutComponent>
      <Header>
        <LogoContainer>
        <Logo onClick={goToHomePage}>81 </Logo>
        <GoBackButton onClick={goBack}>{"<--"}</GoBackButton>
        </LogoContainer>
        <NavContainer>{navLinks}</NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <Logo onClick={goToHomePage}>81</Logo>
      </Footer>
    </LayoutComponent>
    </NameContext.Provider>
  );
}

export default Layout;
