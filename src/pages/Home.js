import React, { Component } from "react";
import { Button, Grid, Card } from "kk-design-system";
import styled from "styled-components";
import kkImage from "./../assets/kk-stand.png";
import PlayBar from "./../components/PlayBar";

class Home extends Component {
  state = {};
  render() {
    return (
      <HomeContainer id="home-page">
        <section className="page-section artist-section">
          <div class="o-container">
            <div className="artist-section__inner">
              <h2 className="section-title">KK Slider</h2>
              <div className="artist-section__image-wrapper">
                <div className="artist-section__image-bg"></div>
                <img
                  className="artist-section__image"
                  src={kkImage}
                  alt="KK Slider"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="page-section featured-album-section">
          <div className="o-container">
            <h2 className="section-title">New Release</h2>
            <div className="featured-album">
              <Grid colClass="two-col">
                <div className="featured-album__media">
                  <img
                    src="https://vignette.wikia.nocookie.net/animalcrossing/images/3/3c/NH-Album_Cover-Wandering.png/revision/latest?cb=20200503003456"
                    alt="Wondering"
                  />
                  <PlayBar />
                </div>
                <div className="featured-album__text">
                  <h3>Wondering</h3>
                  <p>
                    It is an upbeat tune with some minor scale notes. The
                    general composition theme is repetitive and "wandering" in
                    nature, hence its name.
                  </p>
                </div>
              </Grid>
            </div>
          </div>
        </section>
        <section className="page-section release-section">
          <div className="o-container">
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
            </Grid>

            <div className="more-btn-wrapper">
              <Button buttonStyle="btn--alert--outline">Load More</Button>
            </div>
          </div>
        </section>
      </HomeContainer>
    );
  }
}

const HomeContainer = styled.div`
  .artist-section {
    position: relative;
    background-color: var(--kk-neutral);

    &:before {
      content: "";
      width: 100%;
      height: 30%;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: var(--kk-white);
    }

    .artist-section__inner {
      display: flex;
      justify-content: center;
      flex-direction: column-reverse;

      @media only screen and (min-width: 768px) {
        flex-direction: row-reverse;
      }
    }

    .section-title {
      font-size: 3.5rem;
      padding: 2rem 0 0 1rem;
      line-height: 4rem;
      z-index: 3;
      text-align: center;

      @media only screen and (min-width: 768px) {
        width: 10rem;
        text-align: left;
      }
    }

    .artist-section__image-wrapper {
      position: relative;
      display: flex;
    }

    .artist-section__image-bg {
      width: 100%;
      height: 70%;
      position: absolute;
      right: 0;
      top: 0;
      border: 5px solid var(--kk-orange);
      z-index: 0;

      @media only screen and (min-width: 768px) {
        width: 135%;
      }
    }

    .artist-section__image {
      width: 400px;
      height: auto;
      z-index: 1;
      max-width: 100%;
    }
  }

  .featured-album-section {
    .section-title {
      text-align: center;
    }
  }

  .featured-album__media {
    display: flex;
    flex-direction: column;

    > img {
      margin-bottom: 1rem;
      max-width: 100%;
    }
  }

  .featured-album__text {
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

  .more-btn-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 5rem;
  }
`;

export default Home;
