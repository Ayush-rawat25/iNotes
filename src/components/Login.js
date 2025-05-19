import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props)=>{
    const [credentials, setcredentials] = useState({ email:"" , password:"" });
    let navigate = useNavigate();
    const onchange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://inotes-backend-tm49.onrender.com/api/auth/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password }),
        });
        const json = await response.json();
        if(json.success){
            //save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            navigate("/")
            props.showAlert("Logged in successfully", "success")
        }else{
            props.showAlert("Invalid Credentials", "danger")
        }
    }
    return (
        <div className='mt-2'>
            <h2 className='my-2'>Login to continue to iNoteBook</h2>
            <form>
                <div className="my-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={onchange} id="email" name="email" autoComplete="current-rmail" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={onchange} autoComplete="current-password" id="password" name='password' />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Login
