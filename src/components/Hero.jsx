import React from 'react'
import { unsplash } from "../assets/";
import Button from './Button'
import Button1 from './Button1'


const Hero = () =>  (

 
    <section className='hero-section'>
     <div className='hero-section2'>
      <div className='poetry0'>
        <h2 className='header1'>Story</h2>
        <p className='p1'>Stories by Avi</p>
        <Button />
        
      </div>
      <div className='poetry'>
        <h2 className='header2'>Poetry</h2>
        <p className='p2'> Poems by Avi
         </p>
         <Button1 />
      </div>
     </div>
     

    </section>
  )


export default Hero