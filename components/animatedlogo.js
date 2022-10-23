import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { LottiePlayer } from "lottie-web";

function AnimatedLogo() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      setSubframe: true,
      animationData: require("../public/logo.json"),
    });
  }, []);

  return <div style={{ height: 32, width: 96 }} ref={container}></div>;
}

export default AnimatedLogo;
