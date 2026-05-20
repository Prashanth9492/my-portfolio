"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Project {
  title: string;
  category: string;
  img: string;
  width: number;
  height: number;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      className="relative"
      style={{
        width: project.width,
        height: project.height,
      }}
      whileHover={{ scale: 1.05, zIndex: 20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
        <Image
          src={`/assets/${project.img}`}
          alt={project.title}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div>
            <p className="text-white/70 text-sm">{project.category}</p>
            <h3 className="text-white text-2xl font-bold">{project.title}</h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
