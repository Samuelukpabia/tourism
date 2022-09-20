import React, { useState } from 'react'
import logo from '../assets/Group 2 (1).svg'
import '../styles/Navbar.css'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import links from '../component/navData.js'

function NavBar() {


  const [openBar, setOpenbar] = useState(false)

  const toggleOn = () => {
    setOpenbar(true)
  }
  const toggleOff = () => {
    setOpenbar(false)
  }

  return ( 
    <div className='navbar'>
        <div className='leftside'>
            <img className='logo' src={logo} alt='logo'/>
        </div>
        <div className='rightside'>
          <div className='links'>         
            {links.map((link, key)=>{
            const {title, hrf, count} = link
              return <Link to={hrf} key={key} className='llll' >
                <span>{count}</span>{title}</Link>
            })}
            
          </div>          
        </div>
        <button onClick={toggleOn}> <FaBars  className='menubtn'/> </button>
            
            <div className='hiddenLinks'  id={openBar ? "open" : "close"}>
              <div className='cancel'>
              <button onClick={toggleOff}><FaTimes className='timesbtn'/></button>
              </div>
          
                {links.map((link, key)=>{
                      const {title, hrf, count} = link
                    return <Link to={hrf} key={key} className='llll' onClick={toggleOff}>
                      <span>{count}</span>{title}</Link>
                })}
                 
            </div>
    </div>
  )
}

export default NavBar