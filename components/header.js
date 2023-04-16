import React from "react";
import Container from "./container";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import NavItem from "../components/navitem";
import AnimatedLogo from "../components/animatedlogo";
import Logo from "../components/logo";
import Button from "./button/button";
import IconButton from "./iconbutton/iconbutton";
import { useGlobalMouseMove } from "../hooks/useGlobalMouseMove";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export default function Header({}) {
  const [mouseX, mouseY] = useGlobalMouseMove();
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <Container>
      <header>
        <Link className="skip-to-content-link logo" href="#main">
          <div className="label">Skip to content</div>
        </Link>
        <Link href="/">
          <div className="logo" aria-label="Otavio Vidal Homepage">
            {prefersReducedMotion ? <Logo /> : <AnimatedLogo />}
          </div>
        </Link>

        <nav className="menu">
          <IconButton
            icon="mail"
            link="mailto:otavioluisvidal@gmail.com"
            newWindow
          >
            Email
          </IconButton>
          <IconButton
            icon="description"
            link="https://drive.google.com/file/d/1_nsprB3PGrtYcXfJrhbidR1VktYhjVvz/view?usp=sharing"
            newWindow
          >
            Resume
          </IconButton>
        </nav>

        {/* <nav className="menu">
            <NavItem href="/" label="Home" />
            <NavItem href="/about" label="About" />
            <NavItem href="/playground" label="Playground" />
          </nav> */}
      </header>
    </Container>
  );
}
