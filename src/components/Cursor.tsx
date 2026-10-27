"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // only on devices with a real mouse, not touch screens
    if (!window.matchMedia("(pointer: fine)").matches) return;

    document.documentElement.classList.add("custom-cursor");

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let first = true;
    let frame = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;

      if (first) {
        rx = mx;
        ry = my;
        first = false;
        setVisible(true);
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      }
    };

    const onOver = (e: MouseEvent) => {
      if (e.target instanceof Element) {
        setHovering(Boolean(e.target.closest("a, button")));
      }
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const animate = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      document.documentElement.classList.remove("custom-cursor");
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-9998 transition-opacity duration-200 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`size-8 -translate-x-1/2 -translate-y-1/2 rounded-full border transition duration-200 ${
            hovering ? "scale-[1.4] border-[#39d3d3aa]" : "border-[#208eaf55]"
          }`}
        />
      </div>

      <div
        ref={dotRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-9999 transition-opacity duration-200 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent transition-transform duration-150 ${
            hovering ? "scale-[2.5]" : "scale-100"
          }`}
        />
      </div>
    </>
  );
}