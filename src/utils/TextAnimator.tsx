import { useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";

const fadeInFrames = keyframes`
  0% { transform: translateY(-100%) }
  100% { transform: translateY(0) }
`;

const fadeIn = (delay?: string, duration?: string) => css`
  animation: ${fadeInFrames} ${duration || "0.25s"} ease forwards;
  animation-delay: ${delay || "0s"};
`;

const Container = styled.div<{
  $animate?: boolean;
  $index: number;
  $total: number;
}>`
  ${({ $animate, $index }) => {
    if ($animate)
      return css`
        ${fadeIn(`${$index * 0.01}ms`, `${"250ms"}`)}
      `;
    if (!$animate)
      return css`
        transform: translateY(-100%);
      `;
  }}
  transform: translateY(-100%);
  animation-delay: ${({ $index, $total }) =>
    `${50 + ($index * 500) / $total}ms`};
  overflow: hidden;
  min-width: 0.5ch;
`;

type Props = {
  lines: string[][];
  centered?: boolean;
};

export default function TextAnimator({ lines, centered = false }: Props) {
  const spacedLines = lines?.map((line) => {
    const spacedLine = line.reduce((acc, word, idx) => {
      if (idx < line.length - 1) return `${acc}${word} `;
      return `${acc}${word}`;
    }, "");
    return spacedLine;
  });

  const total = spacedLines?.reduce((acc, line) => acc + line.length, 0);

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const cur = ref.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.boundingClientRect.top > 250) setIsVisible(true);
        } else {
          if (entry.boundingClientRect.bottom > 0) setIsVisible(false);
        }
      });
    });

    if (cur) {
      observer.observe(cur);
    }

    return () => {
      if (cur) {
        observer.unobserve(cur);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className="text-animator-wrapper"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: centered ? "center" : "flex-start",
      }}
    >
      {spacedLines?.map((line, idx1) => (
        <div
          key={`line-${idx1}`}
          style={{
            display: "inline-flex",
            overflow: "hidden",
          }}
        >
          {line.split("").map((char, idx) => (
            <Container
              $animate={isVisible}
              $index={idx1 > 0 ? spacedLines[idx1].length + idx : idx}
              $total={total}
              key={`ani-${line}-${char}-${idx}`}
            >
              {char}
            </Container>
          ))}
        </div>
      ))}
    </div>
  );
}
