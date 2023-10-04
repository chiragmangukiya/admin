import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

function Viewcontents() {

  const token = localStorage.getItem('token')
  const [allContent,setallContent]=useState([]);
  const [status,setstatus]=useState(false);

    useEffect(()=>{
        axios.get("http://localhost:5000/course/allcontent",{
          headers: {
            'Authorization': token
          }
        })
        .then((res)=>{
          console.log(res.data);
          setallContent(res.data.data)
          setstatus(true)          
        })
    },[])

  if(status)
  {

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
                                <th scope="col" className='text-center'>Fees</th>
                                <th scope="col" className='text-center'>Duration</th>
                              </tr>
                            </thead>
                            <tbody>
                              {
                                allContent.map((item,index)=>{
                                  return(
                                    <tr>
                                      <th scope="row">{index+1}</th>
                                      <td>{item.coursename}</td>
                                      <td>{item.content_id.content}</td>
                                      <td align='center'>{item.content_id.total_fees}</td>
                                      <td align='center'>{item.content_id.duration} <sub className='text-muted'>Months</sub></td>
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

export default Viewcontents