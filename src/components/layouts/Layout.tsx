import styled from "@emotion/styled";
import React from "react";
import { Navigation, Footer } from ".";

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navigation />
      <Container>{children}</Container>
      <Footer/>
    </div>
  );
};

const Container = styled.main`
  min-height: 85vh;
  max-width: 1280px;
  margin: auto;
`;
