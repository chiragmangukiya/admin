import React, { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse';
import { FaBars, FaPowerOff, FaPlus, FaEye, FaUserTie, FaUserGraduate, FaRegSnowflake, FaMicrochip } from "react-icons/fa6";
import { FaTachometerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar() {
     const [openA, setOpenA] = useState(false);
     const [openB, setOpenB] = useState(false);
     const [openC, setOpenC] = useState(false);
     const [openD, setOpenD] = useState(false);

     const [isOpen,setisOpen] = useState(false);

     // ====================== log out ======================

     const handleLogout = () => {
          localStorage.removeItem('token');
          window.location = '/';
     };

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
                         <li onClick={handleLogout}><FaPowerOff></FaPowerOff></li>
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
                         <Link to="/dashboard">
                              <FaTachometerAlt></FaTachometerAlt>
                              <span>Dashboard</span>
                         </Link>
                    </li>
                    <li>
                         <a href="javascript:void(0)" onClick={() => setOpenD(!openD)} aria-controls="example-collapse-text">
                              <FaUserTie></FaUserTie>
                              <span>Manage User</span>
                         </a>
                         <Collapse in={openD}>
                              <ul className="sub_menu ps-0" >
                                   <li><Link to="adduser"><FaPlus className='me-2'></FaPlus> Add User</Link></li>
                                   <li><Link to="viewuser"><FaEye className='me-2'></FaEye>View User</Link></li>
                              </ul>
                         </Collapse>
                    </li>
                    <li>
                         <a href="javascript:void(0)" onClick={() => setOpenA(!openA)} aria-controls="example-collapse-text">
                              <FaMicrochip></FaMicrochip>
                              <span>Manage Course</span>
                         </a>
                         <Collapse in={openA}>
                              <ul className="sub_menu ps-0" >
                                   <li><Link to="addCourse"><FaPlus className='me-2'></FaPlus>Add Course</Link></li>
                                   <li><Link to="viewCourse"><FaEye className='me-2'></FaEye>View Course</Link></li>
                              </ul>
                         </Collapse>
                    </li>
                    <li>
                         <a href="javascript:void(0)" onClick={() => setOpenB(!openB)}>
                              <FaRegSnowflake></FaRegSnowflake>
                              <span>Course Contents</span>
                         </a>
                         <Collapse in={openB}>
                              <ul className="sub_menu ps-0">
                                   <li><Link to="addContent"><FaPlus className='me-2'></FaPlus>Add Contents</Link></li>
                                   <li><Link to="viewContent"><FaEye className='me-2'></FaEye>View Contents</Link></li>
                              </ul>
                         </Collapse>
                    </li>
                    <li>
                         <a href="javascript:void(0)" onClick={() => setOpenC(!openC)}>
                              <FaUserGraduate></FaUserGraduate>
                              <span>Admissions</span>
                         </a>
                         <Collapse in={openC}>
                              <ul className="sub_menu ps-0">
                                   <li><Link to="addStudent"><FaPlus className='me-2'></FaPlus>Add Student</Link></li>
                                   <li><Link to="viewStudent"><FaEye className='me-2'></FaEye>View Student</Link></li>
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