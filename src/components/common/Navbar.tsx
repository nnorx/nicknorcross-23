import React, { useCallback } from "react";

import { useScrollDirection } from "../../utils/hooks";
import {
  Theme,
  getInverseThemeColor,
  themeTextColors,
} from "../../utils/Theme";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

type Props = {
  pageRef: React.RefObject<HTMLDivElement>;
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

export default function Navbar({ pageRef, theme, setTheme }: Props) {
  const scrollDirection = useScrollDirection(pageRef);

  const showMenu = useCallback(() => {
    if (
      pageRef.current?.scrollTop === 0 ||
      (pageRef.current?.scrollTop || 0) < 20
    )
      return true;
    if (pageRef.current?.scrollTop === undefined) return true;

    if (
      (pageRef.current?.scrollTop || 0) >
      (pageRef.current?.scrollHeight || 0) -
        (pageRef.current?.clientHeight || 0) -
        20
    )
      return false;
    if (scrollDirection === "up") return true;

    return false;
  }, [scrollDirection, pageRef]);

  return (
    <nav
      className="menu-wrapper"
      style={{
        position: "fixed",
        right: "0",
        left: "0",
        top: showMenu() ? 0 : "-120px",
        maxWidth: "100vw",
        color: "white",
        zIndex: 100,
        transition: "all 0.3s ease-in-out",
      }}
    >
      <div
        style={{
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "white",
          zIndex: 110,
        }}
      >
        <a
          className="navLink"
          href="#"
          style={{
            color: themeTextColors[theme],
            letterSpacing: "-0.02rem",
            fontFamily: "NeueMontreal",
            textDecoration: "none",
            padding: "0.25rem",
            borderRadius: "7px",
            transform:
              pageRef.current &&
              pageRef.current?.scrollTop >= pageRef.current?.clientHeight * 0.15
                ? "translateY(-300%)"
                : "translateY(0)",
            transition: "all 0.1s ease-out",
            transitionDelay: "0.05s",
          }}
        >
          Nick Norcross
        </a>
        <div className="nav-right">
          <div
            className="menu-btn"
            style={{
              backgroundColor: getInverseThemeColor(theme),
              borderRadius: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              transition: "all 0.3s ease-out",
              zIndex: 120,
            }}
            onClick={() =>
              setTheme(theme === Theme.dark ? Theme.light : Theme.dark)
            }
          >
            {theme === "dark" ? (
              <IoMdMoon style={{ color: "#000" }} fontSize="24px" />
            ) : (
              <IoMdSunny style={{ color: "#fff" }} fontSize="24px" />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
