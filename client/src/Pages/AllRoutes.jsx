import React from 'react'
import Home from './Home/Home'
import { Routes, Route, Link } from 'react-router-dom'
function AllRoutes() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                
            </Routes>
        </>
    )
}

export default AllRoutes
