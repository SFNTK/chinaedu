"use client"
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Why = () => {
  const whypara="   China is not only one of the world's largest economies but also home to some of the most renowned universities in Asia. Moroccan students benefit from high-quality education, scholarships, and a rich cultural experience."
  gsap.registerPlugin(ScrollTrigger);
  useEffect(()=>{
    const tls4 = gsap.timeline({
      scrollTrigger: {
          trigger: "#why-china .container",
          start: "top 80%",
          end: "top -50%",
          toggleActions: "play none none reverse",
  
      }
  
  });
  tls4.fromTo(".whycards",{y:10,opacity:0},{opacity:1,y:0,ease:"power1.inOut",duration:1,stagger:.3},"animjourney2")
  .fromTo("#why-china .container h2",{y:10,opacity:0},{opacity:1,y:0,ease:"power1.inOut",duration:1},"animjourney2")
  .fromTo("#why-china .container p",{y:10,opacity:0},{opacity:1,y:0,ease:"power1.inOut",duration:1},"animjourney2")
  },[])
    return (
        <section id="why-china" className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 
            className="text-3xl font-bold mb-8 text-center"
       
          >
            Why Choose China for Your Studies?
          </h2>
          <p 
            className="text-lg mb-10 text-center max-w-3xl mx-auto"
            
          >
            {whypara}
          </p>
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            
          >
            {[
              { title: "Prestigious Universities", description: "Collaborating with top Chinese institutions.", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
              { title: "Affordable Education", description: "Scholarships and cost-effective programs.", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              { title: "Global Exposure", description: "A blend of academic rigor and cultural diversity.", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }
            ].map((item, index) => (
              <div key={index} className="whycards bg-white p-6 rounded-lg shadow-md" >
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path>
                  </svg>
                  {item.title}
                </h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <div 
            className="mt-12 text-center"
          
          >
            <img
              src="./Pasted-7.png"
              alt="Map of China highlighting key partner cities and universities"
              width={600}
              height={400}
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
        </div>
      </section>
    );
}

export default Why;
