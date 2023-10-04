import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Addcontents() {

  const token = localStorage.getItem('token');
  const [allcourse,setallCourse]=useState([]);
  const [course,setcourse]=useState('');
  const [contents,setcontents]=useState('');
  const [duration,setduration]=useState('');
  const [fees,setfees]=useState('');

  useEffect(()=>{
    axios.get("http://localhost:5000/course/allcourse",{
      headers: {
        'Authorization': token
      }
    })
    .then((res)=>{
      // console.log(res.data.data);
      setallCourse(res.data.data);
    })
  },[])

  const addContent = () => {
    axios.post("http://localhost:5000/course/addcontent",
    {
      course_id: course,
      content: contents,
      duration: duration, 
      total_fees: fees
    },{
      headers: {
        'Authorization': token
      }
    })
    .then((res)=>{
      console.log(res.data);
      if(res.data.status === "Content Add Successfully"){
        setcourse('')
        setcontents('')
        setduration('')
        setfees('')
      }
    })
  }

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
                          <select class="form-select txt_box" aria-label="Default select example" value={course} onChange={(e)=>{setcourse(e.target.value)}}>
                            <option selected>Select Course</option>
                            {
                              allcourse.map((item,index)=>{
                                return(
                                  <option value={item._id}>{item.coursename}</option>
                                )
                              })
                            }
                          </select>
                        </div>
                        <div className="input-group mb-3">
                          <input type="text" className="form-control txt_box" placeholder="Contents" value={contents} onChange={(e)=>{setcontents(e.target.value)}}  />
                        </div>
                        <div className="input-group mb-3">
                          <input type="text" className="form-control txt_box" placeholder="Fees" value={fees} onChange={(e)=>{setfees(e.target.value)}} />
                        </div>
                        <div className="input-group mb-3">
                          <input type="text" className="form-control txt_box" placeholder="Durations" onChange={(e)=>{setduration(e.target.value)}} value={duration} />
                        </div>
                        <button className="btn btn-login mt-3 d-block mx-auto" onClick={addContent}>Add Contents</button>
                    </div>
               </div>
          </div>

      </main>
    </>
  )
}

export default Addcontents