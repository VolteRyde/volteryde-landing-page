"use client";
import Logo from "@/public/assets/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { contactItemVariants, containerVariants, copyrightVariants, leftSideVariants, rightSideVariants } from "@/libs/animation";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-16 pb-8 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <motion.div
          className="flex flex-col md:flex-row justify-between gap-12 px-10 mb-12 pb-12 border-b border-secondary-200"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Left Side - Logo and Description */}
          <motion.div variants={leftSideVariants}>
            <motion.div
              className="mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/" className="">
                <Image
                  src={Logo}
                  alt="Logo"
                  width={90}
                  height={45}
                  className="object-contain"
                  style={{ width: '90px', height: '45px' }}
                />
              </Link>
            </motion.div>
            <motion.p
              className="text-secondary-200 text-sm leading-relaxed max-w-sm"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Empowering sustainable movement across Africa with electric transport
              and intelligent mobility solutions.
            </motion.p>
          </motion.div>

          {/* Right Side - Contact Info */}
          <motion.div variants={rightSideVariants}>
            <motion.h3
              className="text-lg font-bold text-primary-100 mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Contact
            </motion.h3>
            <motion.div
              className="text-start space-y-2 text-secondary-200 text-sm"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3,
                  },
                },
              }}
            >
              <motion.p
                variants={contactItemVariants}
                whileHover={{ x: 5, color: "#4CAF50" }}
                transition={{ duration: 0.2 }}
              >
                Email: info@voltryde.com
              </motion.p>
              <motion.p
                variants={contactItemVariants}
                whileHover={{ x: 5, color: "#4CAF50" }}
                transition={{ duration: 0.2 }}
              >
                Phone: +233 534544454
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={copyrightVariants}
        >
          <p className="text-primary-100 text-sm">
            © {currentYear} Voltryde. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}