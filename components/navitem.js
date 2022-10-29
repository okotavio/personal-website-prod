import React from "react";
import ActiveLink from "../components/activelink";

export default function NavItem({ href, label, icon }) {
  return (
    <ActiveLink href={href}>
      {icon}
      {label}
    </ActiveLink>
  );
}
