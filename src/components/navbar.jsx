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
    <div className="h-24 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 flex items-center justify-between text-xl relative z-50">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/4 items-center">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/* LOGO */}
      <div className="flex md:hidden lg:flex xl:w-1/4 xl:justify-center items-center">
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
        <Link
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/github.png" alt="GitHub" width={24} height={24} />
        </Link>
        <Link
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} />
        </Link>
        <Link
          href="https://dribbble.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/dribbble.png" alt="Dribbble" width={24} height={24} />
        </Link>
        <Link
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
        </Link>
        <Link
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
        </Link>
        <Link
          href="https://pinterest.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/pinterest.png" alt="Pinterest" width={24} height={24} />
        </Link>
      </div>

      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          aria-label="Toggle Menu"
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? 'opened' : 'closed'}
            className="w-10 h-1 rounded origin-left"
          />
          <motion.div
            variants={midVariants}
            animate={open ? 'opened' : 'closed'}
            className="w-10 h-1 bg-black rounded"
          />
          <motion.div
            variants={bottomVariants}
            animate={open ? 'opened' : 'closed'}
            className="w-10 h-1 rounded origin-left"
          />
        </button>

        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="fixed inset-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link) => (
              <motion.div variants={itemVariants} key={link.title}>
                <Link href={link.url} onClick={() => setOpen(false)}>
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
