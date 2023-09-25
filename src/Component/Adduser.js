import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

function Adduser() {

     const [allUser,setallUser]=useState([]);
     const [email, setEmail] = useState('');
     const [pass, setPass] = useState('');

     const addUser = () => {
          axios.post("http://localhost:5000/register",{
               email:email,
               password:pass
          })
          .then((res)=>{
               // console.log(res.data);
               setallUser((allUser)=>[res.data,...allUser])
               setEmail('');
               setPass('');
          })
     }


  return (
    <>
      <main>
          <div className="page_title d-flex justify-content-between align-items-center">
               <h3 className='mb-0'>Add User</h3>
               <div className='breadcrumb mb-0'>
                    <Link to='/'>Home</Link>
                    <Link className='active'>Add User</Link>
               </div>
          </div>
          <div className="box col-6 mx-auto mt-5">
               <div className="input_frm bg-white shadow rounded-4">
                    <div className="p-5">
                        <div className="frm_title fs-4 text-center mb-3 fw-bold">Add User</div>
                         <div className="input-group mb-3">
                          <input type="text" value={email} required className="form-control txt_box" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}  />
                        </div>
                        <div className="input-group mb-3">
                          <input type="password" value={pass} required className="form-control txt_box" placeholder="Password" onChange={(e)=>{setPass(e.target.value)}}  />
                        </div>
                        <button type="submit" className="btn btn-login mt-3 d-block mx-auto" onClick={addUser}>Add User</button>
                    </div>
               </div>
          </div>

      </main>
    </>
  )
}

export default Adduser