"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Card({ project }) {
  return (
    <motion.div
      className="group relative h-full w-full cursor-grab overflow-hidden rounded-lg bg-neutral-900 border border-neutral-800 shadow-lg"
      whileHover={{ scale: 1.05 }}
    >
      <Image
        src={`/assets/${project.src}`}
        alt={project.title}
        layout="fill"
        className="pointer-events-none object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
        <div className="flex h-full flex-col items-center justify-center p-4 text-white">
          <h3 className="text-lg font-bold">{project.title}</h3>
          <p className="text-sm">{project.description}</p>
        </div>
      </div
    </motion.div>
  );
}

export default Card;
