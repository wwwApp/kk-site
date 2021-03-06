import React, { Component } from "react";
import styled from "styled-components";
import { Header } from "kk-design-system";
import { Link } from "react-router-dom";
import { ReactComponent as LogoSvg } from "./../assets/logo.svg";

const KKHeader = (props) => {
  const logo = (
    <LogoWrapper>
      <Link to="/">
        <LogoSvg />
      </Link>
    </LogoWrapper>
  );

  return (
    <HeaderWrapper>
      <Header logo={logo} />
    </HeaderWrapper>
  );
};

const LogoWrapper = styled.div`
  svg {
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
