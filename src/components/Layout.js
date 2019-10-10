import React from "react";
import styled from "styled-components";

import Header from "./Header";

const Main = styled.main`
  max-width: 600px;
  margin: 20px auto 0 auto;
`;

const Layout = ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
  </>
);

export default Layout;
