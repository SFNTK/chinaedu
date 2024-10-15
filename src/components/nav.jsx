"use client"
import React ,{ useState }from 'react';
import Link from 'next/link'
import { Menu } from 'lucide-react'
const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <header className="bg-blue-600 text-white sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            <img src='./logochina.png' style={{width:"80px"}}/>
          </Link>
          <div className="hidden md:flex space-x-4" style={{fontFamily:"DM Sans, sans-serif",fontWeight:"bold"}}>
            {['About Us', 'Why China', 'Partners', 'Testimonials', 'Contact'].map((item) => (
              <Link key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-red-400 transition duration-300">
                {item}
              </Link>
            ))}
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </button>
        </nav>
        {isMenuOpen && (
          <div 
           
            className="md:hidden bg-blue-500 p-4"
          >
            {['About Us', 'Why China', 'Partners', 'Testimonials', 'Contact'].map((item) => (
              <Link key={item} onClick={()=>{
                setIsMenuOpen(false)
              }} href={`#${item.toLowerCase().replace(' ', '-')}`} className="block py-2 hover:text-red-400 transition duration-300">
                {item}
              </Link>
            ))}
          </div>
        )}
      </header>
    );
}

export default Nav;
