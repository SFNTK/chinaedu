"use client"
import React, { useEffect } from 'react'

import Link from 'next/link'

import {  Instagram, MapPin, Phone } from 'lucide-react'
import Nav from '@/components/nav'
import Hero from '@/components/hero'
import "../components/fullcss.css"
import Mission from '@/components/mission'
import Why from '@/components/why'
import Partners from '@/components/partners'
import Testi from '@/components/testi'
import Gellery from '@/components/gallery'

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


export default function LandingPage() {
 const cardspara="Our agency ensures that each student's journey, from admission to settling in, is smooth and supported at every step. We provide ongoing support to make your transition to China both enriching and hassle-free."
  gsap.registerPlugin(ScrollTrigger);
  useEffect(()=>{
    const tls6 = gsap.timeline({
      scrollTrigger: {
          trigger: "#journey .container",
          start: "top 80%",
          end: "top -50%",
          toggleActions: "play none none reverse",
  
      }
  
  });
  tls6.fromTo(".jurneycard",{y:10,opacity:0},{opacity:1,y:0,ease:"power1.inOut",duration:1,stagger:.3},"animjourney")
  .fromTo("#journey .container h2",{y:10,opacity:0},{opacity:1,y:0,ease:"power1.inOut",duration:1},"animjourney")
  .fromTo("#journey .container p",{y:10,opacity:0},{opacity:1,y:0,ease:"power1.inOut",duration:1},"animjourney")
  },[])
  return (
    <div className="min-h-screen bg-white text-gray-800">
     <Nav/>
      <main>
       <Hero/>

      <Mission/>

      <Why/>
      <section id="journey" className="py-20 bg-gray-900 text-white">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-pink-500 to-red-500">
      From Morocco to China: Start Your Global Educational Adventure
    </h2>
    <p className="text-lg mb-10 text-center max-w-3xl mx-auto text-gray-300">
   {cardspara}
    </p>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {[
        { title: "1. Application Process", description: "Consultation and University Application" },
        { title: "2. Visa and Admission", description: "Securing the Visa and University Placement" },
        { title: "3. Arrival in China", description: "Orientation and Support Upon Arrival" },
        { title: "4. Ongoing Support", description: "Academic Assistance and Cultural Integration" }
      ].map((step, index) => (
        <div
          key={index}
          className="jurneycard bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl "
        >
          <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
          <p className="text-gray-200">{step.description}</p>
        </div>
      ))}
    </div>
    <div className="mt-12 text-center">
      <a
        href="#contact"
        className="bg-gradient-to-r from-blue-500 to-red-500 text-white px-8 py-4 rounded-full font-bold hover:from-pink-500 hover:to-red-600 transition duration-300 inline-block"
      >
        Start Your Journey Today
      </a>
    </div>
  </div>

  {/* CSS for fadeIn animation */}
 
</section>



      <Partners/>

   
<Testi/>
       

       
<Gellery/>
        <section id="faq" className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 
              className="text-3xl font-bold mb-8 text-center"
         
            >
              Frequently Asked Questions
            </h2>
            <div 
              className="max-w-3xl mx-auto"
          
            >
              {[
                { question: "How do I apply to study in China?", answer: "The application process involves choosing a university, preparing necessary documents, and submitting your application. Our team will guide you through each step, ensuring you meet all requirements." },
                { question: "What documents do I need for the application process?", answer: "Typically, you'll need your passport, academic transcripts, language proficiency test results, and a personal statement. We'll provide a comprehensive checklist based on your chosen university and program." },
                { question: "How long does it take to get accepted?", answer: "The acceptance process can vary, but it usually takes 4-8 weeks after submitting a complete application. We'll keep you updated throughout the process." },
                { question: "Can I apply for a student visa after getting accepted?", answer: "Yes, once you receive your acceptance letter, we'll assist you in applying for a student visa. The visa application process typically takes 2-4 weeks." },
                { question: "What support do you provide after I arrive in China?", answer: "We offer comprehensive support, including airport pickup, accommodation assistance, orientation programs, and ongoing academic and cultural support throughout your stay in China." }
              ].map((item, index) => (
                <details key={index} className="mb-4 bg-white p-6 rounded-lg shadow-md" >
                  <summary className="font-semibold text-lg cursor-pointer">{item.question}</summary>
                  <p className="mt-2">{item.answer}</p>
                </details>
              ))}
            </div>
            <div 
              className="mt-12 text-center"
       
            >
              <Link href="#contact" className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition duration-300 inline-block">
                More Questions? Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <h2 
              className="text-3xl font-bold mb-8 text-center"
      
            >
              Get in Touch: Your Journey Begins Here
            </h2>
            <p 
              className="text-lg mb-10 text-center max-w-3xl mx-auto"
          
            >
              Ready to start your educational adventure in China? Contact us for personalized guidance and answers to all your questions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div
          
              >
                <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                <p className="flex items-center mb-2">
                  <MapPin className="mr-2 text-red-500" />
                  Avenue des Forces Armées Royales, imm Air France, 8ème étage, Casablanca
                </p>
               
                <p className="flex items-center mb-4">
                  <Phone className="mr-2 text-red-500" />
                  +212 522 000 000
                </p>
                <div className="flex   gap-x-3">
                 
                  <Link href="https://www.instagram.com/china_edu_/" className="text-blue-600 hover:text-blue-800 transition duration-300">
                    <Instagram className="h-6 w-6" />
                 
                  </Link>
                    china_edu_
                </div>
              </div>
              <div
              
              >
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                    <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block mb-2 font-medium">Phone Number</label>
                    <input type="text" id="phone" name="phone" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                    <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                  </div>
               
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                    <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                  </div>
                  <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

      <footer className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['About Us', 'Why China', 'Partners', 'Testimonials', 'Contact'].map((item, index) => (
                  <li key={index}>
                    <Link href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-red-400 transition duration-300">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="mb-2">Avenue des Forces Armées Royales, imm Air France, 8ème étage, Casablanca</p>
          
              <p>Phone: +212 6 64 76 96 55 </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                
                <Link href="https://www.instagram.com/china_edu_/" className="hover:text-red-400 transition duration-300">
                  <Instagram className="h-6 w-6" />
                </Link>
             
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
              <p className="mb-4">Stay updated with our latest news and offers.</p>
              <form className="flex">
                <input type="email" placeholder="Your email" className="px-3 py-2 rounded-l-md w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded-r-md hover:bg-red-600 transition duration-300">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-500 text-center">
            <p>&copy; {new Date().getFullYear()} ChinaEdu. Designed By SOUFIANE TAKI | All rights reserved.</p>
            <div className="mt-2">
              <Link href="#" className="hover:text-red-400 mr-4 transition duration-300">Privacy Policy</Link>
              <Link href="#" className="hover:text-red-400 transition duration-300">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
