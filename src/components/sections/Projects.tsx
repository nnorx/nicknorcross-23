import {
  Theme,
  getInverseThemeColor,
  getInverseThemeTextColor,
  themeBgColors,
  themeTextColors,
} from "../../utils/Theme";
import TextAnimator from "../../utils/TextAnimator";
import styled from "styled-components";

import fng from "../../assets/fng.webp";
import wordle from "../../assets/wordle.webp";

const ViewButton = styled.a<{ theme: Theme }>`
  padding: 0.6em 1.25em 0.625em;
  border-radius: 100rem;
  outline: 1px solid;
  background-color: ${({ theme }) =>
    themeBgColors[theme as keyof typeof themeBgColors]};
  font-size: 0.875em;
  max-width: 30rem;
  color: ${({ theme }) => themeTextColors[theme as keyof typeof themeBgColors]};
  justify-content: center;
  display: flex;
  text-decoration: none;
  transition: all 0.1s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => getInverseThemeColor(theme)};
    color: ${({ theme }) => getInverseThemeTextColor(theme)};
  }
`;

type Props = {
  theme: Theme;
};

export default function Projects({ theme }: Props) {
  return (
    <div className="container-2">
      <div
        className="global-padding"
        style={{
          maxWidth: "120rem",
          width: "100%",
        }}
      >
        <div
          className="horizontal-line"
          style={{ backgroundColor: getInverseThemeColor(theme) }}
        />
        <div className="split-content">
          <div
            className="qw-node qtitle"
            style={{ color: themeTextColors[theme] }}
          >
            <TextAnimator lines={[["PROJECTS"]]} />
          </div>
          <div className="service-grid">
            <div
              className="service-card"
              style={{
                backgroundColor:
                  theme === Theme.dark
                    ? "rgba(255, 255, 255, 0.05)"
                    : "rgba(0, 0, 0, 0.045)",
              }}
            >
              <div>
                <div
                  className="service-icon"
                  style={{
                    padding: "4px",
                    overflow: "hidden",
                    backgroundColor: getInverseThemeColor(theme),
                    transition: "all 0.1s ease-in-out",
                  }}
                >
                  <img alt="icon" src={fng} style={{ borderRadius: "0.5em" }} />
                </div>
                <h2
                  className="heading-small"
                  style={{ color: themeTextColors[theme] }}
                >
                  Fear & Greed Moving Averages
                </h2>
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "1em" }}
              >
                <div style={{ color: themeTextColors[theme] }}>
                  A visualizer for the Crypto Fear & Greed Index, with a
                  variable moving average applied.
                </div>
                <ViewButton
                  href="https://nnorx.github.io/MovingAverages/"
                  target="_blank"
                  rel="noopener noreferrer"
                  theme={theme}
                >
                  View
                </ViewButton>
              </div>
            </div>
            <div
              className="service-card"
              style={{
                backgroundColor:
                  theme === Theme.dark
                    ? "rgba(255, 255, 255, 0.05)"
                    : "rgba(0, 0, 0, 0.045)",
              }}
            >
              <div>
                <div
                  className="service-icon"
                  style={{
                    padding: "4px",
                    overflow: "hidden",
                    backgroundColor: getInverseThemeColor(theme),
                    transition: "all 0.1s ease-in-out",
                  }}
                >
                  <img
                    alt="icon"
                    src={wordle}
                    style={{ borderRadius: "0.5em" }}
                  />
                </div>
                <h2
                  className="heading-small"
                  style={{ color: themeTextColors[theme] }}
                >
                  Wordle Clone
                </h2>
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "1em" }}
              >
                <div style={{ color: themeTextColors[theme] }}>
                  A clone of the popular word guessing game, written in JS.
                </div>
                <ViewButton
                  href="https://nnorx.github.io/WordleClone/"
                  target="_blank"
                  rel="noopener noreferrer"
                  theme={theme}
                >
                  View
                </ViewButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
