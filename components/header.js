import React from "react";
import Link from "next/link";
import NavItem from "../components/navitem";
import AnimatedLogo from "../components/animatedlogo";

export default function Header({}) {
  return (
    <>
      <header>
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
