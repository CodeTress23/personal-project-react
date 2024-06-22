import React, { useState } from "react";
import { Route, Routes} from "react-router-dom";
import './App.css';

import Header from './shared/Header';
import Footer from './shared/Footer';
import Home from './components/home';
import About from './components/about';
import Login from './components/login';
import Quiz from './components/quiz';
import Signup from './components/signup';
import Resources from "./components/resources";



function App() {
  const [user, setUser] = useState(localStorage.getItem('user') || {});

  return (
    <div className="App">
      <Header user= {user} setUser= {setUser}/>
      <Routes>
        
          
            <Route path = "/" element = {<Home/>} />
            <Route path = "/about" element = {<About/>} />
            <Route path = "/login" element = {<Login user= {user} setUser= {setUser}/>} />
            <Route path = "/resources" element = {<Resources/>} />
            <Route path = "/Quiz" element = {<Quiz/>} />
            <Route path = "/signup" element = {<Signup user= {user} setUser= {setUser}/> } />
            
          
        </Routes>
        <Footer/>
      
    </div>
    
  );
}



export default App;