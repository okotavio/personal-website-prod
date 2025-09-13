import React, { useEffect, useRef } from "react";

function AnimatedLogo() {
  const container = useRef(null);

  useEffect(() => {
    let lottieInstance;
    import("lottie-web").then((lottie) => {
      lottieInstance = lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        setSubframe: true,
        animationData: require("../public/animatedlogo.json"),
      });
    });
    return () => {
      if (lottieInstance) {
        lottieInstance.destroy();
      }
    };
  }, []);

  return <div style={{ height: 40 }} ref={container}></div>;
}

export default AnimatedLogo;