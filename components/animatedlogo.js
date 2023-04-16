import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

function AnimatedLogo() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      setSubframe: true,
      animationData: require("../public/animatedlogo.json"),
    });
  }, []);

  return <div style={{ height: 40 }} ref={container}></div>;
}

export default AnimatedLogo;
