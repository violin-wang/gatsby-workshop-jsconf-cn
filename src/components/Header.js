import React from "react";
import styled from "styled-components";

import { Link } from "gatsby";

const HeaderContainer = styled.header`
  background: #f7f7f7;
  display: flex;
  justify-content: space-between;
  padding: 10px calc((100vw - 600px) / 2);
`;

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  line-height: 1;
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight};`}
  padding: 4px;
  margin-right: 10px;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }

  &.current-page {
    border-bottom: 2px solid #222;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const Header = () => (
  <HeaderContainer>
    <NavLink to="/" fontWeight="bold">
      Gatsby Workshop
    </NavLink>
    <nav>
      <NavLink activeClassName="current-page" to="/">
        首页
      </NavLink>
      <NavLink activeClassName="current-page" to="/about/">
        关于我
      </NavLink>
      <NavLink activeClassName="current-page" to="/contact/">
        联系我
      </NavLink>
    </nav>
  </HeaderContainer>
);

export default Header;
