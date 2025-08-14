import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <section
      className={`relative w-full ${
        isMobile ? "h-auto pb-10 mt-4" : "h-screen"
      } mx-auto`}
    >
      <div
        className={`absolute inset-0 ${
          isMobile ? "top-[50px]" : "top-[120px]"
        } max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* Left side vertical line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Hero text */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Haider</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop intelligent, automated <br className="sm:block hidden" />
            systems & AI solutions
          </p>
        </div>
      </div>

      {/* 3D Robot - only desktop */}
      {!isMobile && <ComputersCanvas />}

      {/* Scroll indicator - commented out for now */}
      {/*
      {!isMobile && (
        <div className="absolute xs:bottom-10 bottom-6 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[30px] h-[50px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      )}
      */}
    </section>
  );
};

export default Hero;
