import React from "react";
import { HeaderApp, HeaderTitle, HeaderContainer } from "./Header.style";
import { Toolbar, Container } from "@material-ui/core";

const Header = (props) => {
  return (
    <HeaderApp position={"sticky"}>
      <Toolbar component={Container}>
        <HeaderTitle>Esper</HeaderTitle>
        <HeaderContainer>{props.children}</HeaderContainer>
      </Toolbar>
    </HeaderApp>
  );
};

export default Header;
