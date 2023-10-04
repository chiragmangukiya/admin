import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { FaRegTrashCan, FaPenToSquare } from "react-icons/fa6";
import Modal from 'react-bootstrap/Modal';
import { BsCheckCircle } from "react-icons/bs";


function ViewCourse() {

  const token = localStorage.getItem('token')
  const [allCourse,setallCourse]=useState([]);
  const [search, setsearch] = useState('');
  const [editBox,setEditBox]=useState(false)

  const [editId,seteditId]=useState('');
  const [editName,seteditName]=useState('');

  const [modalShow, setModalShow] = useState(false);


    useEffect(()=>{
        axios.get("http://localhost:5000/course/allcourse",{
          headers: {
            'Authorization': token
          }
        })
        .then((res)=>{
          // console.log(res.data);
          setallCourse(res.data.data)         
        })

    },[allCourse])

    const searchCourse = () => {
      axios.get(`http://localhost:5000/course/searchcourse?search=${search}`,{
        headers: {
          'Authorization': token
        }
      })
      .then((res)=>{
        // console.log(res.data);
        setallCourse(res.data.data)         
      })
    }

    const dltCourse = (dltId) => {
      axios.delete(`http://localhost:5000/course/coursedelete/${dltId}`,{
        headers: {
          'Authorization': token
        }
      })
      .then((res)=>{
        // console.log(res.data);
        const posts = allCourse.filter((item) => item._id !== dltId);
        setallCourse(posts)       
      })
    }

    const openUpdate = (upId) => {
      seteditId(upId)
      setEditBox(true)

      axios.get(`http://localhost:5000/course/viewsinglecourse/${upId}`,{
        headers: {
          'Authorization': token
        }
      })
      .then((res)=>{
        // console.log(res.data); 
        seteditName(res.data.data.coursename)     
      })
    }

    const updateCourse = () => {

      axios.put(`http://localhost:5000/course/updatecourse`,{
        course_id:editId,
        coursename:editName
      },{
        headers: {
          'Authorization': token
        }
      })
      .then((res)=>{
        // console.log(res.data); 
        const newData=[...allCourse];
        newData[editId]=res.data;
        setallCourse(newData)
        setEditBox(false)  
        setModalShow(true)
      })
    }

  return (
    
    <main>
        <div className="page_title d-flex justify-content-between align-items-center">
               <h3 className='mb-0'>View Course</h3>
               <div className='breadcrumb mb-0'>
                    <Link to='/'>Home</Link>
                    <Link className='active'>View Course</Link>
               </div>
          </div>

          <div className="box col-8 mx-auto mt-5">
               <div className="input_frm bg-white shadow rounded-4">
                    <div className="p-5">
                        <div className="frm_title fs-4 text-center mb-3 fw-bold">All Course</div>
                        <div className="input-group mb-3">
                          <input type="text" className="form-control txt_box" placeholder="Search course name" value={search} onChange={(e)=>{setsearch(e.target.value); searchCourse();}} />
                        </div>
                        <div className="table-responsive">
                          <table class="table">
                            <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">Course Name</th>
                                <th scope="col" className='text-center'>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {
                                allCourse.map((item,ind)=>{
                                  return(
                                    <tr key={ind}>
                                      <th scope="row">{ind+1}</th>
                                      <td>{item.coursename}</td>
                                      <td className='text-center'>
                                          <FaPenToSquare className='text-primary me-3'  onClick={(e)=>{openUpdate(item._id)}}></FaPenToSquare>
                                          <FaRegTrashCan className='text-danger' onClick={(e)=>{dltCourse(item._id)}}></FaRegTrashCan>
                                      </td>
                                    </tr>
                                  )
                                })
                              }
                            </tbody>
                          </table>
                        </div>
                    </div>
               </div>
          </div>

          <Modal 
            size="md"
            centered
            className='success_modal'
            show={editBox} 
            onHide={() => setEditBox(false)}
          >
            <Modal.Body className='input_frm'>
              <Modal.Header closeButton>
              </Modal.Header>
                  <div className="frm_title fs-4 text-center mb-3 fw-bold">Update Course Name</div>
                  <div className="input-group mb-3">
                      <input type="text" className="form-control txt_box" value={editName} onChange={(e)=>seteditName(e.target.value)} />
                  </div>
                  <button type="button" className='btn btn-login mt-3 d-block mx-auto' onClick={updateCourse}>Update</button>
            </Modal.Body>
          </Modal>

          <Modal 
            size="md"
            centered
            className='success_modal'
            show={modalShow} 
            onHide={() => setModalShow(false)}
          >
            <Modal.Body>
              <Modal.Header closeButton></Modal.Header>
              <p className='check_icon'><BsCheckCircle></BsCheckCircle></p>
              <h1 className='text-center'>
                    Success!
              </h1>
              <p className='text-center text-muted'>
                Course successfully Updated...!
              </p>
            </Modal.Body>
          </Modal>

    </main>
  )
}

export default ViewCourse