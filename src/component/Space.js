import React from 'react'
import Explore from '../assets/Group.png'
import '../styles/Space.css'

function Space() {
  return (
        <div className='space'>
            <div className='section1'>
              <div>
                <h3>S0, YOU WANT TO TRAVEL TO</h3> 
                <h1>SPACE</h1>    
                <p>Let’s face it; if you want to go to space, you might as well
                    genuinely go to outer space and not hover kind of on the 
                    edge of it. Well sit back, and relax because we’ll give you a 
                    truly out of this world experience!
                </p> 
              </div>
            </div>
            <div className='section2'>
               <img src={Explore}/> 
            </div>
        </div>
  )
}

export default Space