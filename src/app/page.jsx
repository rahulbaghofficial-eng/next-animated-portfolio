'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Homepage = () => {
  return (
    <motion.div
      className="h-full min-h-screen"
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="min-h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-8 lg:py-0 gap-8 lg:gap-0">
        {/* IMAGE CONTAINER */}
        <div className="w-full lg:w-1/2 h-[350px] sm:h-[450px] lg:h-full relative">
          <Image
            src="/hero.png"
            alt="Hero Image"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain"
            priority
          />
        </div>

        {/* TEXT CONTAINER */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-6 lg:gap-8 pb-12 lg:pb-0">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center lg:text-left w-full">
            Crafting Digital Experience, Designing Tomorrow
          </h1>
          <p className="text-base md:text-xl w-full text-center lg:text-left">
            Welcome to my digital canvas, Where innovation and creativity meet
            to create exceptional digital experiences.
          </p>
          <div className="flex gap-4 w-full justify-center lg:justify-start">
            <Link
              href="/portfolio"
              className="p-4 rounded-lg ring-1 ring-black bg-black text-white text-center flex-1 sm:flex-initial"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="p-4 rounded-lg ring-1 ring-black text-center flex-1 sm:flex-initial"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
