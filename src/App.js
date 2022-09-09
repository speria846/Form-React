
import './App.css';
import React, { useState} from 'react';
import picture from './gal-driving.jpg';
import User from "./User";

function App() {


const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
const handleSubmit=()=>{
const data ={
    email:email,
    password:password
  }
  alert(JSON.stringify(data))
  }
  



  return (
    <div className='MainApp'>
    <div className="App">
    <h6>EddieShop</h6> 
    <h6><i>Don't have an account? Signup</i></h6>
    <h3>Welcome Back</h3>
    <div className='form'>
  
    <form onSubmit={handleSubmit}
     action="/action_page.php"></form>
      <label for="fname">Email</label> 
      
      <br></br>
      <input 
      type="text" 
      placeholder='Enter your email'
      name="fname"
      value={email}
      onChange ={(e)=>{setEmail (e.target.value)}}></input>

      <br></br>
      <label for="lname">password</label> 
      <br></br>

      <input type="password"
       name="lname" 
       placeholder='Enter your password'
      value={password}
      onChange ={(e)=>{setPassword (e.target.value)}}>

      </input>
      </div>


      <div className='checkbox'>
      <input type="checkbox" name="veh" value="name">


      </input>
      <h6>keep me login in </h6>
      <p>I forgot my password?</p> 
      <button type='submit'>Submit</button>
      </div>
      <h6>_________________Or___________________</h6>
      <img src={picture} alt='gal-driving.jpg' className ='girl'/>
      </div>
      
      <User email={email}/>

      <div className='color_all'>
        <div className='circle1'>

        </div>
        <div className='circle2'>
          
        </div>
        <div className='circle3'>
          
        </div>

      </div>
      <trial email={email}/>

      </div>
  );
}

export default App;
