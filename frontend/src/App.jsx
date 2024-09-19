import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Hero from './components/Hero';


const App = () => {
  return (
    <Router>
       <div>
          <Routes>
            <Route path='/' element={<Hero/>} />
             <Route path="/signup" element={<Signup/>}/>
             <Route path="/login" element={<Login/>}/>
          </Routes>
       </div>
    </Router>
  )
}

export default App
