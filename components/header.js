import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import ActiveLink from "../components/activelink";
import NavItem from "../components/navitem";
import { useRouter } from "next/router";
import Logo from "../components/logo";
import Home from "../components/icons/home";

export default function Header({}) {
  // const [headerEntrance, setHeaderEntrance] = useState("");
  // const handleLoad = () => {
  //   console.log("carregou");
  //   setHeaderEntrance("header-entrance");
  // };
  // useEffect(() => {
  //   globalThis.addEventListener("load", handleLoad);
  //   return () => globalThis.removeEventListener("load", handleLoad);
  // }, []);

  // console.log(headerEntrance);

  return (
    <>
      <header>
        <Link className="skip-to-content-link logo" href="#main">
          <div className="label">Skip to content</div>
        </Link>
        <Link href="/">
          <div className="logo">
            <Logo />
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
