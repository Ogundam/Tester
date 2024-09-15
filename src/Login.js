import React, { useState } from 'react'
import Navbar from './Navbar'
import { useDispatch } from 'react-redux'
import { useNavigate } from'react-router-dom'
import { login } from './Redux/userslice'


function Login() {

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  function handleSubmit(e){
    e.preventDefault()

    // alert(email)
    // alert(password)

    let form = new FormData(e.currentTarget)


    let email = form.get("email")
    let password = form.get("password")

    dispatch(login(email, password))

    navigate("/")

  }
  return (
    <div>
      <Navbar/>

    

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={(e) => handleSubmit(e)}>
              
              <h5>Login</h5>

              <div>
                <label htmlFor="" className='form-label'>Email</label>
                {/* <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" /> <br /><br /> */}
                <input name='email' type="email" className='form-control' />
              </div>

              <div className='my-2'>
                <label htmlFor="">Passowrd</label>
                {/* <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" /> */}
                <input name='password' type="password" className='form-control' />
              </div>
            
              <button type="submit">Login</button>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login