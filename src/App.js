import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Router from "./components/Router";
import Footer from "./components/Footer";
import "./styles/index.css";

const { REACT_APP_API_KEY } = process.env;
const OMDb_API = `http://www.omdbapi.com/?apikey=${REACT_APP_API_KEY}`;
const github = "https://github.com/muhammadramadhann";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <main className="bg-slate-900">
                <div className="flex flex-col min-h-[90vh]">
                    <Router OMDb_API_BASE_URL={OMDb_API} />
                    <Footer github={github} />
                </div>
            </main>
        </BrowserRouter>
    )
}

export default App;