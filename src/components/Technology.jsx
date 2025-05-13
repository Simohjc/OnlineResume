import { RiHtml5Line } from 'react-icons/ri';
import { SiCss3 } from 'react-icons/si';
import { SiTailwindcss} from 'react-icons/si';
import { SiJavascript} from 'react-icons/si';
import { RiReactjsLine} from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { SiPostman } from "react-icons/si";
import { motion } from 'framer-motion';


const motionLink = motion.a

const iconVariants = (duration) =>({
        initial: { y: -10 },
        animate: { 
          y: [10, -10],
          transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }
        },
});




const Technology = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 
                  className="my-2 text-center text-4xl"
                  initial={{ opacity: 0, y: -100 }}
                  transition={{ duration: 1.5 }}
                  whileInView={{ opacity: 1, y: 0 }}
      >
                Technologies
      </motion.h1>
      <motion.div 
             className="flex flex-wrap items-center justify-center gap-4 mt-8"
             whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
      >

        <motion.div variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
           <a href="https://html.com/"  target='_blank' rel="noopener noreferrer" >
             <RiHtml5Line  className="h-20 w-20 text-[#e34f26] text-7xl" />
             <h2 className="mt-4 text-center text-xl">HTML5</h2>
           </a>
        </motion.div>
        <motion.div variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
           <a href="https://css-tricks.com/" target='_blank' rel="noopener noreferrer">
            <SiCss3  className="h-20 w-20 text-[#0277BD] text-7xl" />
            <h2 className="mt-4 text-center text-xl">CSS3</h2>
           </a>
        </motion.div>
        <motion.div variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
          <a href="https://tailwindcss.com/" target='_blank' rel="noopener noreferrer">
            <SiTailwindcss className="h-20 w-20 text-[#00ACC1] text-7xl" />
            <h2 className="mt-4 text-center text-xl">Tailwind</h2>
          </a>
        </motion.div>
        <motion.div variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
           <a href="https://www.javascript.com/" target='_blank' rel="noopener noreferrer">
            <SiJavascript className="h-20 w-20 text-[#F7DF1E] text-7xl" />
            <h2 className="mt-4 text-center text-xl">JavaScript</h2>
           </a>
        </motion.div>

        <motion.div variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
          <a href="https://react.dev/" target='_blank' rel="noopener noreferrer">
            <RiReactjsLine className="h-20 w-20 text-cyan-400 text-7xl" />
            <h2 className="mt-4 text-center text-xl">Reactjs</h2>
         </a>
        </motion.div>
         <motion.div variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
           <a href="https://nodejs.org/en" target='_blank' rel="noopener noreferrer">
            <FaNodeJs className="h-20 w-20 text-[#388E3C] text-7xl" />
            <h2 className="mt-4 text-center text-xl">Nodejs</h2>
           </a>
        </motion.div>
        <motion.div variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
          <a href="https://www.mongodb.com/" target='_blank' rel="noopener noreferrer">
            <SiMongodb className="h-20 w-20 text-[#58AA50] text-7xl" />
            <h2 className="mt-4 text-center text-xl">MongoDb</h2>
          </a>
        </motion.div>

        <motion.div variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
           <a href="https://www.postman.com/" target='_blank' rel="noopener noreferrer">
            <SiPostman className="h-20 w-20 text-[#F36933] text-7xl" />
            <h2 className="mt-4 text-center text-xl">Postman</h2>
          </a>
        </motion.div>

      </motion.div>
    </div>
  )
};

export default Technology;
