import React from 'react'
import { insta, hp, twt } from "../assets/";

const Links = () => (
     <div className='links-section'>
        <div className='link'>
          <ul className='links-list'>
           <li>
             <img src={ twt } alt="hp" className='insta-logo' />
             <a href="#">Twitter</a>
           </li>
            <li>
             <img src={ insta } alt="insta" className='insta-logo' />
             <a href="#">Instagram</a>
           </li>
            <li>
             <img src={ hp } alt="insta1" className='insta-logo' />
             <a href="#">H-Poetry</a>
           </li>
          </ul>
        </div>
     </div>

)

  export default Links;

