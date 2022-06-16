import './App.css';
import Home from './Pages/Home';
import UserInfo from './Pages/UserInfo';
import TimeSelection from './Pages/TimeSelection';
import Presentations from './Pages/Presentations';
import JudgeForm from './Pages/JudgeForm';
import Session from './Pages/Session';
import Admin from './Pages/Admin';
// import Grade from './Pages/Grade';
// import Content from './Pages/Content';
// import Impression from './Pages/Impression';
// import Comments from './Pages/Comments';
import ErrorPage from './Pages/ErrorPage';


import React from 'react';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

//import Home from '../pages/Home';
//import Signup from '../pages/Signup';


function App() {
  
  return (
    <CookiesProvider>
      <BrowserRouter>
        <nav className="smallText" >
         {/* <Link to="/"> Home |</Link>
          <Link to="/UserInfo"> User Info |</Link>
          <Link to="/TimeSelection"> Time Selection |</Link>
          <Link to="/Session"> Session |</Link>
          <Link to="/Presentations"> Presentations |</Link>
          <Link to="/JudgeForm"> JudgeForm |</Link>
          <Link to="/Admin"> Admin |</Link>*/}
          {/* <Link to="/Grade"> Grade |</Link>
          <Link to="/Content"> Content |</Link>
          <Link to="/Impression"> Impression |</Link>
          <Link to="/Comments"> Comments |</Link> */}

        </nav>
        <Routes> {/* The Switch decides which component to show based on the current URL.*/}
          <Route path='/' element={<Home />}></Route>
          <Route path='/UserInfo' element={<UserInfo />}></Route>
          <Route path='/TimeSelection' element={<TimeSelection />}></Route>
          <Route path='/Session/:time' element={<Session />}></Route>
          <Route path='/JudgeForm/:time/:session/:presId' element={<JudgeForm />}></Route>
          <Route path='/Presentations/:time/:session' element={<Presentations />}></Route>
          <Route path='/Admin' element={<Admin />}></Route>
          {/* <Route path='/Grade' element={<Grade />}></Route>
          <Route path='/Content' element={<Content />}></Route>
          <Route path='/Impression' element={<Impression />}></Route>
          <Route path='/Comments' element={<Comments />}></Route> */}
          <Route path='*' element={<ErrorPage />}></Route>
        </Routes>
    </BrowserRouter>
  </CookiesProvider>
  );
}



export default App;
