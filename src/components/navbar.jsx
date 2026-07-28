'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import NavLink from './navlink';

const links = [
  { url: '/', title: 'Home' },
  { url: '/about', title: 'About' },
  { url: '/portfolio', title: 'Portfolio' },
  { url: '/contact', title: 'Contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: { rotate: 0, backgroundColor: 'rgb(0,0,0)' },
    opened: { rotate: 45, backgroundColor: 'rgb(255,255,255)' },
  };

  const midVariants = {
    closed: { opacity: 1 },
    opened: { opacity: 0 },
  };

  const bottomVariants = {
    closed: { rotate: 0, backgroundColor: 'rgb(0,0,0)' },
    opened: { rotate: -45, backgroundColor: 'rgb(255,255,255)' },
  };

  const listVariants = {
    closed: { x: '100vw' },
    opened: {
      x: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { x: -10, opacity: 0 },
    opened: { x: 0, opacity: 1 },
  };

  return (
    // FIX: Replaced wrapper div with a defined height and vertical padding
    <div className="h-24 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 flex items-center justify-between text-xl">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/4 items-center">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/4 xl:justify-center items-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1 px-1">Rahul</span>
          <span className="flex items-center justify-center px-2 h-8 rounded bg-white text-black">
            .Bagh
          </span>
        </Link>
      </div>

      {/* SOCIAL */}
      <div className="hidden md:flex gap-4 w-1/4 items-center justify-end">
        <Link href="/">
          <Image src="/github.png" alt="GitHub" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/dribbble.png" alt="Dribbble" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/pinterest.png" alt="Pinterest" width={24} height={24} />
        </Link>
      </div>

      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? 'opened' : 'closed'}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={midVariants}
            animate={open ? 'opened' : 'closed'}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? 'opened' : 'closed'}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>

        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-2xl z-40"
          >
            {links.map((link) => (
              <motion.div variants={itemVariants} key={link.title}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
