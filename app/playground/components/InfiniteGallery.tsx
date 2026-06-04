"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/gallery-data";
import Card from "./Card";

const InfiniteGallery = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const pos = useRef<{ x: number; y: number; prevX: number; prevY: number }>({ x: 0, y: 0, prevX: 0, prevY: 0 });
  const vel = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const animationFrameId = useRef<number | null>(null);

  const gridConfig = {
    columns: 4,
    cardWidth: 300,
    cardHeight: 400,
    gap: 40,
  };

  const canvasWidth = gridConfig.columns * (gridConfig.cardWidth + gridConfig.gap);
  const numRows = Math.ceil(projects.length / gridConfig.columns);
  const canvasHeight = numRows * (gridConfig.cardHeight + gridConfig.gap);

  const getPosition = (i: number) => {
    const col = i % gridConfig.columns;
    const row = Math.floor(i / gridConfig.columns);
    return {
      x: col * (gridConfig.cardWidth + gridConfig.gap),
      y: row * (gridConfig.cardHeight + gridConfig.gap),
    };
  };

  const handlePointerDown = (e: PointerEvent) => {
    setIsDragging(true);
    pos.current.prevX = e.clientX;
    pos.current.prevY = e.clientY;
    if (animationFrameId.current !== null) cancelAnimationFrame(animationFrameId.current);
    if (containerRef.current) containerRef.current.style.cursor = "grabbing";
  };

  const handlePointerMove = (e: PointerEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - pos.current.prevX;
    const deltaY = e.clientY - pos.current.prevY;

    pos.current.x += deltaX;
    pos.current.y += deltaY;

    vel.current.x = deltaX;
    vel.current.y = deltaY;

    pos.current.prevX = e.clientX;
    pos.current.prevY = e.clientY;

    updateTransform();
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    if (containerRef.current) containerRef.current.style.cursor = "grab";
    animateMomentum();
  };

  const updateTransform = () => {
    const x = pos.current.x % canvasWidth;
    const y = pos.current.y % canvasHeight;

    const gallery = containerRef.current?.firstChild as HTMLElement | null;
    if (!gallery) return;
    gallery.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };

  const animateMomentum = () => {
    const tick = () => {
      pos.current.x += vel.current.x;
      pos.current.y += vel.current.y;

      vel.current.x *= 0.95; // friction
      vel.current.y *= 0.95; // friction

      updateTransform();

      if (Math.abs(vel.current.x) > 0.1 || Math.abs(vel.current.y) > 0.1) {
        animationFrameId.current = requestAnimationFrame(tick);
      }
    };
    animationFrameId.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener("pointerdown", handlePointerDown);
    container.addEventListener("pointermove", handlePointerMove);
    container.addEventListener("pointerup", handlePointerUp);
    container.addEventListener("pointerleave", handlePointerUp);

    return () => {
      if (!container) return;
      container.removeEventListener("pointerdown", handlePointerDown);
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerup", handlePointerUp);
      container.removeEventListener("pointerleave", handlePointerUp);
      if (animationFrameId.current !== null) cancelAnimationFrame(animationFrameId.current);
    };
  }, [isDragging]);

  const repeatedProjects = [...projects, ...projects, ...projects, ...projects];

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 cursor-grab overflow-hidden bg-black text-white"
      style={{ touchAction: "none" }}
    >
      <div
        className="absolute"
        style={{ willChange: "transform" }}
      >
        <div
          style={{
            width: canvasWidth,
            height: canvasHeight,
            position: "relative",
          }}
        >
          {repeatedProjects.map((project, i) => {
            const { x, y } = getPosition(i);
            const isEvenColumn = (i % gridConfig.columns) % 2 === 0;
            const yOffset = isEvenColumn ? -gridConfig.cardHeight / 4 : gridConfig.cardHeight / 4;

            return (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  width: gridConfig.cardWidth,
                  height: gridConfig.cardHeight,
                  x: x,
                  y: y + yOffset,
                }}
              >
                <Card project={project} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InfiniteGallery;


