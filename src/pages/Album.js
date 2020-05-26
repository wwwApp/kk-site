import React, { Component } from "react";
import { Card, Grid, Button, TwoColumnHero } from "kk-design-system";
import styled from "styled-components";

class Album extends Component {
  state = {};
  render() {
    return (
      <AlbumContainer id="album-page">
        <section className="page-section selected-album-section bg--green">
          <TwoColumnHero
            title="Comrade K.K."
            description="The song takes influence from traditional Russian folk music and especially Bard music, a genre that was common among amateur musicians in the former Soviet Union."
            image="https://vignette.wikia.nocookie.net/animalcrossing/images/6/67/NH-Album_Cover-Comrade_K.K..png/revision/latest?cb=20200502232547"
            btnText="Save on Spotify"
          />
        </section>
        <section className="page-section album-grid-section">
          <Grid colClass="three-col">
            <Card
              tag="Trending"
              description=""
              title="Comrade K.K."
              image="https://vignette.wikia.nocookie.net/animalcrossing/images/6/67/NH-Album_Cover-Comrade_K.K..png/revision/latest?cb=20200502232547"
              noText={true}
            />
            <Card
              tag=""
              description=""
              title="DJ K.K."
              image="https://vignette.wikia.nocookie.net/animalcrossing/images/7/7a/NH-Album_Cover-DJ_K.K..png/revision/latest?cb=20200502232717"
              noText={true}
            />
            <Card
              tag=""
              description=""
              title="Drivin"
              image="https://vignette.wikia.nocookie.net/animalcrossing/images/0/0b/NH-Album_Cover-Drivin%27.png/revision/latest?cb=20200502233001"
              noText={true}
            />
            <Card
              tag="Top Hit"
              description=""
              title="Aloha"
              image="https://vignette.wikia.nocookie.net/animalcrossing/images/5/5d/NH-Album_Cover-Aloha_K.K..png/revision/latest?cb=20200502231742"
              noText={true}
            />
            <Card
              tag=""
              description=""
              title="Agent K.K."
              image="https://vignette.wikia.nocookie.net/animalcrossing/images/9/91/NH-Album_Cover-Agent_K.K..png/revision/latest?cb=20200502231523"
              noText={true}
            />
            <Card
              tag=""
              description=""
              title="Bubblegum"
              image="https://vignette.wikia.nocookie.net/animalcrossing/images/e/e6/NH-Album_Cover-Bubblegum_K.K..png/revision/latest?cb=20200502232328"
              noText={true}
            />
          </Grid>

          <div className="more-btn-wrapper o-container">
            <Button>Load More</Button>
          </div>
        </section>
      </AlbumContainer>
    );
  }
}

const AlbumContainer = styled.div`
  .album-grid-section {
    .c-card__tag-wrapper {
      background-color: var(--kk-orange);
    }

    .c-card__link {
      &:hover {
        box-shadow: 3px 3px var(--kk-white), 5px 5px var(--kk-orange);
      }
    }
  }

  .more-btn-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 3rem;
  }
`;

export default Album;
