"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroImg from "@/public/assets/heroImg.avif";

export default function HeroSection() {
  const { scrollY } = useScroll();

  // Parallax effect for background image
  const imageY = useTransform(scrollY, [0, 500], [0, 150]);
  const overlayOpacity = useTransform(scrollY, [0, 300], [0.8, 1]);

  // Content fade out on scroll
  const contentOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const contentY = useTransform(scrollY, [0, 300], [0, -50]);

  return (
    <section className="relative w-full h-[100vh] bg-white overflow-hidden pt-20">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 pt-20"
        style={{ y: imageY }}
      >
        <Image
          src={HeroImg}
          alt="Volteryde Electric Bus - Smart sustainable transport in Africa"
          className="object-cover"
          fill
          sizes="100vw"
          priority
          placeholder="blur"
        />
        {/* Gradient Overlay - Darker on Left */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/80 to-transparent"
          style={{ opacity: overlayOpacity }}
        ></motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 h-full container mx-auto flex flex-col justify-center items-start px-4 sm:px-6 lg:px-8"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="max-w-4xl mx-auto lg:mx-0">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight mb-6"
          >
            Transforming City Travel, One Ride at a Time
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base text-white text-gray-200 mb-8 max-w-2xl leading-relaxed"
          >
            volteryde makes your daily commuting simple, sustainable, and
            stress-free. Hop on our electric bus built for comfort, powered by
            green energy, and designed to move Africans forward.
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#how-it-works"
                className="block py-2 px-8 rounded-[32px] font-semibold text-center transition-all duration-300 text-sm sm:text-base text-black border-1 border-primary-700 bg-primary-700 hover:text-black"
              >
                Get volteryde
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#how-it-works"
                className="block py-2 px-8 rounded-[32px] font-semibold text-center transition-all duration-300 text-sm sm:text-base bg-transparent text-white border-1 border-white hover:bg-white hover:text-black"
              >
                How volteryde Works
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        aria-hidden="true"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}