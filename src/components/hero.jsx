import React from 'react';
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }
  
  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

const Hero = () => {
    const heroh1="Unlock Your Future in China's Top Universities"
    return (
        <section id="hero" className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <motion.div className="md:w-2/3 mb-10 md:mb-0" initial="initial" animate="animate" variants={staggerChildren}>
              <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl font-bold mb-4">{heroh1}</motion.h1>
              <motion.p variants={fadeIn} className="text-xl mb-6">Guiding Moroccan students to success with personalized support and prestigious partnerships.</motion.p>
              <motion.div variants={fadeIn} className="space-x-4">
                <Link href="#contact" className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition duration-300 inline-block">
                  Start Your Journey
                </Link>
                <Link href="#about" id="learnmore" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300 inline-block">
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
            <motion.div 
              className="md:w-1/3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="./heroimg3.png"
                alt="Moroccan students on a Chinese university campus"
                id='heroimg'
                className="rounded-lg "
              />
            </motion.div>
          </div>
        </section>
    );
}

export default Hero;
