import React, { Component } from "react";
import { Card, Grid, Button, TwoColumnHero } from "kk-design-system";
import styled from "styled-components";

class Album extends Component {
  state = {};
  render() {
    return (
      <AlbumContainer id="album-page">
        <section className="page-section selected-album-section bg--neutral">
          <TwoColumnHero fullImage={true} />
        </section>
        <section className="page-section album-grid-section">
          <Grid colClass="three-col">
            <Card tag="" noText={true} />
            <Card tag="" noText={true} />
            <Card tag="" noText={true} />
            <Card tag="" noText={true} />
            <Card tag="" noText={true} />
            <Card tag="" noText={true} />
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
  .more-btn-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 3rem;
  }
`;

export default Album;
