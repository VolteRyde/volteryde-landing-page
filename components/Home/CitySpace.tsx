"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import cityspaceImg from "@/public/assets/bus.svg";

export default function CitySpace() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Smooth parallax - image moves slower creating depth
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // Zoom effect as you scroll through
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.8]);

  return (
    <section
      className="relative w-full h-screen overflow-hidden bg-white"
      ref={ref}
    >
      <motion.div
        className="relative w-full h-full"
        style={{
          y,
          scale,
        }}
      >
        <Image
          src={cityspaceImg}
          alt="Volteryde electric bus in city skyline - sustainable urban transportation"
          fill
          className="object-cover"
          sizes="100vw"
          loading="lazy"
        />
      </motion.div>
    </section>
  );
}
