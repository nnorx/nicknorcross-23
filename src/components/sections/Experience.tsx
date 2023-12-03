import TextAnimator from "../../utils/TextAnimator";
import {
  Theme,
  getInverseThemeColor,
  themeTextColors,
} from "../../utils/Theme";
import itw from "../../assets/itw.png";
import cvai from "../../assets/cvai.png";
import classroots from "../../assets/classroots.png";

type Props = {
  theme: Theme;
};

export default function Experience({ theme }: Props) {
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
            <TextAnimator lines={[["EXPERIENCE"]]} />
          </div>
          <div className="experience-grid">
            <div
              className="experience-card"
              style={{
                backgroundColor:
                  theme === Theme.dark
                    ? "rgba(255, 255, 255, 0.05)"
                    : "rgba(0, 0, 0, 0.045)",
              }}
            >
              <div>
                <div
                  style={{ display: "flex", gap: "1em", alignItems: "center" }}
                >
                  <img
                    src={cvai}
                    height="60px"
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: "5px",
                      padding: "4px",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <h2
                      className="heading-small"
                      style={{
                        color: themeTextColors[theme],
                      }}
                    >
                      Clearview AI
                    </h2>
                    <p
                      style={{
                        fontSize: "1.25em",
                        color: themeTextColors[theme],
                        margin: 0,
                      }}
                    >
                      Software Engineer
                    </p>
                  </div>
                </div>
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1em",
                    paddingInlineStart: "1.5em",
                    paddingInlineEnd: "0.5em",
                    marginBlockStart: "1.25em",
                    marginBlockEnd: "0",
                  }}
                >
                  <li style={{ color: themeTextColors[theme] }}>
                    Developing diverse and complex features for a
                    state-of-the-art facial recognition platform.
                  </li>
                  <li style={{ color: themeTextColors[theme] }}>
                    Continuously improving the interface and experience,
                    carefully considering the needs of our customers.
                  </li>
                  <li style={{ color: themeTextColors[theme] }}>
                    Enhancing the performance of the platform via various modern
                    techniques ranging from code-splitting to database indexing.
                  </li>
                </ul>
              </div>
              <div style={{ color: themeTextColors[theme] }}>
                May 2022 - Present
              </div>
            </div>
            <div
              className="experience-card"
              style={{
                backgroundColor:
                  theme === Theme.dark
                    ? "rgba(255, 255, 255, 0.05)"
                    : "rgba(0, 0, 0, 0.045)",
              }}
            >
              <div>
                <div
                  style={{ display: "flex", gap: "1em", alignItems: "center" }}
                >
                  <img
                    src={itw}
                    height="60px"
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: "5px",
                      padding: "4px",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <h2
                      className="heading-small"
                      style={{
                        color: themeTextColors[theme],
                      }}
                    >
                      Illinois Tool Works
                    </h2>
                    <p
                      style={{
                        fontSize: "1.25em",
                        color: themeTextColors[theme],
                        margin: 0,
                      }}
                    >
                      Software Developer
                    </p>
                  </div>
                </div>
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1em",
                    paddingInlineStart: "1.5em",
                    paddingInlineEnd: "0.5em",
                    marginBlockStart: "1.25em",
                    marginBlockEnd: "0",
                  }}
                >
                  <li style={{ color: themeTextColors[theme] }}>
                    Implemented databases, payment systems, and workflows for an
                    Enterprise Resource Planning (ERP) system that supports
                    internal users across the company.
                  </li>
                  <li style={{ color: themeTextColors[theme] }}>
                    Automated data migration processes for the ERP system,
                    reducing the time required to migrate data by 90%.
                  </li>
                </ul>
              </div>
              <div style={{ color: themeTextColors[theme] }}>
                March 2021 - May 2022
              </div>
            </div>

            <div
              className="experience-card"
              style={{
                backgroundColor:
                  theme === Theme.dark
                    ? "rgba(255, 255, 255, 0.05)"
                    : "rgba(0, 0, 0, 0.045)",
              }}
            >
              <div>
                <div
                  style={{ display: "flex", gap: "1em", alignItems: "center" }}
                >
                  <img
                    src={classroots}
                    height="60px"
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: "5px",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <h2
                      className="heading-small"
                      style={{
                        color: themeTextColors[theme],
                      }}
                    >
                      ClassRoots
                    </h2>
                    <p
                      style={{
                        fontSize: "1.25em",
                        color: themeTextColors[theme],
                        margin: 0,
                      }}
                    >
                      Co-Founder and Tech Lead
                    </p>
                  </div>
                </div>
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1em",
                    paddingInlineStart: "1.5em",
                    paddingInlineEnd: "0.5em",
                    marginBlockStart: "1.25em",
                    marginBlockEnd: "0",
                  }}
                >
                  <li style={{ color: themeTextColors[theme] }}>
                    Concepted, prototyped, and pitched a collaborative learning
                    technology platform for college students.
                  </li>
                  <li style={{ color: themeTextColors[theme] }}>
                    Awarded "Significant Social Impact Award" in the 2018
                    DifferenceMaker Idea Challenge.
                  </li>
                  <li style={{ color: themeTextColors[theme] }}>
                    Paused development in 2020 to pursue other opportunities.
                    The journey has proven to be a valuable learning experience.
                  </li>
                </ul>
              </div>
              <div style={{ color: themeTextColors[theme] }}>
                October 2017 - December 2020
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
