import React from 'react'
import '../styles/Home.css'
import homeBg from '../BackgroundImgs/bit.png'
import Space from '../component/Space.js'
import { motion } from 'framer-motion'


function Home() {
  return (
    <motion.div className='home' style={{backgroundImage: `url(${homeBg})`}}
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{opacity: 1, x: "-100%", transition: {duration: 0}}}
    >
      <div className='container'>
        
        <div className='text'>
          <span>00</span> <p>WELLCOM TO HOME</p>
        </div>

        <div><Space/></div>

      </div>
    </motion.div>
  )
}

export default Home