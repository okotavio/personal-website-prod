import React from "react";
import ActiveLink from "../components/activelink";
import { useRouter } from "next/router";
import Logo from "../components/logo";

export default function Header({}) {
  const router = useRouter();
  return (
    <div className="headercontainer">
      <header>
        <div className="logo">
          <Logo />
        </div>
        <nav className="menu">
          <ActiveLink href="/">Home</ActiveLink>
          <ActiveLink href="/about">About</ActiveLink>
        </nav>
      </header>
    </div>
  );
}
