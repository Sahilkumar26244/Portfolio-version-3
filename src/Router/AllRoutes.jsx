import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Main_Page/Home'
import AllProjects from '../Sub_Pages/AllProjects'

function AllRoutes() {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/allProjects" element={<AllProjects/>}/>
    </Routes>
    </div>
  )
}

export default AllRoutes