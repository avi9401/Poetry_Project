import React from 'react'
import Navbar from "./Navbar";
import {poetry} from '../constants';

export const Poetry = () =>  (
    <div className='story-heading'>
      <div className='title-space'>
      <h4>Poems</h4>
      </div>
        {poetry.map((contents) => (
            <div key= {contents.id} className='poetry-container' >
              <h4> {contents.title} </h4>
              <p> {contents.poem} </p>
            </div>
            ))} 
      
    </div>
  )