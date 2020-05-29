import React, { Component } from "react";
import styled from "styled-components";
import { Header } from "kk-design-system";
import { NavLink } from "react-router-dom";

const KKHeader = (props) => {
  const logo = (
    <NavLink to=".">
      <LogoWrapper className="logo">KK Site</LogoWrapper>
    </NavLink>
  );

  return (
    <HeaderWrapper>
      <Header logo={logo}>
        <NavLink to="/albums">albums</NavLink>
        <NavLink to="/albums">albums</NavLink>
      </Header>
    </HeaderWrapper>
  );
};

const LogoWrapper = styled.div``;

const HeaderWrapper = styled.div``;

export default KKHeader;
