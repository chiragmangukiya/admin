import React from 'react'
import { FaLock,FaUser } from "react-icons/fa6";

function Login() {
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
                                   <input type="text" className="form-control txt_box" placeholder="Username"  />
                              </div>
                              <div className="input-group mb-3">
                                   <span className="input-group-text" ><FaLock></FaLock></span>
                                   <input type="password" className="form-control txt_box" placeholder="Password" />
                              </div>
                              <button type="submit" className="btn btn-login mt-3">Sign In</button>
                         </form>
                    </div>
               </div>
          </div>

    </>
  )
}

export default Login