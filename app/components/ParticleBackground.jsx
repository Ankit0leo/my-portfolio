"use client";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 w-full h-full -z-10"
      options={{
        background: {
          color: { value: "transparent" },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "bubble",         // Bubble burst on click
            },
            onHover: {
              enable: true,
              mode: "grab",           // Grab & connect on hover
            },
          },
          modes: {
            bubble: {
              distance: 200,
              size: 8,
              duration: 2,
              opacity: 0.8,
            },
            grab: {
              distance: 180,
              links: {
                opacity: 0.6,
              },
            },
          },
        },
        particles: {
          color: {
            value: ["#f43f5e", "#a855f7", "#3b82f6", "#06b6d4"], // Multi-color
          },
          links: {
            color: "#a855f7",
            distance: 130,
            enable: true,
            opacity: 0.25,
            width: 1.2,
            triangles: {
              enable: true,           // Draws triangles between particles
              opacity: 0.05,
            },
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "out" }, // Particles drift off & reappear
            random: true,
            speed: { min: 0.5, max: 2 }, // Varied speed = more natural
            straight: false,
            attract: {
              enable: true,
              rotate: { x: 600, y: 1200 }, // Slight gravitational pull
            },
          },
          number: {
            density: { enable: true, area: 900 },
            value: 90,
          },
          opacity: {
            value: { min: 0.2, max: 0.7 }, // Fading in/out effect
            animation: {
              enable: true,
              speed: 1,
              sync: false,
            },
          },
          shape: {
            type: ["circle", "triangle"], // Mix of shapes
          },
          size: {
            value: { min: 1, max: 4 },
            animation: {
              enable: true,             // Particles pulse in size
              speed: 3,
              sync: false,
            },
          },
          rotate: {
            value: { min: 0, max: 360 },
            animation: {
              enable: true,
              speed: 5,
              sync: false,
            },
          },
          twinkle: {
            particles: {
              enable: true,             // Sparkle effect ✨
              frequency: 0.05,
              color: "#ffffff",
              opacity: 1,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;