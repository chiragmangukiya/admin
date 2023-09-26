import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

function Viewuser() {

      const [allUser,setallUser]=useState('');
      const [status,setstatus]=useState(false);

     useEffect(()=>{
          axios.get("http://localhost:5000/user")
          .then((res)=>{

            // console.log(res.data);
            setallUser(res.data)
            setstatus(true)
            
          })
     },[])
     if(status){
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
                            <div className="frm_title fs-4 text-center mb-3 fw-bold">All Users</div>
                            <div className="table-responsive">
                              <table class="table">
                                <thead>
                                  <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">User Name</th>
                                    <th scope="col">Password</th>
                                    <th scope="col">Status</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {
                                    allUser.map((item,ind)=>{
                                      return(
                                        <tr>
                                          <th scope="row">{ind+1}</th>
                                          <td>{item.email}</td>
                                          <td>{item.password}</td>
                                          <td>Active</td>
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
        <h1>Load Data</h1>
      )
     }
  
}

export default Viewuser