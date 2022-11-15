import React from "react";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import NavItem from "../components/navitem";
import AnimatedLogo from "../components/animatedlogo";
import Logo from "../components/logo";
import { useGlobalMouseMove } from "../hooks/useGlobalMouseMove";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export default function Header({}) {
  const [mouseX, mouseY] = useGlobalMouseMove();
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <header
      style={{
        transform: `translate(${mouseX * 2}px, ${mouseY * 2}px)`,
      }}
    >
      <Link className="skip-to-content-link logo" href="#main">
        <div className="label">Skip to content</div>
      </Link>
      <Link href="/">
        <div className="logo" aria-label="Otavio Vidal Homepage">
          {prefersReducedMotion ? <Logo /> : <AnimatedLogo />}
        </div>
      </Link>

      <nav className="menu">
        <NavItem href="/" label="Home" />
        <NavItem href="/about" label="About" />
        <NavItem href="/playground" label="Playground" />
      </nav>
    </header>
  );
}
