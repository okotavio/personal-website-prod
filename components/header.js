import React from "react";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import NavItem from "../components/navitem";
import AnimatedLogo from "../components/animatedlogo";
import { useGlobalMouseMove } from "../hooks/useGlobalMouseMove";

export default function Header({}) {
  // const [X, setX] = useState(0);
  // const [Y, setY] = useState(0);
  // const headerParallax = useRef(null);

  // const handlePosition = () => {
  //   setX((window.innerWidth * 10) / 90);
  //   setY((window.innerHeight * 10) / 90);
  //   console.log(headerParallax.pageX);
  // };

  // useEffect(() => {
  //   window.addEventListener("mousemove", handlePosition);
  //   // return () => window.removeEventListener("mousemove", handlePosition);
  // });

  // console.log(X, Y);
  const [mouseX, mouseY] = useGlobalMouseMove();
  console.log(mouseX, mouseY);
  return (
    <>
      <header
        style={{
          transform: `translate(${mouseX * 2}px, ${mouseY * 2}px)`,
        }}
      >
        <Link className="skip-to-content-link logo" href="#main">
          <div className="label">Skip to content</div>
        </Link>
        <Link href="/">
          <div className="logo">
            <AnimatedLogo />
          </div>
        </Link>

        <nav className="menu">
          <NavItem href="/" label="Home" />
          <NavItem href="/about" label="About" />
          <NavItem href="/playground" label="Playground" />
        </nav>
      </header>
    </>
  );
}
