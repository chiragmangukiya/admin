import axios from 'axios'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Viewuser() {


  return (    
    <main>
        <div className="page_title d-flex justify-content-between align-items-center">
               <h3 className='mb-0'>View User</h3>
               <div className='breadcrumb mb-0'>
                    <Link to='/'>Home</Link>
                    <Link className='active'>View User</Link>
               </div>
          </div>

          <div className="box col-10 mx-auto mt-5">
               <div className="input_frm bg-white shadow rounded-4">
                    <div className="p-5">
                        <div className="frm_title fs-4 text-center mb-3 fw-bold">All Course</div>
                        <div className="table-responsive">
                          <table class="table">
                            <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Password</th>
                                <th scope="col">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">1</th>
                                <td>Web Design</td>
                                <td>HTML/HTML5, CSS/CSS3</td>
                                <td>75000</td>
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

export default Viewuser