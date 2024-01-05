import './LeftSidebar.css';
import React from 'react'
import {AiOutlineHome} from 'react-icons/ai';
import {MdOutlineExplore, MdOutlineSubscriptions} from 'react-icons/md';



function LeftSidebar() {
  return (
    <div className='container-left_sidebar'>
      <div className="icon-sidebar-div">
      <AiOutlineHome size={22} className='icon-sidebar'/>
        <div className="text-sidebar-icon">Home</div>
      </div>

      <div className="icon-sidebar-div">
      <MdOutlineExplore size={22} className='icon-sidebar'/>
        <div className="text-sidebar-icon">Explore</div>
      </div>

      <div className="icon-sidebar-div">
      <MdOutlineSubscriptions size={22} className='icon-sidebar'/>
        <div className="text-sidebar-icon" style={{fontSize:'12px'}}>Subscriptions</div>
      </div>

      <div className="icon-sidebar-div">
      <MdOutlineSubscriptions size={22} className='icon-sidebar'/>
        <div className="text-sidebar-icon" style={{fontSize:'12px'}}>Subscriptions</div>
      </div>
    </div>
  )
}

export default LeftSidebar
