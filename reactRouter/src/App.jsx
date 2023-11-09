import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Red from "./components/Red";
import Yellow from "./components/Yellow";
import Orange from "./components/Orange";
import Green from "./components/Green";
import Blue from "./components/Blue";
import Purple from "./components/Purple";
import NavBar from "./components/NavBar";

import "./App.css";

function App() {
    return (
        <>
            <div id="container">
                <NavBar />

                <div id="main-section">
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/red" element={<Red />}></Route>
                        <Route path="/yellow" element={<Yellow />}></Route>
                        <Route path="/orange" element={<Orange />}></Route>
                        <Route path="/green" element={<Green />}></Route>
                        <Route path="/blue" element={<Blue />}></Route>
                        <Route path="/purple" element={<Purple />}></Route>
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default App;
