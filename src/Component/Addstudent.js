import React from 'react'
import { Link } from 'react-router-dom'
import { FaTrashCan,FaPlus } from "react-icons/fa6";

function Addstudent() {
  return (
    <>
      <main>
          <div className="page_title d-flex justify-content-between align-items-center">
               <h3 className='mb-0'>Add Student</h3>
               <div className='breadcrumb mb-0'>
                    <Link to='/'>Home</Link>
                    <Link className='active'>Add Student</Link>
               </div>
          </div>

          <div className="box col-12 px-3 mt-3">
               <div className="input_frm bg-white shadow rounded-4">
                    <div className="p-4">
                        <div className="frm_title fs-4 text-center mb-4 fw-bold">New Admission</div>

                        <div className="tab_view">
                              <ul class="nav nav-tabs mb-5 justify-content-center" id="pills-tab" role="tablist">
                                   <li class="nav-item" role="presentation">
                                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="tab" data-bs-target="#pearsonal" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Student Information</button>
                                   </li>
                                   <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="tab" data-bs-target="#course" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Course Information</button>
                                   </li>
                                   <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="pills-contact-tab" data-bs-toggle="tab" data-bs-target="#faculty" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Faculty Information</button>
                                   </li>
                              </ul>
                              <div class="tab-content admission_form" id="pills-tabContent">
                                   <div class="tab-pane fade show active" id="pearsonal" tabindex="0">
                                        <div className="row">
                                             <div className="col-md-4">
                                                  <label className="form-label fw-bold">Surname</label>
                                                  <input type="text" className="form-control txt_box" />
                                             </div>
                                             <div className="col-md-4">
                                                  <label className="form-label fw-bold">Student Name</label>
                                                  <input type="text" className="form-control txt_box" />
                                             </div>
                                             <div className="col-md-4">
                                                  <label className="form-label fw-bold">Father Name</label>
                                                  <input type="text" className="form-control txt_box" />
                                             </div>
                                             <div className='mb-3'></div>
                                             <div className="col-md-3">
                                                  <label className="form-label fw-bold">Student Contact No</label>
                                                  <input type="text" className="form-control txt_box" />
                                             </div>                                             
                                             <div className="col-md-3">
                                                  <label className="form-label fw-bold">Whatsapp No</label>
                                                  <input type="text" className="form-control txt_box" />
                                             </div>
                                             <div className="col-md-3">
                                                  <label className="form-label fw-bold">Parent Contact No</label>
                                                  <input type="text" className="form-control txt_box" />
                                             </div>
                                             <div className="col-md-3">
                                                  <label className="form-label fw-bold">Whatsapp No</label>
                                                  <input type="text" className="form-control txt_box" />
                                             </div>
                                             <div className='mb-3'></div>
                                             <div className="col-md-4">
                                                  <label className="form-label fw-bold">Address</label>
                                                  <textarea class="form-control txt_box" rows="2"></textarea>
                                             </div>
                                             <div className="col-md-4">
                                                  <label className="form-label fw-bold">DOB</label>
                                                  <input type="date" className="form-control txt_box" />
                                             </div>
                                             <div className="col-md-4">
                                                  <label className="form-label fw-bold">Image</label>
                                                  <input type="file" className="form-control txt_box" />
                                             </div>
                                             <div className='mb-3'></div>
                                             <div className="col-md-4">
                                                  <label className="form-label fw-bold">Qualification</label>
                                                  <input type="text" className="form-control txt_box" />
                                             </div>
                                             <div className="col-md-4">
                                                  <label className="form-label fw-bold">Select Reference</label>
                                                  <select class="form-select txt_box" aria-label="Default select example">
                                                       <option selected>Select Reference</option>
                                                       <option value="1">One</option>
                                                       <option value="2">Two</option>
                                                       <option value="3">Three</option>
                                                  </select>
                                             </div>
                                             <div className="col-md-4">
                                                  <label className="form-label fw-bold">Reference Name</label>
                                                  <input type="text" className="form-control txt_box" />
                                             </div>
                                        </div>
                                   </div>
                                   <div class="tab-pane fade" id="course" tabindex="0">
                                        <div className="row">
                                             <div className="col-md-4">
                                                  <label className="form-label fw-bold">Course</label>
                                                  <select class="form-select txt_box" aria-label="Default select example">
                                                       <option selected>Select Course</option>
                                                       <option value="1">One</option>
                                                       <option value="2">Two</option>
                                                       <option value="3">Three</option>
                                                  </select>
                                             </div>
                                             <div className="col-md-4">
                                                  <label className="form-label fw-bold">Course Duration</label>
                                                  <input type="text" className="form-control txt_box" />
                                             </div>
                                             <div className="col-md-4">
                                                  <label className="form-label fw-bold">Daily Time</label>
                                                  <input type="text" className="form-control txt_box" />
                                             </div>
                                             <div className='mb-3'></div>
                                             <div className="col-md-12">
                                                  <label className="form-label fw-bold">Course Contents</label>
                                                  <textarea class="form-control txt_box" rows="2"></textarea>
                                             </div>
                                             <div className='mb-3'></div>
                                             <div className="col-md-3">
                                                  <label className="form-label fw-bold">Total Fees</label>
                                                  <input type="text" className="form-control txt_box" />
                                             </div>                                             
                                             <div className="col-md-3">
                                                  <label className="form-label fw-bold">Joining Data</label>
                                                  <input type="date" className="form-control txt_box" />
                                             </div>
                                             <div className="col-md-3">
                                                  <label className="form-label fw-bold">Ending Date</label>
                                                  <input type="date" className="form-control txt_box" />
                                             </div>
                                             <div className="col-md-3">
                                                  <label className="form-label fw-bold">Job Responsibility</label><br></br>
                                                  <input type="radio" className="form-check-input" name='job'/> Yes<br></br>
                                                  <input type="radio" className="form-check-input" name='job'/> No
                                             </div>
                                             <div className='mb-3'></div>
                                             
                                             <div className="col-md-12">
                                                  <label className="form-label fw-bold">Installment Details</label>
                                                  <div className="row">
                                                       <div className="col-5">
                                                            <input type="text" className="form-control txt_box" disabled/>
                                                       </div>
                                                       <div className="col-5">
                                                            <input type="number" className="form-control txt_box" />
                                                       </div>
                                                       <div className="col-2">
                                                            <button className='btn btn-login'><FaPlus></FaPlus></button>
                                                       </div>
                                                  </div>
                                                  <div className='mb-3'></div>
                                                  <div className="row">
                                                       <div className="col-5">
                                                            <input type="text" className="form-control txt_box" />
                                                       </div>
                                                       <div className="col-5">
                                                            <input type="date" className="form-control txt_box" />
                                                       </div>
                                                       <div className="col-2">
                                                            <button className='btn btn-login bg-danger'><FaTrashCan></FaTrashCan></button>
                                                       </div>
                                                  </div>
                                             </div>                                             
                                        </div>
                                   </div>
                                   <div class="tab-pane fade" id="faculty" tabindex="0">
                                        <div className="row">
                                             <div className="col-md-4">
                                                  <label className="form-label fw-bold">Select Faculty</label>
                                                  <select class="form-select txt_box" aria-label="Default select example">
                                                       <option selected>Select Faculty</option>
                                                       <option value="1">One</option>
                                                       <option value="2">Two</option>
                                                       <option value="3">Three</option>
                                                  </select>
                                             </div>
                                             <div className="col-md-4">
                                                  <label className="form-label fw-bold">Batch Time</label>
                                                  <select class="form-select txt_box" aria-label="Default select example">
                                                       <option selected>Select Batch</option>
                                                       <option value="1">One</option>
                                                       <option value="2">Two</option>
                                                       <option value="3">Three</option>
                                                  </select>
                                             </div>
                                             <div className="col-md-4">
                                                  <label className="form-label fw-bold">Running Topic</label>
                                                  <input type="text" className="form-control txt_box" />
                                             </div>
                                             <div className='mb-3'></div>
                                             <div className="col-md-4">
                                                  <label className="form-label fw-bold">PC / Laptop</label><br></br>
                                                  <input type="radio" className="form-check-input" name='device'/> PC &nbsp;&nbsp;&nbsp;
                                                  <input type="radio" className="form-check-input" name='device'/> Laptop
                                             </div>
                                             <div className="col-md-4">
                                                  <label className="form-label fw-bold">PC No</label>
                                                  <select class="form-select txt_box" aria-label="Default select example">
                                                       <option selected>PC No</option>
                                                       <option value="1">One</option>
                                                       <option value="2">Two</option>
                                                       <option value="3">Three</option>
                                                  </select>
                                             </div>                                             
                                             <div className="col-md-4">
                                                  <label className="form-label fw-bold">Laptop Compalsory</label><br></br>
                                                  <input type="radio" className="form-check-input" name='lap'/> Yes &nbsp;&nbsp;&nbsp;
                                                  <input type="radio" className="form-check-input" name='lap'/> No
                                             </div>
                                             <div className='mb-3'></div>
                                             <div className="col-md-12">
                                                  <label className="form-label fw-bold">Extra Note</label>
                                                  <textarea class="form-control txt_box" rows="2"></textarea>
                                             </div>
                                             <div className='mb-3'></div>
                                             <div className="col-md-12">
                                                  <label className="form-label fw-bold">Reception Note</label>
                                                  <textarea class="form-control txt_box" rows="2"></textarea>
                                             </div>
                                        </div>

                                        <button type="button" className="btn btn-login mt-3 d-block mx-auto">Submit</button>
                                   </div>
                              </div>
                        </div>

                    </div>
               </div>
          </div>

      </main>
    </>
  )
}

export default Addstudent