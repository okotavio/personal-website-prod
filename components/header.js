import React from "react";
import Link from "next/link";

export default function Header({}) {
  return (
    <header>
      <h1>This is the header</h1>
      <Link href="/">Home</Link>
    </header>
  );
}
