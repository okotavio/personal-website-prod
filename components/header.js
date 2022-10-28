import React from "react";
import Link from "next/link";
import ActiveLink from "../components/activelink";
import { useRouter } from "next/router";
import Logo from "../components/logo";

export default function Header({}) {
  const router = useRouter();
  return (
    <header>
      <Link href="/">
        <div className="logo">
          <Logo />
        </div>
      </Link>
      <nav className="menu">
        <ActiveLink href="/">Home</ActiveLink>
        <ActiveLink href="/about">About</ActiveLink>
        <ActiveLink href="/bookmarks">Bookmarks</ActiveLink>
      </nav>
    </header>
  );
}
