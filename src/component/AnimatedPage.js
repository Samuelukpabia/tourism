import React from 'react'
import Home from '../pages/Home'
import Destination from '../pages/Destination'
import Crew from '../pages/Crew'
import Technology from '../pages/Technology'
import PageNotFound from '../pages/pageNotFound'
import { Routes, Route, useLocation} from 'react-router-dom'

import {AnimatePresence} from 'framer-motion'


function AnimatedPage() {
    const location = useLocation()
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home/>} />
            <Route path='/destination' element={<Destination/>} />
            <Route path='/crew' element={<Crew/>} />
            <Route path='/technology' element={<Technology/>} />
            <Route path='*' element={<PageNotFound/>} />
        </Routes>
    </AnimatePresence>
    
  )
}

export default AnimatedPage