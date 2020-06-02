import React, { Component } from "react";
import { Card, Grid, Button, BgHero } from "kk-design-system";
import styled from "styled-components";
import PlayBar from "./../components/PlayBar";

class Album extends Component {
  state = {};
  render() {
    return (
      <AlbumContainer id="album-page">
        <section className="page-section selected-album-section bg--neutral">
          <BgHero bgSize={80}>
            <Grid colClass="twoCol">
              <div className="selected-album-section__media">
                <div className="selected-album-section__media-bg"></div>
                <img
                  src="https://vignette.wikia.nocookie.net/animalcrossing/images/3/3c/NH-Album_Cover-Wandering.png/revision/latest?cb=20200503003456"
                  alt="Wondering"
                />
                <PlayBar />
              </div>
              <div className="selected-album-section__text">
                <h3>Wondering</h3>
                <p>
                  It is an upbeat tune with some minor scale notes. The general
                  composition theme is repetitive and "wandering" in nature,
                  hence its name.
                </p>
              </div>
            </Grid>
          </BgHero>
        </section>
        <section className="page-section album-grid-section">
          <Grid colClass="three-col">
            <Card
              noText
              url="/albums"
              tag=""
              title="My Place"
              description=""
              image="https://vignette.wikia.nocookie.net/animalcrossing/images/6/6d/NH-Album_Cover-My_Place.png/revision/latest?cb=20200503002809"
            />
            <Card
              noText
              url="/albums"
              tag=""
              title="Marine Song"
              description=""
              image="https://vignette.wikia.nocookie.net/animalcrossing/images/f/ff/NH-Album_Cover-Marine_Song_2001.png/revision/latest?cb=20200503002702"
            />
            <Card
              noText
              url="/albums"
              tag=""
              title="Spring Blossoms"
              description=""
              image="https://vignette.wikia.nocookie.net/animalcrossing/images/b/bb/NH-Album_Cover-Spring_Blossoms.png/revision/latest?cb=20200503003122"
            />
            <Card
              tag=""
              description=""
              title="Comrade K.K."
              image="https://vignette.wikia.nocookie.net/animalcrossing/images/6/67/NH-Album_Cover-Comrade_K.K..png/revision/latest?cb=20200502232547"
              noText
            />
            <Card
              tag=""
              description=""
              title="DJ K.K."
              image="https://vignette.wikia.nocookie.net/animalcrossing/images/7/7a/NH-Album_Cover-DJ_K.K..png/revision/latest?cb=20200502232717"
              noText
            />
            <Card
              tag=""
              description=""
              title="Drivin"
              image="https://vignette.wikia.nocookie.net/animalcrossing/images/0/0b/NH-Album_Cover-Drivin%27.png/revision/latest?cb=20200502233001"
              noText
            />
            <Card
              tag="Top Hit"
              description=""
              title="Aloha"
              image="https://vignette.wikia.nocookie.net/animalcrossing/images/5/5d/NH-Album_Cover-Aloha_K.K..png/revision/latest?cb=20200502231742"
              noText
            />
            <Card
              tag=""
              description=""
              title="Agent K.K."
              image="https://vignette.wikia.nocookie.net/animalcrossing/images/9/91/NH-Album_Cover-Agent_K.K..png/revision/latest?cb=20200502231523"
              noText
            />
            <Card
              tag=""
              description=""
              title="Bubblegum"
              image="https://vignette.wikia.nocookie.net/animalcrossing/images/e/e6/NH-Album_Cover-Bubblegum_K.K..png/revision/latest?cb=20200502232328"
              noText
            />
          </Grid>

          <div className="more-btn-wrapper o-container">
            <Button buttonStyle="btn--alert--outline">Load More</Button>
          </div>
        </section>
      </AlbumContainer>
    );
  }
}

const AlbumContainer = styled.div`
  .selected-album-section {
    position: relative;
    display: flex;
    flex-direction: column;

    &:before {
      content: "";
      width: 100%;
      height: 30%;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: var(--kk-white);
      z-index: 0;
    }

    .c-grid {
      z-index: 1;
    }
  }

  .selected-album-section__media {
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 0;

    > img {
      z-index: 1;
      padding: 2rem 1rem 1rem;
      max-width: 100%;

      @media only screen and (min-width: 768px) {
        padding: 4rem 2rem 2rem;
      }
    }
  }

  .selected-album-section__media-bg {
    width: 100%;
    height: 70%;
    position: absolute;
    left: 0;
    top: 0;
    border: 5px solid var(--kk-orange);
    z-index: 0;
  }

  .selected-album-section__text {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.25rem;

      @media only screen and (min-width: 768px) {
        width: 60%;
      }
    }

    @media only screen and (min-width: 768px) {
      padding-left: 2rem;
    }
  }

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
