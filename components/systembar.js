import React from "react";
import Container from "../components/container";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useGlobalMouseMove } from "../hooks/useGlobalMouseMove";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export default function SystemBar({}) {
  return (
    <div className="system-bar">
      <div className="left">Berlin 17:45</div>
      <div className="right">otavioluisvidal@gmail.com</div>
    </div>
  );
}
