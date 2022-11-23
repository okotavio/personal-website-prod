import React from "react";
import Container from "../components/container";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Clock from "react-live-clock";

export default function SystemBar({}) {
  return (
    <div className="system-bar">
      <Container flexbox spaceBetween>
        <div className="left">
          Berlin{" "}
          <Clock format={"HH:mm"} ticking={true} timezone={"Europe/Berlin"} />
        </div>
        <div className="right">otavioluisvidal@gmail.com</div>
      </Container>
    </div>
  );
}
