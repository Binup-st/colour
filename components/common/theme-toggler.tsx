"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  const moonRef = useRef<SVGSVGElement>(null);
  const sunRef = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    gsap.from(moonRef.current, {
      scale: 0,
      duration: 1,
      ease: "power2.inOut",
    });
    gsap.from(sunRef.current, {
      scale: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      key={theme}
      onClick={toggleTheme}
      className="w-9 h-9 lg:w-10 lg:h-10 rounded-full p-2 hover:-rotate-12 transform transition duration-200 ease-in-out cursor-pointer"
    >
      {theme === "light" ? (
        <Moon ref={moonRef} className="w-5 h-5" />
      ) : (
        <Sun ref={sunRef} className="w-5 h-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
