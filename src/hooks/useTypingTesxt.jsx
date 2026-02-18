"use client";

import { useEffect, useState } from "react";

export default function useTypingText(text, speed = 100, delay = 300) {
  const [value, setValue] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setValue("");
    setIndex(0);

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setIndex((prev) => {
          if (prev >= text.length) {
            clearInterval(interval);
            return prev;
          }

          return prev + 1;
        });
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  useEffect(() => {
    setValue(text.slice(0, index));
  }, [index, text]);

  return value;
}
