import React, { useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const testimonials = [
  {
    id: 1,
    name: "Houyem",
    role: "Mechanical Engineering Student",
    

    quote: "Thanks to the ChinaEdu, i've secured admission to a prestigious university in China along with a great scholarship. I couldn't be happier with the opportunities they've helped me achieve!",

  },
  {
    

    id: 2,
    name: "Saad",
    role: "Computer Science and Technology Student",
    quote: "As a computer Science and Technology student, i am incredibly grateful for the opportunities ChinaEdu has helped me achieve."
,
 
  },
  {
    

    id: 3,
    name: "Student",
    role: "Language Program Student",
   

    quote: "ChinaEdu comprehensive support has made my transition to Studying in China seamless and enriching. I am thankful for their dedication and highly recommend their services to fellow students.",
  
  }
]

const TestimonialCard = ({ testimonial }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full cardtesti"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-4">
     
        <div style={{alignSelf:"center",justifySelf:"center",width:"100%"}}>
          <h3 className="text-lg font-semibold">{testimonial.name}</h3>
          <p className="text-sm text-gray-600">{testimonial.role}</p>
          <p className="text-sm text-gray-500">{testimonial.company}</p>
        </div>
      </div>
      <div className="flex-grow">
        <Quote className="text-blue-500 mb-2 h-8 w-8" />
        <p className="text-gray-700 italic mb-4">{testimonial.quote}</p>
      </div>
     
    </div>
  )
}

export default function TestimonialCards() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(()=>{
    const tls4 = gsap.timeline({
      scrollTrigger: {
          trigger: ".testis",
          start: "top 80%",
          end: "top -50%",
          toggleActions: "play none none reverse",
  
      }
  
  });
  tls4.fromTo(".cardtesti",{y:10,opacity:0},{opacity:1,y:0,ease:"power1.inOut",duration:1,stagger:.3})
  },[])
  return (
    <div id='testimonials' className="testis bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
        What Parents and Students Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  )
}