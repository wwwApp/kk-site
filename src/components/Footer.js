import React, { Component } from "react";
import styled from "styled-components";
import { Footer } from "kk-design-system";

const KKFooter = (props) => {
  return (
    <FooterWrapper className="footer-wrapper">
      <Footer
        title="Subscribe to our newsletter!"
        description="Make sure you subscribe and receive latest information on new release!"
        btnText="subscribe"
      />
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background-color: var(--kk-black);
  color: var(--kk-white);

  .btn.btn--primary--solid {
    background-color: var(--kk-orange);
  }

  .btn.btn--primary--solid:hover {
    box-shadow: 3px 3px var(--kk-white), 5px 5px var(--kk-orange);
  }
`;

export default KKFooter;
