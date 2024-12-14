import { useEffect, useState, useRef, RefObject } from "react";

export type ScrollDirection = "up" | "down" | undefined;

export function useScrollDirection(
  ref: RefObject<HTMLElement | null>
): ScrollDirection {
  const [scrollDirection, setScrollDirection] =
    useState<ScrollDirection>("down");
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const cur = ref?.current;
    const handleScroll = () => {
      if (ref?.current == null) return;

      const currentScrollTop = ref.current.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      setLastScrollTop(currentScrollTop);
    };

    if (cur) {
      cur.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      if (cur) {
        cur.removeEventListener("scroll", handleScroll);
      }
    };
  }, [ref, lastScrollTop]);

  return scrollDirection;
}

export const useMarqueePosition = (
  speed: number,
  scrollDirection: "up" | "down" = "down"
): number => {
  const [position, setPosition] = useState<number>(10);
  const [direction, setDirection] = useState<"up" | "down">("down");

  useEffect(() => {
    let animationFrameId: number;

    const updatePosition = () => {
      if (direction === "down") {
        setPosition((prevPosition) =>
          prevPosition <= -100 ? 0 : prevPosition - speed
        );
      } else {
        setPosition((prevPosition) =>
          prevPosition >= 0 ? -100 : prevPosition + speed
        );
      }

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    updatePosition();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [direction, speed]);

  useEffect(() => {
    setDirection(scrollDirection);
  }, [scrollDirection]);

  return position;
};

export default function useOnScreen(ref: RefObject<HTMLElement>) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) =>
      setIsOnScreen(entry.isIntersecting)
    );
  }, []);

  useEffect(() => {
    if (ref.current == null) return;
    observerRef?.current?.observe(ref.current);

    return () => {
      observerRef?.current?.disconnect();
    };
  }, [ref]);

  return isOnScreen;
}
