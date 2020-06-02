import React, { Component } from "react";
import styled from "styled-components";
import { Header } from "kk-design-system";
import { NavLink } from "react-router-dom";
import logoSvg from "./../assets/logo.svg";

const KKHeader = (props) => {
  const logo = (
    <LogoWrapper>
      <NavLink to=".">
        <img className="header__logo" src={logoSvg} alt="kK Site Logo" />
      </NavLink>
    </LogoWrapper>
  );

  return (
    <HeaderWrapper>
      <Header logo={logo} />
    </HeaderWrapper>
  );
};

const LogoWrapper = styled.div`
  .header__logo {
    width: 5rem;
  }
`;

const HeaderWrapper = styled.div`
  background-color: var(--kk-neutral);

  .c-header__inner {
    justify-content: center;
  }
`;

export default KKHeader;
