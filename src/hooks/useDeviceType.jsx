"use client";
import { useState, useEffect } from "react";

export default function useDeviceType() {
  const [device, setDevice] = useState("desktop");

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;

      if (width <= 1000) {
        setDevice("mobile");
      } else if (width <= 1024) {
        setDevice("tablet");
      } else if (width <= 640) { // Specifically for header dropdown menu on mobile devices
        setDevice("small-mobile");
      } else {
        setDevice("desktop");
      }
    };

    checkDevice();

    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return device;
}
