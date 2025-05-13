import { SiCreativetechnology } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import myResume from "../assets/resume.pdf";




const navbar = () => {
  return (
  <nav className="mb-20 flex items-center justify-between py-5">
        <motion.div     
                animate={{
                scale: [1, 2, 1, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "20%", "20%", "0%"],
                 }}
                transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.9, 0.9, 0.8, 2],
                repeat: Infinity,
                repeatDelay: 2,
                }}
                  className="flex flex-shrink-0 items-center"
      >
      <SiCreativetechnology   className="h-30 w-35" /><h1 className="text-2xl">ME</h1>
    </motion.div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a 
                href={myResume}
                target="_blank"
                rel="noopener noreferrer" 
                download="Mohamed_El_Khair_Resume.pdf" 
                className="text-gray-300 hover:text-blue-400  hover:underline transition-colors"
              >
                Resume
              </a>
      <a 
           href="https://github.com/Simohjc" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-xl hover:text-emerald-400 hover:-translate-y-1 transition-all"
        >
             <FaGithub className="h-6 w-6 text-[#B6C9D6]" />
      </a>
      <a
            href="https://www.linkedin.com/in/mohamed-elkhair/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-xl hover:text-emerald-400 hover:-translate-y-1 transition-all"
        >
             <FaLinkedin className="h-6 w-6 text-[#0288D1]" />
      </a>
    </div>
  </nav>
  )
}

export default navbar;
