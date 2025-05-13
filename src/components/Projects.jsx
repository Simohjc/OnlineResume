import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
       <motion.h1 
                  className="my-20 text-center text-4xl"
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5 }}
                    whileInView={{ opacity: 1, y: 0 }}
        >
            Projects
        </motion.h1>
       <div>
            {PROJECTS.map((project, index) => (
                <div key={index} className="mb-8 flex flex-wrap gap-10 lg:justify-center">
                      <motion.div 
                                   className="w-full lg:w-1/4"
                                    initial={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 1 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                        >
                           <img 
                                className="mb-6 rounded h-55 w-90 transition-transform duration-300 transform hover:scale-105"
                                width={150} 
                                height={150} 
                                src={project.image} 
                                alt={project.title}
                             />
                      </motion.div>
                      <motion.div 
                                   className="w-full max-w-xl lg:w-3/4"
                                    initial={{ opacity: 0, x: 100 }}
                                    transition={{ duration: 1 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                       >
                             <h6 className="mb-2 font-semibold">
                                   {project.title}
                             </h6>
                             <p className="mb-4 text-neutral-400">{project.description}</p>
                                   {project.technologies.map((tech, index) => (
                              <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">{tech}</span>
                             ))}
                      </motion.div>
                </div>
            ))}
       </div>
    </div>
  )
}

export default Projects
