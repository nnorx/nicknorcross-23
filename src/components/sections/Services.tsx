import {
  Theme,
  getInverseThemeColor,
  themeTextColors,
} from "../../utils/Theme";
import TextAnimator from "../../utils/TextAnimator";

import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import icon4 from "../../assets/icon4.svg";

type Props = {
  theme: Theme;
};

export default function Services({ theme }: Props) {
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
            <TextAnimator lines={[["HERE'S", "WHAT", "I", "DO"]]} />
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
                <div className="service-icon">
                  <img alt="icon" src={icon2} />
                </div>
                <h2
                  className="heading-small"
                  style={{ color: themeTextColors[theme] }}
                >
                  Web Development
                </h2>
              </div>
              <div
                style={{
                  color: themeTextColors[theme],
                  display: "flex",
                  flexDirection: "column",
                  gap: "1em",
                }}
              >
                <div>
                  No challenge is too big or too small. I love to build things.
                </div>
                <div>
                  React + Typescript are my bread and butter, though I enjoy
                  working throughout the whole stack to understand structure
                  deeply.
                </div>
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
                <div className="service-icon">
                  <img alt="icon" src={icon3} />
                </div>
                <h2
                  className="heading-small"
                  style={{ color: themeTextColors[theme] }}
                >
                  Interface Design
                </h2>
              </div>
              <div style={{ color: themeTextColors[theme] }}>
                I love to design and build beautiful interfaces that are a joy
                to use.
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
                <div className="service-icon">
                  <img alt="icon" src={icon4} />
                </div>
                <h2
                  className="heading-small"
                  style={{ color: themeTextColors[theme] }}
                >
                  Performance Optimization
                </h2>
              </div>
              <div style={{ color: themeTextColors[theme] }}>
                Working with data at scale is exciting. I like to find
                bottlenecks and use the right tool for the job.
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
                <div className="service-icon">
                  <img alt="icon" src={icon1} />
                </div>
                <h2
                  className="heading-small"
                  style={{ color: themeTextColors[theme] }}
                >
                  Creative Problem Solving
                </h2>
              </div>
              <div style={{ color: themeTextColors[theme] }}>
                Always finding new ways to get from A to B.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
