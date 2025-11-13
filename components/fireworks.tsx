"use client";

import { useEffect, useRef, useState } from "react";
import { Fireworks } from "fireworks-js";
import type { FireworksOptions } from "fireworks-js";

type FireworksOverlayProps = {
  delay?: number;
  duration?: number;
  fadeDuration?: number;
};

const palette: Array<FireworksOptions["hue"]> = [
  { min: 45, max: 55 }, // gold
  { min: 200, max: 215 }, // navy blue
  { min: 325, max: 340 }, // celebratory magenta
];

const baseOptions: FireworksOptions = {
  autoresize: true,
  opacity: 0.25,
  acceleration: 1.03,
  friction: 0.98,
  gravity: 1.6,
  particles: 90,
  traceLength: 3,
  traceSpeed: 12,
  explosion: 6,
  intensity: 45,
  flickering: 48,
  brightness: { min: 55, max: 80 },
  decay: { min: 0.015, max: 0.03 },
  delay: { min: 15, max: 25 },
  lineWidth: {
    explosion: { min: 1.2, max: 3 },
    trace: { min: 1, max: 2 },
  },
  rocketsPoint: { min: 30, max: 70 },
  sound: { enabled: false },
  mouse: { click: false, move: false, max: 0 },
};

export const FireworksOverlay = ({
  delay = 2000,
  duration = 2000,
  fadeDuration = 800,
}: FireworksOverlayProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setShouldRender(true);
      setActive(true);
    }, delay);
    return () => window.clearTimeout(timeoutId);
  }, [delay]);

  useEffect(() => {
    if (!active || !containerRef.current) {
      return;
    }

    const fireworks = new Fireworks(containerRef.current, baseOptions);

    fireworks.start();

    const intervalId = window.setInterval(() => {
      const hue = palette[Math.floor(Math.random() * palette.length)];
      fireworks.updateOptions({ hue });
    }, 500);

    const durationId = window.setTimeout(() => setActive(false), duration);

    return () => {
      window.clearTimeout(durationId);
      window.clearInterval(intervalId);
      fireworks.stop(true);
    };
  }, [active, duration]);

  useEffect(() => {
    if (!active && shouldRender) {
      const fadeId = window.setTimeout(
        () => setShouldRender(false),
        fadeDuration,
      );
      return () => window.clearTimeout(fadeId);
    }
  }, [active, shouldRender, fadeDuration]);

  if (!shouldRender) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none fixed inset-0 z-[60] transition-opacity ease-out ${
        active ? "opacity-100" : "opacity-0"
      }`}
      style={{ transitionDuration: `${fadeDuration}ms` }}
      aria-hidden="true"
    />
  );
};


