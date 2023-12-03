import { useEffect, useMemo, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";

const fadeInFrames = keyframes`
  0% { transform: translateY(-100%); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

const fadeIn = (delay?: string, duration?: string) => css`
  animation: ${fadeInFrames} ${duration || "0.25s"} ease-out forwards;
  animation-delay: ${delay || "0s"};
`;

const Container = styled.div<{
  $animate?: boolean;
  $line: number;
  $index: number;
  $total: number;
}>`
  ${({ $animate, $line, $index }) => {
    if ($animate)
      return css`
        ${fadeIn(`${$line * 200 + $index * 1250}ms`, `${"350ms"}`)}
      `;
    if (!$animate)
      return css`
        transform: translateY(-100%);
      `;
  }}
  transform: translateY(-100%);
  animation-delay: ${({ $index, $total }) =>
    `${50 + ($index * 1500) / $total}ms`};
  overflow: hidden;
  white-space: pre-wrap;
`;

type Props = {
  lines: string[][];
  centered?: boolean;
};

export default function TextAnimator({ lines, centered = false }: Props) {
  const spacedLines = useMemo(() => {
    return lines?.map((line) => {
      const spacedLine = line.reduce((acc, word, idx) => {
        if (idx < line.length - 1) return `${acc}${word} `;
        return `${acc}${word}`;
      }, "");
      return spacedLine;
    });
  }, [lines]);

  const total = spacedLines?.reduce((acc, line) => acc + line.length, 0);

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const cur = ref.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.boundingClientRect.top > 100) setIsVisible(true);
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
        maxWidth: "100%",
      }}
    >
      {spacedLines?.map((line, idx1) => (
        <div
          key={`line-${line}-${idx1}`}
          style={{
            display: "flex",
            overflow: "hidden",
            flexWrap: "wrap",
          }}
        >
          {Array.from(line.matchAll(/\w+[,—.\s]+/g), (match) => match[0]).map(
            (word, idx) => {
              return (
                <div key={`${word}-${idx}`} style={{ overflow: "hidden" }}>
                  <Container
                    $animate={isVisible}
                    $line={idx1}
                    $index={idx}
                    $total={total}
                    key={`ani-${line}-${idx}`}
                  >
                    {word}
                  </Container>
                </div>
              );
            }
          )}
        </div>
      ))}
    </div>
  );
}
