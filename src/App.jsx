import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Counter from "./components/useState/Counter";
import UseStateBasics from "./components/useState/UseStateBasics";
import TeamVotes from "./components/useState/TeamVotes";
import TrainerShop from "./components/useState/TrainerShop";
import LikeButton from "./components/useState/LikeButton";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/components/useState/Counter" element={<Counter />}></Route>
          <Route path="/components/useState/UseStateBasics" element={<UseStateBasics />}></Route>
          <Route path="/components/useState/TrainerShop" element={<TrainerShop />}></Route>
          <Route path="/components/useState/LikeButton" element={<LikeButton />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
