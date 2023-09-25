import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaLock,FaUser } from "react-icons/fa6";

function Login() {

     const [email,setemail]=useState('')
     const [pass,setpass]=useState('')

     useEffect(() => {
          console.log(localStorage.getItem('token'))
     },[])

     const login = () => {
          axios.post("http://localhost:5000/login",{
               email:email,
               password:pass
          })
          .then((res)=>{
               console.log(res);
               if(res.data.status === 'Login Successfully'){
                    localStorage.setItem('token',res.data.token);
                    window.location='/dashboard'
               }
               else{
                    alert(`Email or Password is Incorrect`);
               }
          })
          .catch(function (error) {
               if (error.res && error.res.status === 400) {
                 alert('Password not Match'); 
               } else {
                 console.log(error);
               }
          });
     }

  return (
    <>
          <div className="box bg-light vh-100">
               <div className="login_box bg-white shadow position-absolute start-50 top-50 translate-middle rounded-4">
                    <div className="login_header p-4 text-center d-flex align-items-center rounded-top-4">
                         <span className='text-white ms-3 fs-3'>Login</span>
                    </div>
                    <div className="login_body p-5 bg-white rounded-bottom-4">
                         <form>
                              <div className="input-group mb-3">
                                   <span className="input-group-text" ><FaUser></FaUser></span>
                                   <input type="text" className="form-control txt_box" placeholder="Username" onChange={(e)=>{setemail(e.target.value)}} value={email}  />
                              </div>
                              <div className="input-group mb-3">
                                   <span className="input-group-text" ><FaLock></FaLock></span>
                                   <input type="password" className="form-control txt_box" placeholder="Password" onChange={(e)=>{setpass(e.target.value)}} value={pass} />
                              </div>
                              <button type="button" className="btn btn-login mt-3" onClick={login}>Sign In</button>
                         </form>
                    </div>
               </div>
          </div>

    </>
  )
}

export default Login