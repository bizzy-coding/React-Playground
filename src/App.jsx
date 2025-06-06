import { HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Counter from "./components/useState/Counter";
import UseStateBasics from "./components/useState/UseStateBasics";
import TeamVotes from "./components/useState/TeamVotes";
import TrainerShop from "./components/useState/TrainerShop";
import LikeButton from "./components/useState/LikeButton";
import PropsAndComponents from "./components/PropsAndComponents/PropsAndComponents";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/components/useState/Counter" element={<Counter />}></Route>
        <Route path="/components/useState/UseStateBasics" element={<UseStateBasics />}></Route>
        <Route path="/components/useState/TrainerShop" element={<TrainerShop />}></Route>
        <Route path="/components/useState/LikeButton" element={<LikeButton />}></Route>
        <Route path="components/componentsAndProps/PropsAndComponents" element={<PropsAndComponents />}></Route>
      </Routes>
    </>
  );
}

export default App;
