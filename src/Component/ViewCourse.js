import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

function ViewCourse() {

  const token = localStorage.getItem('token')
  const [allCourse,setallCourse]=useState([]);
  const [status,setstatus]=useState(false);

    useEffect(()=>{
        axios.get("http://localhost:5000/course/allcourse",{
          headers: {
            'Authorization': token
          }
        })
        .then((res)=>{
          console.log(res.data);
          setallCourse(res.data.data1)
          setstatus(true)          
        })
    },[])

  if(status)
  {
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
                              {
                                allCourse.map((item,ind)=>{
                                  return(
                                    <tr key={ind}>
                                      <th scope="row">{ind+1}</th>
                                      <td>{item.coursename}</td>
                                      <td>Otto</td>
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

    </main>
  )
  }
  else{
    return( 
      <h1>Data Load</h1>
    )
  }
}

export default ViewCourse