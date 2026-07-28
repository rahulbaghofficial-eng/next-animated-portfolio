'use client';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = 'Say Hello';

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY,
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (err) => {
          console.error('EMAILJS ERROR DETAIL:', err);
          setError(true);
        },
      );
  };

  return (
    <motion.div
      /* Use h-[calc(100vh-64px)] if you have a top navbar (e.g., 64px height), or h-screen if full screen */
      className="h-[calc(100vh-64px)] w-full flex items-center justify-center overflow-hidden"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="w-full h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 gap-8 lg:gap-12 items-center justify-center py-6 lg:py-12">
        {/* TEXT CONTAINER */}
        <div className="w-full lg:w-1/2 h-1/3 lg:h-full flex items-center justify-center text-4xl sm:text-6xl text-center">
          <div className="flex flex-wrap justify-center items-center gap-1">
            {text.split('').map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
            <span>😊</span>
          </div>
        </div>

        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="w-full lg:w-1/2 lg:h-full bg-red-50 rounded-xl text-lg sm:text-xl flex flex-col gap-4 sm:gap-6 lg:gap-8 justify-center p-6 sm:p-10 lg:p-16 overflow-y-auto"
        >
          <span className="break-words font-medium">Dear Rahul Bagh,</span>

          <textarea
            rows={4}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none w-full"
            name="message"
            required
            placeholder="Write your message here..."
          />

          <span className="break-words font-medium">My Email address is:</span>
          <input
            name="user_email"
            type="email"
            className="bg-transparent border-b-2 border-b-black outline-none w-full"
            required
            placeholder="your.email@example.com"
          />

          <input type="hidden" name="from_name" value="Portfolio Visitor" />

          <span className="font-medium">Regards</span>

          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4 hover:bg-purple-300 transition-colors w-full">
            Send
          </button>

          {success && (
            <span className="text-green-600 font-semibold text-sm sm:text-base break-words">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold text-sm sm:text-base break-words">
              Something went wrong! Check your browser console for details.
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
