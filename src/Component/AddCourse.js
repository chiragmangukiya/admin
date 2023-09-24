import React from 'react'
import { Link } from 'react-router-dom'

function AddCourse() {
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
                          <input type="text" className="form-control txt_box" placeholder="Course Name"  />
                        </div>
                        <button type="submit" className="btn btn-login mt-3 d-block ">Add Course</button>
                    </div>
               </div>
          </div>

      </main>
    </>
  )
}

export default AddCourse