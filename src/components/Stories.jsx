import React from 'react'
import Navbar from "./Navbar";
import {stories} from '../constants';

export const Stories = () =>  (
    <div className='story-heading'>
      <div className='title-space'>
      <h4>Stories</h4>
      </div>
        {stories.map((contents) => (
            <div key= {contents.id} className='story-container' >
              <h4> {contents.title} </h4>
              <p> {contents.story} </p>
            </div>
            ))} 
      
    </div>
  )











/*  
          {content.map((contents) => (
          <div key= {contents.id} className='story-container' >
            <h4 className=''> {contents.poem} </h4>
            <p className=''> {contents.title} </p>
          </div>
          ))} 
          
          */