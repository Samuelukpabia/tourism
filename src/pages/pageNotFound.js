import React from 'react'
import '../styles/PNF.css'
import { motion } from 'framer-motion'


function pageNotFound() {
  return (
    <motion.div className='pnf'
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{opacity: 1, x: "-100%", transition: {duration: 0}}}
    >
      <div>
      <h1>Sorry...</h1>
      <h2>seams you've enterd a wrong path</h2>
      <h2>enter a correct path or choose from the above link </h2>
      </div>
      
    </motion.div>
  )
}

export default pageNotFound