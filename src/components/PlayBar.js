import React from "react";
import styled from "styled-components";
import play from "./../assets/play.svg";
import download from "./../assets/download.svg";

const PlayBar = (props) => {
  return (
    <PlayBarWrapper className="c-playbar">
      <div className="c-playbar__inner bg--neutral">
        <button>
          <img src={play} alt="Play" />
        </button>
        <button>
          <img src={download} alt="Download" />
        </button>
      </div>
    </PlayBarWrapper>
  );
};

const PlayBarWrapper = styled.div`
  .c-playbar__inner {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 1rem;
    border: 2px solid var(--kk-orange);

    img {
      width: 25px;
      height: auto;

      &:first-child {
        width: 20px;
      }
    }
  }
`;

export default PlayBar;
