import React from "react";
import ActiveLink from "../components/activelink";
import { useRouter } from "next/router";

export default function Header({}) {
  const router = useRouter();
  return (
    <header>
      <h1>This is the header</h1>
      <nav className="menu">
        <ActiveLink href="/">Home</ActiveLink>
        <ActiveLink href="/about">About</ActiveLink>
      </nav>
    </header>
  );
}
