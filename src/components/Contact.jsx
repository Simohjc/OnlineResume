import { CONTACT } from "../constants";
import { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import myResume from "../assets/resume.pdf";
import Whatsapp from "./Whatsapp";
import { motion } from "framer-motion";


const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
  };


const Contact = () => {

    useEffect(() => {
        // Auto-update copyright year
        document.getElementById('year').textContent = new Date().getFullYear();
      }, []);

  return (
    <footer className=" text-white py-12 px-4 md:px-8">
    <div className="max-w-6xl mx-auto">
      {/* Main Footer Content */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
        {/* Logo */}
        <motion.div 
              className="text-2xl font-bold"
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, x: 0 }}
        >
           <a href="Hero.jsx" className="hover:text-blue-400 transition-colors">
                 Mohamed El Khair
           </a>
        </motion.div>

        {/* Navigation Links */}
        <motion.nav 
                      className="flex flex-col md:flex-row gap-4 md:gap-6"
                      initial="hidden"
                      animate={open ? "visible" : "hidden"}
                      variants={menuVariants}
                      transition={{ type: "tween", duration: 4 }}
        >
          <ul className="flex flex-wrap justify-center gap-4 md:gap-6">
            <li>
              <a 
                href={myResume}
                target="_blank"
                rel="noopener noreferrer" 
                download="Mohamed_El_Khair_Resume.pdf" 
                className="text-gray-300 hover:text-blue-400  hover:underline transition-colors"
              >
                Resume
              </a>
            </li>
          </ul>
        </motion.nav>
        {/* Social Links */}
        <motion.div 
                className="flex gap-4 md:gap-6"
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 2 }}
                whileInView={{ opacity: 1, x: 0 }}
        >
          <a 
            href="https://github.com/Simohjc" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-xl hover:text-emerald-400 hover:-translate-y-1 transition-all"
          >
            <FaGithub className="text-[#B6C9D6]"/>
          </a>
          <a 
            href="https://www.linkedin.com/in/mohamed-elkhair/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-xl hover:text-emerald-400 hover:-translate-y-1 transition-all"
          >
            <FaLinkedin className="text-[#0288D1]"/>
          </a>
        </motion.div>
      </div>

        {/* Contact Information */}
         <div className="border-b border-neutral-900">
            <div className="flex justify-center items-center">
                <motion.span 
                       className=" text-center text-4xl  bg-gradient-to-r from-blue-400 via-slate-500 to-purple-700 bg-clip-text  tracking-tight text-transparent"
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2.5}}
                >
                    Get in Touch
                </motion.span>
            </div >
           <div className="text-center tracking-tighter">
               <p className="text-neutral-400">{CONTACT.address}</p>
               <a href={`mailto:${CONTACT.email}`} className="underline text-blue-400"> {CONTACT.email}</a>
               <div className="flex justify-center items-center gap-2 mb-6">
                                <Whatsapp />
                               <span>{CONTACT.phoneNo}</span>
               </div>
          </div>
        </div>

      {/* Copyright Section */}
      <div className="pt-8 border-t border-gray-700 text-center text-gray-400 text-sm flex flex-col gap-1">
        <p>&copy; <span id="year"></span> Mohamed El Khair. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
};


export default Contact;
