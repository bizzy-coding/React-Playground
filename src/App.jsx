import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Counter from './components/useState/Counter'
import TeamVotes from './components/useState/TeamVotes'
import Home from "./pages/Home";

function App() {

  return (
    <>


<Router>
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/components/useState/Counter" element={<Counter />}></Route>

  </Routes>
</Router>
     
    </>
  )
}

export default App
