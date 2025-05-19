import { useState } from "react";
import React  from 'react'
import { useNavigate } from "react-router-dom";

const Signup = (props)=> {
  const [credentials, setcredentials] = useState({name:"", email:"" , password:"", cpassword:"" });
    let navigate = useNavigate();
    const onchange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      if(credentials.password !== credentials.cpassword){
        return props.showAlert("Invalid Credentials", "danger")
      }
      const response = await fetch('https://inotes-backend-tm49.onrender.com/api/auth/CreateUser', {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ name:credentials.name ,email: credentials.email, password: credentials.password }),
      });
      const json = await response.json();
      if(json.success){
          //save the auth token and redirect
          localStorage.setItem('token', json.authtoken);
          navigate("/")
          props.showAlert("User Created successfully", "success")
      }else{
        props.showAlert("Invalid Credentials", "danger")
      }
  }
  return (
    <div className='container mt-2'>
      <h2 className='my-2'>Signup to use iNoteBook</h2>
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" onChange={onchange} id="name" name='name' required minLength={3}/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" required onChange={onchange} id="email" name="email" autoComplete="current-rmail" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" required minLength={8} onChange={onchange} id="password" name='password' />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" required minLength={8} onChange={onchange} id="cpassword" name='cpassword' />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Signup
