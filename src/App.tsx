import { useState, useRef } from "react";

import "./App.css";

import styled, { css, keyframes } from "styled-components";
import Footer from "./components/sections/Footer";
import Navbar from "./components/common/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Title from "./components/sections/Title";
import { Theme, themeBgColors } from "./utils/Theme";

const fadeInFrames = keyframes`
  0% {
    opacity: 0;
    transform: translateY(3rem);
  }

  100% {
    opacity: 1;
  }
`;

const fadeIn = (delay?: string, duration?: string) => css`
  animation: ${fadeInFrames} ${duration || "0.25s"} ease-in-out forwards;
  animation-delay: ${delay || "0s"};
`;

const PageBody = styled.div<{ $menuOpen?: boolean }>`
  width: 100%;
  ${css`
    opacity: 0;
    ${fadeIn("0.4s", "0.3s")}
  `}

  animation-direction: alternate;
`;

const Page = styled.div<{ $menuOpen?: boolean; theme: Theme }>`
  background-color: ${({ theme }) =>
    themeBgColors[theme as keyof typeof themeBgColors]};
  height: 100%;
  position: relative;
  overflow-y: ${({ $menuOpen }) => ($menuOpen ? "hidden" : "auto")};
  overflow-x: hidden;
  scroll-behavior: smooth;
  transition: background-color 0.3s ease-in-out;
`;

export default function App() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<Theme>(Theme.dark);

  return (
    <Page ref={pageRef} id="page" className="page-wrapper" theme={theme}>
      <Navbar pageRef={pageRef} theme={theme} setTheme={setTheme} />

      <PageBody id="pgBody" className="pgBody">
        <Title pageRef={pageRef} theme={theme} />
        <Hero theme={theme} />
        <About theme={theme} />
        <Services theme={theme} />
        <Experience theme={theme} />
        <Projects theme={theme} />
        <Footer theme={theme} />
      </PageBody>
    </Page>
  );
}
