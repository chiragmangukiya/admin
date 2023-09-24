import React from 'react'
import { Link } from 'react-router-dom'

function Viewcontents() {
  return (
    
    <main>
        <div className="page_title d-flex justify-content-between align-items-center">
               <h3 className='mb-0'>View Course Contents</h3>
               <div className='breadcrumb mb-0'>
                    <Link to='/'>Home</Link>
                    <Link className='active'>View Contents</Link>
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
                                <th scope="col">Course Name</th>
                                <th scope="col">Contents</th>
                                <th scope="col">Fees</th>
                                <th scope="col">Duration</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">1</th>
                                <td>Web Design</td>
                                <td>HTML/HTML5, CSS/CSS3</td>
                                <td>75000</td>
                                <td>12</td>
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

export default Viewcontents