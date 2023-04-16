import React from "react";
import Link from "next/link";

export default function Button({ children, link, variant, icon, newWindow }) {
  return (
    <button
      className={`button ${variant}`}
      onClick={(e) => {
        e.preventDefault();
        if (link) {
          if (newWindow) {
            window.open(link);
          } else {
            window.location.href = link;
          }
        }
      }}
    >
      {icon ? (
        <span class="material-symbols-outlined button-icon">{icon}</span>
      ) : (
        ""
      )}
      <div className={`button-label ${icon ? "button-label-icon" : ""}`}>
        {children}
      </div>
    </button>
  );
}

// {icon ? <div className="button-icon-end">{icon}</div> : ""}
