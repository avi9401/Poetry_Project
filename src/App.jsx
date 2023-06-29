import React from 'react'
import { Routes, Route } from 'react-router-dom';
import {Navbar, Hero, Links, Home} from './components';
import { Stories } from './components/Stories';
import { Poetry } from './components/Poetry';
import { Home } from './components/Home';


const App = () => (
      <Routes>
        <Route path="/Poetry_Project" element={<Home />}/>
        <Route path="Poetry_Project/Stories" element={<Stories />}/>
        <Route path="Poetry_Project/Poetry" element={<Poetry />} />
      </Routes>  
  )


export default App