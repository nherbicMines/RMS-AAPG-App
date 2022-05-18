import './App.css';
import TodoList from './TodoList';
import Home from './Home';

import React from 'react';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';

//import Home from '../pages/Home';
//import Signup from '../pages/Signup';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<Home />}></Route>
    </Routes>
  );
}


function App() {
  return (
  <div classname="App">
    <Main />
  </div>
  );
}



export default App;
