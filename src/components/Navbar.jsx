import React from 'react'
import { logo } from "../assets/";

const Navbar = () =>  (
    <div className='nav'>
      <img src={logo} alt='logo' className='imagelogo' />
      <ul>
       <li>
          <a href="/">Home</a>
        </li> 
        <li>
          <a href="/about">About</a>
        </li>  
        <li>
          <a href="/Collection">Collection</a>
        </li>  
      </ul>
    </div>
  )


export default Navbar