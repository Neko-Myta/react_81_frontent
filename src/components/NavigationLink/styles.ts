import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: rgb(28, 85, 111);
  
  &.active {
    text-decoration: underline;
    color: rgb(28, 111, 83);
  }
`;