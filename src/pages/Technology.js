import React, {useState} from 'react'
import '../styles/Tec.css'
import tecBg from '../BackgroundImgs/tec.jpg'
import data from '../component/techData.js'
import { motion } from 'framer-motion'


function Technology() {
  const [value, setValue] = useState(0)
  const [pages, setPages] = useState(data)

  const {title,desc,btn,img} = pages[value]
  return (
    <motion.div className='technology' style={{backgroundImage: `url(${tecBg})`}}
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{opacity: 1, x: "-100%", transition: {duration: 0}}}
    >
      <div className='text-tech'>
        <span>03</span> <p>SPACE LAUNCH 101</p>
      </div> 
      
      <div className='container-tech'>
      <div className={`img-container-tech ${value === (2) && 'tech-tech'}`} 
      style={{backgroundImage: `url(${img})`}} ></div>


        <div className='data-tech'>
          <div className='btn-container-tech'>
            {pages.map((page, index)=>{
              return <div key={page.id} className={`btn-tech ${value === index && 'active-tech'}`}
              onClick={()=>{setValue(index)}}
              >{page.btn}</div>
            })}
          </div>
          <div className='tech-info'>
            <h6>THE TECHNOLOGY...</h6>
            <h1>{title}</h1>
            <p>{desc}</p>
          </div> 
        </div>

      </div>

    </motion.div>
  )
}

export default Technology