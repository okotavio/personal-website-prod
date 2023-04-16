import React from "react";
import { useState } from "react";

export default function IconButton({
  children,
  link,
  icon,
  onClick,
  newWindow,
  clickedLabel,
}) {
  const [label, setLabel] = useState(children);

  const handleClick = (e) => {
    e.preventDefault();
    if (link) {
      if (newWindow) {
        window.open(link);
      } else {
        window.location.href = link;
      }
    }
    if (clickedLabel) {
      setLabel(clickedLabel);
      setTimeout(() => {
        setLabel(children);
      }, 2000);
    }
    if (onClick) {
      onClick(e);
    }
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setLabel(children);
    }, 100);
  };
  return (
    <button
      className="icon-button"
      onClick={handleClick}
      onMouseLeave={handleMouseLeave}
    >
      <span class="material-symbols-outlined">{icon}</span>
      <div className="icon-button-label">{label}</div>
    </button>
  );
}
