import React, {useState} from 'react'
import '../styles/Des.css'
import data from '../component/desData.js'
import desBg from '../BackgroundImgs/des.jpg'
import { motion } from 'framer-motion'


function Destination() {

  const [value, setValue] = useState(0)
  const [pages, setPages] = useState(data)

  const {title, img, desc, kil, days} = pages[value]

  return (
    <motion.div className='destination' style={{backgroundImage: `url(${desBg})`}}
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{opacity: 1, x: "-100%", transition: {duration: 0}}}
    >

       <div className='container'>
        
        <div className='text'>
          <span>01</span> <p>PICK YOUR DESTINATION</p>
        </div>

        <div className='dataContainer'>
          <div className='img-container'>
            <img src={img}/>
          </div>

          <div className='data'>
            <div className='data-info'>
              <div className='btn-container'>
                {pages.map((page, index)=>{
                  return <button key={page.id} onClick={()=>{
                    setValue(index)}}
                    className={`title-btn ${index === value && 'active-btn'}`} >
                    {page.title} 
                  </button>
                })}
              </div>
              <h1>{title}</h1>
              <p>{desc}</p>
              <div className="line"></div>
              <div className='aveEst-container'>
                <div className='aveEst'>
                  <div className='one'>
                    <h6>AVE. DISTANCE</h6>
                    <h3>{kil}</h3>
                  </div>
                  <div className='two'>
                    <h6>EST. TRAVEL TIME</h6>
                    <h3>{days}</h3>
                  </div>
                </div>
                
              </div>
            </div>
            

          </div>

        </div>

      </div>

    </motion.div>
  )
}

export default Destination