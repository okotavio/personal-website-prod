import React from "react";
import Link from "next/link";

export default function Button({ children, link, variant }) {
  return (
    <button
      className={`button ${variant}`}
      onClick={(e) => {
        e.preventDefault();
        window.location.href = `${link}`;
      }}
    >
      <div className="button-label">{children}</div>
    </button>
  );
}
