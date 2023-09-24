import React, { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse';
import { FaBars, FaCompass, FaPowerOff } from "react-icons/fa6";
import { FaTachometerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar() {
     const [openA, setOpenA] = useState(false);
     const [openB, setOpenB] = useState(false);
     const [openC, setOpenC] = useState(false);

     const [isOpen,setisOpen] = useState(false);

  return (
    <>
     <div className="top_header" style={(isOpen) ? {paddingLeft:'70px'} : {paddingLeft:'300px'}}>
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
                         <li><FaPowerOff></FaPowerOff></li>
                    </ul>
               </div>
          </div>
     </div>
     <div className={(isOpen) ? 'sidebar isopen' : 'sidebar'}>
          <div className="logo border-bottom">
               <a href="#"><img src={require('../image/logo192.png')} width={35} /> <span className='logo_name'>React</span> </a>
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
                         <Link to="/">
                              <FaTachometerAlt></FaTachometerAlt>
                              <span>Dashboard</span>
                         </Link>
                    </li>
                    <li>
                         <a href="javascript:void(0)" onClick={() => setOpenA(!openA)} aria-controls="example-collapse-text">
                              <FaCompass></FaCompass>
                              <span>Course</span>
                         </a>
                         <Collapse in={openA}>
                              <ul className="sub_menu ps-0" >
                                   <li><Link to="addCourse">Add Course</Link></li>
                                   <li><Link to="viewCourse">View Course</Link></li>
                              </ul>
                         </Collapse>
                    </li>
                    <li>
                         <a href="javascript:void(0)" onClick={() => setOpenB(!openB)}>
                              <FaCompass></FaCompass>
                              <span>Course Contents</span>
                         </a>
                         <Collapse in={openB}>
                              <ul className="sub_menu ps-0">
                                   <li><Link to="addContent">Add Contents</Link></li>
                                   <li><Link to="viewContent">View Contents</Link></li>
                              </ul>
                         </Collapse>
                    </li>
                    <li>
                         <a href="javascript:void(0)" onClick={() => setOpenC(!openC)}>
                              <FaCompass></FaCompass>
                              <span>Admissions</span>
                         </a>
                         <Collapse in={openC}>
                              <ul className="sub_menu ps-0">
                                   <li><Link to="addStudent">Add Student</Link></li>
                                   <li><Link to="viewStudent">View Student</Link></li>
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