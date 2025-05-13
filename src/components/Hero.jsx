import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/heropicture.jpeg";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap ">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                               className="pb-16 text-7xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 1 }}
                    >
                        Mohamed El Khair
                    </motion.h1>
                    <motion.span 
                          className="bg-gradient-to-r from-blue-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
                          initial={{ opacity: 0, x: -100 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 1.2 }}
                          >
                                        Software Developer
                    </motion.span>
                    <motion.p 
                          className="my-2 max-w-xl py-6 font-light tracking-tighter"
                          initial={{ opacity: 0, x: -100 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 1.5}}
                    >
                        {HERO_CONTENT}
                    </motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img 
                                src={profilePic} 
                                alt="Mohamed El Khair"  
                                className="h-100 w-100 rounded-full border-2 border-slate-500 object-cover shadow-lg transition-transform duration-300 ease-in-out hover:scale-105" 
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 1.7 }}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
