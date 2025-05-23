import aboutMePicture from "../assets/heropicture1.jpeg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">About <span className="text-neutral-500">Me</span></h1>
        <div className="flex flex-wrap">
            <motion.div 
                       className="w-full lg:w-1/2 lg:p-8"
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        whileInView={{ opacity: 1, x: 0 }}
            >
                <div className="flex items-center justify-center">
                    <img src={aboutMePicture} alt="Mohamed El Khair" className="rounded-2xl"/>
                </div>
            </motion.div>
            <motion.div 
                       className="w-full lg:w-1/2"
                       whileInView={{ opacity: 1, x: 0 }}
                       initial={{ opacity: 0, x: 100 }}
                       transition={{ duration: 0.5 }}
            >
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6 ml-7">{ABOUT_TEXT}</p>
                    </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About
