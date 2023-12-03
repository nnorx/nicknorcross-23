import { ScrollDirection, useMarqueePosition } from "./hooks";
import { Theme, themeTextColors } from "../utils/Theme";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
`;

const SingleTitle = styled.h1`
  display: inline-block;
  position: relative;
  padding-right: 0.2em;
  margin: 0;

  text-transform: uppercase;
  white-space: nowrap;
`;

type Props = {
  scrollDirection: ScrollDirection;
  theme: Theme;
};

export default function Marquee({ scrollDirection, theme }: Props) {
  const translateX = useMarqueePosition(0.125, scrollDirection || "down");

  return (
    <Wrapper>
      <SingleTitle
        style={{ translate: `${translateX}%`, color: themeTextColors[theme] }}
      >
        Full stack developer
      </SingleTitle>
      <SingleTitle
        style={{ translate: `${translateX}%`, color: themeTextColors[theme] }}
      >
        Full stack developer
      </SingleTitle>
    </Wrapper>
  );
}
