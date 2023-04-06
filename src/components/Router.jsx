import React from "react";
import { Routes, Route } from "react-router-dom";
import MovieDetail from "./MovieDetail";
import MovieList from "./MovieList";

const Router = ({ OMDb_API_BASE_URL }) => {
    return (
        <Routes>
            <Route path="/" element={<MovieList url={OMDb_API_BASE_URL} />} />
            <Route path="/details/:id" element={<MovieDetail url={OMDb_API_BASE_URL} />} />
        </Routes>
    );
};

export default Router;
