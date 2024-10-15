import React, { useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const Partners = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(()=>{
    const tls4 = gsap.timeline({
      scrollTrigger: {
          trigger: "#partners",
          start: "top 80%",
          end: "top -50%",
          toggleActions: "play none none reverse",
  
      }
  
  });
  
  tls4.fromTo("#paer",{y:10,opacity:0},{opacity:1,y:0,ease:"power1.inOut",duration:1,stagger:.3})
  },[])
    return (
        <section id="partners" className="bg-gray-100 py-20">
  
       
    

       <div id='paer'>
       <h2 
            className="text-3xl font-bold mb-8 text-center"
        
          >
            Partnering with China's Leading Universities
          </h2>
          <p 
            className="text-lg mb-10 text-center max-w-3xl mx-auto"

          >
            We collaborate with prestigious universities across China, providing students with access to top-notch education and opportunities.
          </p>
          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 "
           
          >
           
          </div>
          <div 
            className="text-center"
        
          >
            <Link href="#" className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition duration-300 inline-block">
              Explore What Parents and Students Say
            </Link>
          </div>
       </div>
   
       
        
 
      </section>
    );
}

export default Partners;
