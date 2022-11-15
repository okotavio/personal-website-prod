import React from "react";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useGlobalMouseMove } from "../hooks/useGlobalMouseMove";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export default function SystemBar({}) {
  const [mouseX, mouseY] = useGlobalMouseMove();
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div className="system-bar">
      <div className="left">Berlin 17:13</div>
      <div className="right">otavioluisvidal@gmail.com</div>
    </div>
  );
}
