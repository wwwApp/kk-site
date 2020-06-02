import React from "react";
import styled from "styled-components";
import { ReactComponent as Play } from "./../assets/play.svg";
import { ReactComponent as Download } from "./../assets/download.svg";

const PlayBar = (props) => {
  return (
    <PlayBarWrapper className="c-playbar">
      <div className="c-playbar__inner bg--neutral">
        <button aria-label="play">
          <Play />
        </button>
        <button aria-label="download">
          <Download />
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

    svg {
      width: 25px;
      height: auto;

      line,
      path {
        transition: all 0.3s ease-in;
      }
    }

    button {
      &:first-child {
        svg {
          width: 20px;
        }
      }

      &:hover {
        path,
        line {
          fill: var(--kk-black);
          stroke: var(--kk-black);
        }
      }
    }
  }
`;

export default PlayBar;
