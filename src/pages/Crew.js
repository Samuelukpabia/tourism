import React, {useState} from 'react'
import '../styles/Crew.css'
import crewBg from '../BackgroundImgs/crew.jpg'
import data from '../component/crewData.js'
import { motion } from 'framer-motion'


function Crew() {
  const [value, setValue] = useState(0)
  const [pages, setPages] = useState(data)

  const {title, name, desc, img, btn} = pages[value]


  return (
    <motion.div className='crew' style={{backgroundImage: `url(${crewBg})`}}
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{opacity: 1, x: "-100%", transition: {duration: 0}}}
    >
      
      <div className='container-crew'>
        <div className='text'>
          <span>02</span> <p>MEET YOUR CREW</p>
        </div>

        <div className='data-container-crew'>
          <div className='data-crew'>
            <div className='fff'>
              <h3>{title}</h3>
              <h1>{name}</h1>
              <p>{desc}</p>
            </div>
           
             
            <div className='btn-container-crew'>
             {pages.map((page, index)=>{
              return <div key={page.id} onClick={()=>{
                setValue(index)
              }} className={`btn-crew ${value === index && `active` }`}>
                {page.btn}
              </div>
             })}
            </div>
          </div>

          <div className='img-container-crew'>
            <img src={img} className={`img ${value === (1) && `img-1` }`}/>
            <div className="line-crew"></div>
          </div>

        </div>
      </div>
    </motion.div>
  )
}

export default Crew