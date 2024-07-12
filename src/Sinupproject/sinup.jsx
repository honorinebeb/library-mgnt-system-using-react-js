import axios from 'axios'
import './sinup.css'
import Footer from '../Footer/Footer'
import Navigation from '../components/Navigation'
import { useState } from 'react'
import {useNavigate, Link} from 'react-router-dom'

function SinUp() {
  const [fullName, setFullName]= useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate()

 

  const handleSignUp = (e) =>{
    e.preventDefault();
    console.log("submited successfully................");

    const data = {
      fullName: fullName,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    }
    console.log(data)
    axios.post("http://localhost:5000/api/v1/auth/signup",data).then((res)=>{
        
          alert('User Registered Successfully')
        console.log("response: ",res.data)
        navigate('/login')
      
    }).catch((error)=>{
      console.log("error while signing up......",error)
    })
  }

  

  
  return (
    <>
    <div className='signup-container'>
     <Navigation/>
       <div className='wrapper'> 
        
        <form action='' method='POST' onSubmit={handleSignUp}>
               <h1 className='signup-heading'>SignUp</h1><br/><br />
              
            
            <div className="sinup3">
            <label  className='co'>Full Name</label><br/>
            <input type="text"  required  className='sinupthird' name="fullName" onChange={(e)=>setFullName(e.target.value)}/><br/>

            </div><br />



            <div className="sinup3">
            <label >Email</label><br/>
            <input type="email"  required className='sinupthird' name="email" onChange={(e)=>setEmail(e.target.value)}/>

            </div>

 
            <div className="sinup5">
            <label >password</label><br/>
            <input type="password"  required className='sinupsix' name="Password" onChange={(e)=>setPassword(e.target.value)}/><br/>

            </div><br/>
        
            <div className="sinup9">
            <label  className='co'>confirm password</label><br/>
            <input type="password"  required className='sinupsix' name="confirmPassword" onChange={(e)=>setConfirmPassword(e.target.value)}/><br/>

            </div><br/><br/>

            <div className="remember">
            <input type="checkbox" className='larger-checkbox'/> I accept Terms of use and  privacy policy 

            <br/><br/>
            
            
              <button type="submit" className='btnsinup'>SignUp</button><br /><br />
              
            
            <div className="register-link">
                <p className='sinup6'>Already have an account?<a href="login" className='up'>Login In Here</a></p>
                </div>
                </div>
            </form>   
        </div>
        </div> 
  
    <Footer/> 
    </>
  )
}

export default SinUp