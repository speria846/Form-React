// import logo from './logo.svg';
import './App.css';
import React from 'react';
import picture from './gal-driving.jpg';

function App() {
  return (
    <div className='MainApp'>
    <div className="App">
    <h6>EddieShop</h6> 
    <h6><i>Don't have an account? Signup</i></h6>
    <h3>Welcome Back</h3>
    <div className='form'>
  
    <form action="/action_page.php"></form>
      <label for="fname">Email</label>
      <br></br>
      <input type="text" id="fname" name="fname"></input>
      <br></br>
      <label for="lname">password</label>
      <br></br>
      <input type="number" id="lname" name="lname"></input>
      </div>

      <div className='checkbox'>
      <input type="checkbox" id="veh" name="veh" value="name"></input>
      <h6>keep me login in </h6>
      <p>I forgot my password?</p> 
      <button type='login'>Login</button>
      </div>
      <h6>_________________Or___________________</h6>
      <img src={picture} alt='gal-driving.jpg' className ='girl'/>

    <div className='logos'>
     <i class="fa-brands fa-facebook"></i>
     <i class="fa-brands fa-google-plus"></i>
     <i class="fa-brands fa-instagram"></i>
     </div>
      </div>

     <div className='head'>
     <h1>Fonts</h1>
     </div>

      <div className='roboto_all'>

      <div className='roboto1'>
      <h1>Aa</h1>
      <h6>Robboto Regular</h6>
      </div>
      <div className='roboto2'>
    
      <h1>Aa</h1>
      <h6>Robboto Medium</h6>
      </div>

      </div>
      
      <div className='colors'>
      <h2>Colors</h2>
      </div>

      <div className='color_all'>
        <div className='circle1'>

        </div>
        <div className='circle2'>
          
        </div>
        <div className='circle3'>
          
        </div>

      </div>

      </div>
  );
}

export default App;
