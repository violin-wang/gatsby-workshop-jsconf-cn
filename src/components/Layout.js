import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

import useSiteMetadata from "../hooks/useSiteMetadata";
import Header from "./Header";

const Main = styled.main`
  max-width: 600px;
  margin: 20px auto 0 auto;
`;

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
