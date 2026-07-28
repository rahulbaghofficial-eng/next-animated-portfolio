'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Homepage = () => {
  return (
    <motion.div
      className="h-[calc(100vh-6rem)] overflow-hidden" // Prevents extra scrolling page-wide
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative min-h-[300px] lg:min-h-0">
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
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col items-center justify-center gap-6 lg:gap-8 py-4 lg:py-0">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center lg:text-left w-full">
            Crafting Digital Experience, Designing Tomorrow
          </h1>
          <p className="text-sm md:text-lg lg:text-xl w-full text-center lg:text-left">
            Welcome to my digital canvas, Where innovation and creativity meet
            to create exceptional digital experiences.
          </p>
          <div className="flex gap-4 w-full justify-center lg:justify-start">
            <Link
              href="/portfolio"
              className="p-3 lg:p-4 rounded-lg ring-1 ring-black bg-black text-white text-center"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="p-3 lg:p-4 rounded-lg ring-1 ring-black text-center"
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
