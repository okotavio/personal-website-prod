import React from "react";

export default function Container({ children, flexbox, spaceBetween }) {
  const containerClass = `container
  ${flexbox ? "flexbox" : ""}
  ${spaceBetween ? "space-between" : ""}`;

  return <div className={containerClass}>{children}</div>;
}
