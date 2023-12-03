import React from "react";
import Marquee from "../../utils/Marquee";
import { useScrollDirection } from "../../utils/hooks";
import { Theme } from "../../utils/Theme";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 9.5em;

  @media (max-width: 991px) {
    top: 14em;
  }

  @media (max-width: 479px) {
    top: 10em;
  }
`;

type Props = {
  pageRef: React.RefObject<HTMLDivElement>;
  theme: Theme;
};

export default function Title({ pageRef, theme }: Props) {
  const scrollDirection = useScrollDirection(pageRef);
  return (
    <Wrapper>
      <Marquee scrollDirection={scrollDirection} theme={theme} />
    </Wrapper>
  );
}
