"use client";

import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";


const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true },
        particles: {
          number: { value: 7 },
          opacity: {
            value: 0.6,
            random: true,
            animation: {
              enable: true,
              speed: 0.5,
              minimumValue: 0.2,
              sync: false,
            },
          },
          size: {
            value: { min: 100, max: 300 },
            random: true,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            outModes: { default: "bounce" },
          },
          shape: {
            type: "image",
            image: [
              {
                src: '/images/shape1.png',
                width: 1000,
                height: 1000,
              },
              {
                src: '/images/shape2.png',
                width: 1000,
                height: 1000,
              },
            ],
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
