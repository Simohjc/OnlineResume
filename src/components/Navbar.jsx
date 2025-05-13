import { SiCreativetechnology } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";




const navbar = () => {
  return (
  <nav className="mb-20 flex items-center justify-between py-5">
    <motion.div   whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => console.log('hover started!')} className="flex flex-shrink-0 items-center">
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
