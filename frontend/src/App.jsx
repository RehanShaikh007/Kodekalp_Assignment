import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';


const App = () => {
  return (
    <Router>
      <Header/>
       <div>
          <Routes>
            <Route path='/' element={<Hero/>} />
             <Route path="/signup" element={<Signup/>}/>
             <Route path="/login" element={<Login/>}/>
             <Route path="/about" element={<About/>}/>
          </Routes>
       </div>
    </Router>
  )
}

export default App
