import React from 'react'
import { Routes, Route } from 'react-router-dom';
import {Navbar, Hero, Links, Home} from './components';
import { Stories } from './components/Stories'
import { Poetry } from './components/Poetry'


const App = () => (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="Stories" element={<Stories />}/>
        <Route path="Poetry" element={<Poetry />} />
      </Routes>  
  )


export default App