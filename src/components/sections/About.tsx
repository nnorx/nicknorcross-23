import {
  Theme,
  getInverseThemeColor,
  themeTextColors,
} from "../../utils/Theme";
import TextAnimator from "../../utils/TextAnimator";
import LineAnimator from "../../utils/LineAnimator";

type Props = {
  theme: Theme;
};

export default function About({ theme }: Props) {
  return (
    <div id="about-me" className="container-2">
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
            <TextAnimator lines={[["ABOUT", "ME"]]} />
          </div>

          <div
            className="qw-node qpara"
            style={{ color: themeTextColors[theme] }}
          >
            <LineAnimator
              lines={[
                [
                  "As",
                  "a",
                  "creative",
                  "developer,",
                  "I",
                  "focus",
                  "on",
                  "both",
                  "design",
                  "and",
                  "development",
                  "—",
                  "allowing",
                  "me",
                  "to",
                  "work",
                  "on",
                  "projects",
                  "from",
                  "concept",
                  "to",
                  "deployment.",
                  "Intuitively",
                  "formed",
                  "layouts,",
                  "unique",
                  "interactions,",
                  "and",
                  "great",
                  "typography",
                  "are",
                  "some",
                  "areas",
                  "I",
                  "focus",
                  "on",
                  "when",
                  "working",
                  "on",
                  "websites.",
                ],
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
