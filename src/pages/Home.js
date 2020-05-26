import React, { Component } from "react";
import { TwoColumnHero, Button } from "kk-design-system";
import styled from "styled-components";

class Home extends Component {
  state = {};
  render() {
    return (
      <HomeContainer id="home-page">
        <section className="page-section featured-section">
          <h2 className="section-title u-sr-only">Featured album</h2>
          <TwoColumnHero
            title="To the Edge"
            description=""
            image="https://vignette.wikia.nocookie.net/animalcrossing/images/5/52/NH-Album_Cover-To_the_Edge.png/revision/latest?cb=20200503003411"
          />
        </section>
        <section className="page-section more-section bg--blue">
          <div className="o-container">
            <h2 className="section-title u-sr-only">Featured artists</h2>
          </div>
          <TwoColumnHero
            reverseOrder={true}
            title="T-Bone (ボルシチ, Borushichi)"
            description="He is named after the cut of beef, t-bones. His Japanese name is the name of a Ukrainian dish, borscht, which sometimes uses beef or beef bone as stock."
            image="https://vignette.wikia.nocookie.net/animalcrossing/images/0/09/TBone_NewLeaf_Official.png/revision/latest?cb=20130721212940"
          />
          <TwoColumnHero
            image="https://vignette.wikia.nocookie.net/animalcrossing/images/c/cd/Doc_NH.png/revision/latest?cb=20200322125229"
            title="Doc (トビオ, Tobio)"
            description="His name may reference the famous Bugs Bunny quote, 'Eh, what's up doc?'. His name and likeness may also be based on Dr. Wright from the SNES version of SimCity."
          />
          <div className="more-btn-wrapper">
            <Button>Save on Spotify</Button>
          </div>
        </section>
      </HomeContainer>
    );
  }
}

const HomeContainer = styled.div`
  .featured-section {
    .c-two-col-hero__title {
      font-size: 3rem;

      @media only screen and (min-width: 768px) {
        font-size: 5rem;
      }
    }
  }

  .more-section {
    .c-two-col-hero {
      height: auto;
      margin-bottom: 3rem;

      @media only screen and (min-width: 768px) {
        height: 30rem;
      }
    }

    .c-two-col-hero img {
      object-fit: contain;
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
