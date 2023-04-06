import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
    return (
        <div className="flex flex-col rounded-lg shadow-md bg-slate-800 mb-6 md:mb-12">
            <img
                src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"}
                alt={movie.Title}
                className="w-full h-full object-cover md:h-96"
            />
            <div className="px-4 pt-4 sm:pb-4 pb-2">
                <p className="mb-2 text-indigo-500 capitalize">{movie.Type}</p>
                <h1 className="font-semibold text-lg tracking-tight text-slate-300 mb-1">{movie.Title}</h1>
                <p className="mb-4 text-slate-300">({movie.Year})</p>
            </div>
            <div className="mt-auto px-4 pb-5">
                <Link
                    to={`/details/${movie.imdbID}`}
                    className="
                        px-3 py-2 bg-indigo-500 hover:bg-indigo-800 
                        ease-in duration-200 text-slate-100 
                        font-semibold rounded-md md:text-left 
                        text-center md:text-sm text-base md:inline block"
                >
                    {`See Detail ->`}
                </Link>
            </div>
        </div>
    );
};

export default MovieCard;
