import React, { useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const Mission = () => {
    const missionpara=" We are passionate about connecting Moroccan students with world-class opportunities in China. Through personalized support and partnerships with leading universities, we ensure that your educational journey is seamless and successful. From application to settling in, we're with you every step of the way."
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        const tls3 = gsap.timeline({
            scrollTrigger: {
                trigger: "#aboutcont",
                start: "top 80%",
                end: "top -50%",
                toggleActions: "play none none reverse",

            }

        });

        tls3.fromTo("#mission1",{x:-20,opacity:0},{x:0,opacity:1,ease:"power1.inOut",duration:1},"animmission")
        .fromTo("#mission2",{x:20,opacity:0},{x:0,opacity:1,ease:"power1.inOut",duration:1},"animmission")
    }, [])
    return (<div id='about-us'>
        <section id="about" className="py-20">
            <div  className="container mx-auto px-4">

                <div id='aboutcont' className="flex flex-col md:flex-row items-center">
                    <div
                        id='mission1'
                        className="md:w-1/2 mb-10 md:mb-0"

                    >
                        <h2
                            className="text-3xl font-bold mb-8 text-center"

                        >
                            Our Mission: Bridging the Gap Between Morocco and China
                        </h2>
                        <p className="text-lg mb-6">
                            {missionpara}   
                        </p>
                        <Link href="#services" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 inline-block">
                            Explore Our Services
                        </Link>
                    </div>
                    <div id='mission2'
                        className="md:w-1/2 md:pl-10"

                    >
                        <img
                            src="./about.jpg"
                            alt="Team photo"
                            id='aboutimg'
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}

export default Mission;
