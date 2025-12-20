'use client';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import PhoneImg from "@/public/assets/phone.png";
import { containerVariants, phoneVariants, stepVariants, titleVariants } from '@/libs/animation';
import { steps } from '@/mock';

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id='how-it-works'
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={titleVariants}
        >
          <h2 className="text-4xl md:text-5xl font-black text-primary-100 mb-4">
            How volteryde Works
          </h2>
        </motion.div>

        {/* Content Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Steps */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {steps.map((step) => (
              <motion.div
                key={step.number}
                className="flex gap-6"
                variants={stepVariants}
              >
                {/* Number Circle */}
                <div className="flex-shrink-0">
                  <motion.div
                    className="flex items-center justify-center w-16 h-16 rounded-full border-3 border-primary-700 text-primary-100 font-bold text-[32px]"
                    whileHover={{
                      scale: 1.1,
                      rotate: 360,
                      borderColor: "#4CAF50",
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {step.number}
                  </motion.div>
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-[32px] font-black text-primary-100 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-secondary-200 text-base md:text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Phone Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={phoneVariants}
          >
            <div className="relative w-full max-w-sm">
              <motion.div
                animate={isInView ? {
                  y: [0, -10, 0],
                } : {}}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <Image
                  src={PhoneImg}
                  alt="Volteryde mobile app - book electric bus rides in Ghana and Africa"
                  width={300}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}