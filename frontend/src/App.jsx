import React from 'react'
import { Route, Routes } from 'react-router-dom';
import MainNavigation from './Components/MainNavigation/MainNavigation';
import AllQuotes from './Components/Pages/AllQuotes';
import NewQuotes from './Components/Pages/NewQuotes';
import ShowQuotes from './Components/Pages/ShowQuotes';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <MainNavigation/>
      <Routes>
        <Route path="/" element={<AllQuotes/>}/>
        <Route path="/new" element={<NewQuotes/>}/>
        <Route path="/quotes/:id" element={<ShowQuotes/> } />
      </Routes>
    </React.Fragment>
  )
}

export default App