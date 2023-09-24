import React from 'react'
import { Link } from 'react-router-dom'

function Addcontents() {
  return (
    <>
      <main>
          <div className="page_title d-flex justify-content-between align-items-center">
               <h3 className='mb-0'>Add Course Contents</h3>
               <div className='breadcrumb mb-0'>
                    <Link to='/'>Home</Link>
                    <Link className='active'>Add Contents</Link>
               </div>
          </div>

          <div className="box col-6 mx-auto mt-5">
               <div className="input_frm bg-white shadow rounded-4">
                    <div className="p-5">
                        <div className="frm_title fs-4 text-center mb-3 fw-bold">Add Course Contents</div>
                        <div className="input-group mb-3">
                          <select class="form-select txt_box" aria-label="Default select example">
                            <option selected>Select Course</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                        <div className="input-group mb-3">
                          <input type="text" className="form-control txt_box" placeholder="Contents"  />
                        </div>
                        <div className="input-group mb-3">
                          <input type="text" className="form-control txt_box" placeholder="Fees"  />
                        </div>
                        <div className="input-group mb-3">
                          <input type="text" className="form-control txt_box" placeholder="Durations"  />
                        </div>
                        <button type="submit" className="btn btn-login mt-3 d-block mx-auto">Add Contents</button>
                    </div>
               </div>
          </div>

      </main>
    </>
  )
}

export default Addcontents