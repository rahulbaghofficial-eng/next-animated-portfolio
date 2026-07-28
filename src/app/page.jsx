'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
const Homepage = () => {
  return (
    <motion.div
      className="h-full "
      initial={{ y: -200 }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row  px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col items-center justify-center gap-8">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Crafting Digital Experience,Designing Tomorrow
          </h1>
          {/* Desc */}
          <p className="md:text-xl w-full">
            Welcome to my digital canvas, Where innovation and creativity meet
            to create exceptional digital experiences.
          </p>
          {/* BUTTONS */}
          <div className=" flex gap-4 w-full ">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              <Link href="/portfolio"> View My Work</Link>
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              <Link href="/contact">Contact Me</Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
