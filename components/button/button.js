import React from "react";
import Link from "next/link";

export default function Button({ children, link, variant, icon }) {
  return (
    <button
      className={`button ${variant}`}
      onClick={(e) => {
        e.preventDefault();
        window.location.href = `${link}`;
      }}
    >
      {icon ? <div className="button-icon-start">{icon}</div> : ""}
      <div className={`button-label ${icon ? "button-label-icon" : ""}`}>
        {children}
      </div>
      {icon ? <div className="button-icon-end">{icon}</div> : ""}
    </button>
  );
}
