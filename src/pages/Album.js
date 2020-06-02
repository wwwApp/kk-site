import React, { Component } from "react";
import { Card, Grid, Button, BgHero } from "kk-design-system";
import styled from "styled-components";
import PlayBar from "./../components/PlayBar";
import { albums } from "./../assets/data";

class Album extends Component {
  state = {
    title: "",
    image: "",
  };

  componentDidMount() {
    const url = window.location.href.split("/");
    const currentAlbumKey = url[url.length - 1];

    this.setState({
      title: albums[currentAlbumKey].title,
      image: albums[currentAlbumKey].image,
    });
  }

  render() {
    return (
      <AlbumContainer id="album-page">
        <section className="page-section selected-album-section bg--neutral">
          <BgHero bgSize={80}>
            <Grid colClass="twoCol">
              <div className="selected-album-section__media">
                <div className="selected-album-section__media-bg"></div>
                <img src={this.state.image} alt={this.state.title} />
                <PlayBar />
              </div>
              <div className="selected-album-section__text">
                <h3>{this.state.title}</h3>
                <p>
                  It is an upbeat tune with some minor scale notes. The general
                  composition theme is repetitive.
                </p>
              </div>
            </Grid>
          </BgHero>
        </section>
        <section className="page-section album-grid-section">
          <Grid colClass="three-col">
            {Object.keys(albums).map((album, index) => {
              return (
                <Card
                  noText
                  url={`/albums/${album}`}
                  tag={`${index === 3 ? "top hit" : ""}`}
                  title={albums[album].title}
                  description=""
                  image={albums[album].image}
                />
              );
            })}
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
