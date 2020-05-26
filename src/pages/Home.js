import React, { Component } from "react";
import { TwoColumnHero, Slideshow, Button } from "kk-design-system";
import styled from "styled-components";

class Home extends Component {
  state = {};
  render() {
    return (
      <HomeContainer id="home-page">
        <section className="page-section featured-section">
          <Slideshow>
            <TwoColumnHero />
            <TwoColumnHero />
          </Slideshow>
        </section>
        <section className="page-section more-section">
          <TwoColumnHero reverseOrder={true} />
          <TwoColumnHero />
          <div className="more-btn-wrapper o-container">
            <Button>Save on Spotify</Button>
            <Button>Save on Spotify</Button>
            <Button>Save on Spotify</Button>
          </div>
        </section>
      </HomeContainer>
    );
  }
}

const HomeContainer = styled.div`
  .more-section {
    & > *:not(.more-btn-wrapper) {
      height: 25rem;
    }
  }

  .more-btn-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 5rem;
  }
`;

export default Home;
