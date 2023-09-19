import React, { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse';
import { FaBars, FaCompass, FaSistrix,FaRegBell,FaRegComments } from "react-icons/fa6";
import { FaTachometerAlt } from "react-icons/fa";

function Sidebar() {
     const [openA, setOpenA] = useState(false);
     const [openB, setOpenB] = useState(false);

     const [isOpen,setisOpen] = useState(false);

  return (
    <>
     <div className="top_header" style={(isOpen) ? {marginLeft:'70px'} : {marginLeft:'300px'}}>
          <div className="row m-0">
               <div className="col-auto">
                    <ul className='top_main_menu d-flex p-0 m-0'>
                         <li className='bar_icon' onClick={()=>{setisOpen(!isOpen)}}><FaBars></FaBars></li>
                         <li><a href="#">Home</a></li>
                         <li><a href="#">Contact</a></li>
                    </ul>
               </div>
               <div className="col-auto ms-auto">
                    <ul className='right_icon d-flex p-0 m-0'>
                         <li><FaSistrix></FaSistrix></li>
                         <li><FaRegBell></FaRegBell></li>
                         <li><FaRegComments></FaRegComments></li>
                    </ul>
               </div>
          </div>
     </div>
     <div className={(isOpen) ? 'sidebar isopen' : 'sidebar'}>
          <div className="logo border-bottom">
               <a href="#"><img src={require('../image/logo192.png')} width={35} /> <span className='logo_name'>React App</span> </a>
          </div>
          <div className="profile border-bottom d-flex flex-wrap align-items-center">
               <div className="d-flex align-items-center">
                    <img src={require('../image/kiran deshpande.jpeg')} className='img-fit pro_img' alt="" />
                    <span className='p_name text-truncate'>Chirag Mangukiya</span>
               </div>
          </div>
          <nav>
               <ul className='main_menu p-0'>
                    <li className='active'>                         
                         <a href="#">
                              <FaTachometerAlt></FaTachometerAlt>
                              <span>Dashboard</span>
                         </a>
                    </li>
                    <li>
                         <a href="#" onClick={() => setOpenA(!openA)} aria-controls="example-collapse-text">
                              <FaCompass></FaCompass>
                              <span>Menu Item 1</span>
                         </a>
                         <Collapse in={openA}>
                              <ul className="sub_menu ps-0" >
                                   <li><a href="#">Sub Item 1</a></li>
                                   <li><a href="#">Sub Item 2</a></li>
                                   <li><a href="#">Sub Item 3</a></li>
                              </ul>
                         </Collapse>
                    </li>
                    <li>
                         <a href="#" onClick={() => setOpenB(!openB)}>
                              <FaCompass></FaCompass>
                              <span>Menu Item 2</span>
                         </a>
                         <Collapse in={openB}>
                              <ul className="sub_menu ps-0">
                                   <li><a href="#">Sub Item 1</a></li>
                                   <li><a href="#">Sub Item 2</a></li>
                                   <li><a href="#">Sub Item 3</a></li>
                              </ul>
                         </Collapse>
                    </li>
               </ul>
          </nav>
     </div>
    </>
  )
}

export default Sidebar