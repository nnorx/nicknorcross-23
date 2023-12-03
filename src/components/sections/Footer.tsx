import { useEffect, useRef, useState } from "react";
import TextAnimator from "../../utils/TextAnimator";
import blackArrow from "../../assets/arrow-black.svg";
import {
  Theme,
  getInverseThemeColor,
  getInverseThemeTextColor,
  themeBgColors,
  themeTextColors,
} from "../../utils/Theme";
import styled from "styled-components";

const Copied = styled.div<{ $copied: boolean }>`
  position: absolute;
  top: 150%;
  transform: translateY(100%);
  padding: 0.5em;
  font-size: 1.15em;
  transition: all 0.3s ease-out;
  opacity: 0;
  letter-spacing: 0.01em;
  font-weight: 200;
  user-select: none;

  ${({ $copied }) =>
    $copied &&
    `
    transform: translateY(0%);
    opacity: 1;
  `}

  border: 3px solid;
  border-image: linear-gradient(45deg, gold, deeppink) 1;
  clip-path: inset(0px round 3px);
  animation: huerotate 8s infinite linear;
  filter: hue-rotate(360deg);

  @keyframes huerotate {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rorate(360deg);
    }
  }
`;

const ExternalLink = styled.a<{ theme: Theme }>`
  padding: 0.6em 1.25em 0.625em;
  border-radius: 100rem;
  outline: 1px solid;
  background-color: ${({ theme }) => getInverseThemeColor(theme)};
  font-size: 0.875em;
  max-width: 30rem;
  color: ${({ theme }) => getInverseThemeTextColor(theme)};
  justify-content: center;
  display: flex;
  text-decoration: none;
  transition: all 0.1s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) =>
      themeBgColors[theme as keyof typeof themeBgColors]};
    color: ${({ theme }) =>
      themeTextColors[theme as keyof typeof themeBgColors]};
  }
`;

export default function Footer({ theme }: { theme: Theme }) {
  const ref = useRef<HTMLDivElement>(null);

  const [copied, setCopied] = useState(false);

  const [intersectionRatio, setIntersectionRatio] = useState(0);

  const thresholdArray = Array.from(Array(100).keys()).map((i) =>
    parseFloat((i / 100 + 0.01).toFixed(2))
  );

  useEffect(() => {
    const cur = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIntersectionRatio(entry.intersectionRatio);
        });
      },
      { threshold: thresholdArray }
    );

    if (cur) {
      observer.observe(cur);
    }

    return () => {
      if (cur) {
        observer.unobserve(cur);
      }
    };
  }, [thresholdArray]);

  const handleHomeClickScroll = () => {
    const element = document.getElementById("pgBody");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // returns a value between 0 and 1
  // if intersectiong ratio is greater than 0.5,
  // start to increase the border radius from 0
  // should return 1 when intersection ratio is 1
  function calcBorderRadius() {
    if (intersectionRatio > 0.5) {
      const ratio = (intersectionRatio - 0.5) * 2;
      return ratio;
    }
    return 0;
  }

  function calcWidth() {
    if (intersectionRatio > 0.5) {
      const ratio = (intersectionRatio - 0.5) * 2;
      return ratio;
    }
    return 0;
  }

  return (
    <div className="footer" style={{ color: getInverseThemeTextColor(theme) }}>
      <div className="footer-w">
        <div className="footer-container">
          <div
            className="footer-meta"
            style={{
              color: getInverseThemeTextColor(theme),
              fontFamily: "NeueMontreal",
              zIndex: 100,
            }}
          >
            Development
          </div>

          <div
            className="footer-name"
            style={{
              letterSpacing: "0.01em",
              textAlign: "center",
              justifyContent: "center",
              zIndex: 100,
              fontFamily: "NeueMontreal",
              fontSize: "1.25em",
            }}
          >
            Nick Norcross
          </div>

          <div
            className="footer-meta"
            style={{
              color: getInverseThemeTextColor(theme),
              fontFamily: "NeueMontreal",
              zIndex: 100,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            Design
          </div>

          <div
            className="footer-text"
            style={{
              zIndex: 100,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Porlane",
              lineHeight: 0.8,
            }}
          >
            <div
              className="footer-main-title"
              style={{ padding: "1.5rem 0", textTransform: "uppercase" }}
            >
              <TextAnimator
                centered
                lines={[
                  ["Interested", "in"],
                  ["working", "together?"],
                ]}
              />
            </div>
            <div
              className="footer-subtitle"
              style={{
                fontFamily: "NeueMontreal",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.5rem",
                position: "relative",
              }}
            >
              <div style={{ fontSize: "1.1em" }}>Drop me an email:</div>
              <div
                className="footer-email"
                onClick={() => {
                  navigator.clipboard
                    .writeText("nicholas.norcross@gmail.com")
                    .then(() => {
                      setCopied(true);
                      setTimeout(() => {
                        setCopied(false);
                      }, 2000);
                    });
                }}
              >
                <div style={{ overflow: "hidden" }}>
                  <img
                    alt="right arrow"
                    className="footer-email-icon"
                    src={blackArrow}
                    style={{
                      width: "0.75em",
                      marginTop: "0.5em",
                      boxSizing: "content-box",
                      padding: "0.25rem",
                      userSelect: "none",
                      overflow: "hidden",
                      filter: theme === Theme.light ? "invert(1)" : undefined,
                    }}
                  />
                </div>
                <div className="email">nicholas.norcross@gmail.com</div>
              </div>
              <Copied
                $copied={copied}
                style={{
                  backgroundColor: getInverseThemeColor(theme),
                }}
              >
                Copied!
              </Copied>
            </div>
          </div>

          <div
            className="footer-credits"
            style={{
              fontFamily: "NeueMontreal",
              zIndex: 100,
            }}
          >
            <div style={{ zIndex: 100 }}>{new Date().getFullYear()}</div>
          </div>

          <div
            className="footer-links"
            style={{
              display: "flex",
              alignSelf: "end",
              justifySelf: "stretch",
              justifyContent: "center",
              gap: ".625em",
              zIndex: 100,
              fontFamily: "NeueMontreal",
            }}
          >
            <ExternalLink
              href="https://www.linkedin.com/in/nicholas-norcross/"
              target="_blank"
              rel="noopener noreferrer"
              theme={theme}
            >
              LINKEDIN
            </ExternalLink>
            <ExternalLink
              href="https://github.com/nnorx"
              target="_blank"
              rel="noopener noreferrer"
              theme={theme}
            >
              GITHUB
            </ExternalLink>
          </div>

          <div className="footer-back-to-top">
            <a
              className="back-to-top"
              href="#home"
              onClick={handleHomeClickScroll}
              style={{
                userSelect: "none",
                textDecoration: "none",
                color: getInverseThemeTextColor(theme),
              }}
            >
              Back to top
            </a>
          </div>
        </div>

        <div
          className="footer-bg"
          ref={ref}
          style={{
            clipPath: `inset(0px round ${calcBorderRadius() / 2}em)`,
            padding: `${2.5 - 2.5 * calcWidth()}rem ${2 - 2 * calcWidth()}rem`,
            backgroundColor: getInverseThemeColor(theme),
          }}
        />
      </div>
    </div>
  );
}
