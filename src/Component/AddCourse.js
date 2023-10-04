import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import { BsCheckCircle } from "react-icons/bs";

function AddCourse() {

  const [addcourse,setCourse]=useState('');
  const token = localStorage.getItem('token')
  const [modalShow, setModalShow] = useState(false);

  const addCourse = () => {
      axios.post('http://localhost:5000/course/addcourse',{
        coursename: addcourse
      },{
        headers: {
          'Authorization': token
        }
      })
      .then((res)=>{
          // console.log(res.data.status);
          if(res.data.status === 'Course Add Successfully'){
            setModalShow(true)
            setCourse('');
          }
      })
  }

  return (
    <>
      <main>
          <div className="page_title d-flex justify-content-between align-items-center">
               <h3 className='mb-0'>Add Course</h3>
               <div className='breadcrumb mb-0'>
                    <Link to='/'>Home</Link>
                    <Link className='active'>Add Course</Link>
               </div>
          </div>

          <div className="box col-6 mx-auto mt-5">
               <div className="input_frm bg-white shadow rounded-4">
                    <div className="p-5">
                        <div className="frm_title fs-4 text-center mb-3 fw-bold">Add Course</div>
                        <div className="input-group mb-3">
                          <input type="text" className="form-control txt_box" placeholder="Course Name" value={addcourse} onChange={(e)=>{setCourse(e.target.value)}}  />
                        </div>
                        <button type="button" onClick={addCourse} className="btn btn-login mt-3 d-block mx-auto">Add Course</button>
                    </div>
               </div>
          </div>

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
                Course successfully added...!
              </p>
            </Modal.Body>
          </Modal>

      </main>
    </>
  )
}

export default AddCourse