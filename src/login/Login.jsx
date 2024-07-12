import React,{useState} from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navigation from "../components/Navigation";
import axios from "axios";
import {  toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";

function Login() {
  const [isLoading, setIsLoading ] = useState(false);
  const [email, setEmail ] = useState("");
  const [password, setPassword ] = useState("");
  const navigate = useNavigate("")
  console.log(password)
  const handleLogin = (e)=>{
    console.log("user has submitted");
      e.preventDefault();
      setIsLoading(true);

      axios({
        method: 'post',
        url:'http://localhost:5000/api/v1/auth/signin',
        data:{
          email: email,
          password: password
        }
      }).then((response)=>{

        console.log(response)
        toast.success("Logged In successfully");
        if (response.data.role == 'admin'){
          navigate('/dashboard')
        } else {
          navigate('/collection')
        }
       
      }).catch((error)=>{
        console.log(error.response);
        toast.error(error.response?.data?.message || "something went wrong");
       
      })

  }
  
  return (
    <>
      <div className="mami">
   
        <Navigation />

        <form className="ap1" method="POST" onSubmit={handleLogin}>
          <h1 className="welcome">WELCOME TO WISDOM LIBRARY</h1><br/>
          <p className="please">Please enter your details</p>

          <div className="input-container">
            <label> Email</label>
            <br />
            <br />
            <input type="email" required className="email" name="email" onChange={(e)=>setEmail(e.target.value)}/>
            <br />
            <br />
            <label className="login-password">Password</label> <br />

            <br />
            <br />
            <input type="password" required className="password" name="password" onChange={(e)=>setPassword(e.target.value)} />
            <br />
          
            <input type="checkbox" id="checkbox" /><p>Remember me<span className="login-span-1">Forgot password?</span></p>
            
           
          </div>


 <br /><br />

  <button type="submit" className="loginbut">Log in</button>

     
          <br />
          <br />
          <p className="add">
            Do not  have an account?
            <Link to="/signup" className="login-span-2">
              Sign up
            </Link>
          </p>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Login;
