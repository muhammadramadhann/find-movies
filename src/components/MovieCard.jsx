import React from "react";

const MovieCard = ({ movie }) => {
    return (
        <div className="rounded-lg shadow-md bg-slate-800 mb-6 md:mb-12">
            <div>
                <img
                    src={
                        movie.Poster !== "N/A"
                            ? movie.Poster
                            : "https://via.placeholder.com/400"
                    }
                    alt={movie.Title}
                    className="w-full h-full object-cover md:h-96"
                />
            </div>
            <div className="p-4">
                <p className="mb-2 text-indigo-500 capitalize">{movie.Type}</p>
                <h1 className="font-semibold text-lg tracking-tight text-slate-300 mb-1">
                    {movie.Title}
                </h1>
                <p className="mb-4 text-slate-300">({movie.Year})</p>
            </div>
        </div>
    );
};

export default MovieCard;
