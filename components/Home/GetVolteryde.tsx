"use client";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { buttonContainerVariants, buttonVariants, descriptionVariants, titleVariants } from "@/libs/animation";

export default function GetVolteryde() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });


  return (
    <section
      id="get-volteryde"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-black text-primary-100 mb-4"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={titleVariants}
        >
          Get Volteryde
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-secondary-200 max-w-full md:max-w-2xl text-center mx-auto text-lg md:text-xl mb-12 leading-relaxed"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={descriptionVariants}
        >
          Join the move toward greener transportation. Download Volteryde and
          ride the future today.
        </motion.p>

        {/* Download Buttons */}
        <motion.div
          className="flex flex-row gap-4 mb-8 justify-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={buttonContainerVariants}
        >
          {/* Play Store Button - TODO: Replace with actual Google Play Store URL */}
          <motion.div variants={buttonVariants}>
            <Link 
              href="https://play.google.com/store/apps/details?id=com.volteryde.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Volteryde from Google Play Store"
            >
              <motion.button
                className="group relative flex items-center justify-center gap-3 bg-black text-white px-5 py-2.5 rounded-lg border border-gray-800 transition-all hover:bg-gray-900"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative w-8 h-8 flex items-center justify-center">
                  <motion.svg
                    viewBox="0 0 24 24"
                    className="w-full h-full"
                  >
                    <path fill="#4285F4" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5" />
                    <path fill="#34A853" d="M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12" />
                    <path fill="#FBBC05" d="M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81" />
                    <path fill="#EA4335" d="M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66" />
                  </motion.svg>
                </div>
                <div className="relative text-left">
                  <div className="text-[10px] leading-tight opacity-80 uppercase">GET IT ON</div>
                  <div className="text-lg font-semibold leading-tight">Google Play</div>
                </div>
              </motion.button>
            </Link>
          </motion.div>

          {/* App Store Button - TODO: Replace with actual App Store URL */}
          <motion.div variants={buttonVariants}>
            <Link 
              href="https://apps.apple.com/app/volteryde/id0000000000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Volteryde from Apple App Store"
            >
              <motion.button
                className="group relative flex items-center justify-center gap-3 bg-black text-white px-5 py-2.5 rounded-lg border border-gray-800 transition-all hover:bg-gray-900"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative w-8 h-8 flex items-center justify-center">
                  <motion.svg
                    viewBox="0 0 24 24"
                    className="w-full h-full fill-current"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </motion.svg>
                </div>
                <div className="relative text-left">
                  <div className="text-[10px] leading-tight opacity-80">Download on the</div>
                  <div className="text-lg font-semibold leading-tight">App Store</div>
                </div>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}