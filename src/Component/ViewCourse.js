import React from 'react'
import { Link } from 'react-router-dom'

function ViewCourse() {
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
                        <div className="table-responsive">
                          <table class="table">
                            <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">Course Name</th>
                                <th scope="col">Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                              </tr>
                              <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                              </tr>
                              <tr>
                                <th scope="row">3</th>
                                <td>Larry the Bird</td>
                                <td>@twitter</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                    </div>
               </div>
          </div>

    </main>

  )
}

export default ViewCourse