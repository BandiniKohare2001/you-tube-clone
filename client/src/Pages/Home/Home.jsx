import React from 'react'
import './Home.css';
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar';
function Home() {
  return (
    <div className='container_pages_App'>
        <LeftSidebar />
      <div className="container2_pages_App">
        Home
      </div>
    </div>
  )
}

export default Home
