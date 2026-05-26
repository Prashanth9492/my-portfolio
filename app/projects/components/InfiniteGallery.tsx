"use client";
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { projects } from "../../data/projects-data";
import ProjectCard from "./ProjectCard";

const InfiniteGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  const springX = useSpring(x, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      ref={containerRef}
      className="relative h-[300vh] bg-[#f5f2ee] overflow-hidden"
    >
      <div className="sticky top-0 h-screen bg-[#f5f2ee] flex items-center overflow-hidden">
        <motion.div className="flex gap-8" style={{ x: springX }}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
          {projects.map((project, index) => (
            <ProjectCard
              key={`duplicate-${index}`}
              project={project}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InfiniteGallery;
