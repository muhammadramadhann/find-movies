import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const MovieList = ({ url }) => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("Avengers");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        findMovies(search);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const findMovies = async (title) => {
        await axios.get(`${url}&s=${title}`).then((response) => {
            setMovies(response.data.Search);
            setIsLoading(false);
        });
    };

    return (
        <div className="container mx-auto">
            <header className="text-center text-slate-200 py-10 mb-4">
                <h1 className="text-2xl font-extrabold sm:text-4xl tracking-tight mb-4">Welcome on Board!</h1>
                <p className="text-center mb-8">
                    What movie are you looking for? just{" "}
                    <span className="italic font-semibold">#chillandfindmovies</span> everything is so easy.
                </p>
                <div className="flex justify-center align-middle">
                    <input
                        placeholder="Enter title then click search button..."
                        className="
                            border-none outline-none rounded-md w-full 
                            sm:w-96 py-2 px-2 bg-slate-700 shadow-sm 
                            hover:bg-slate-600 focus:bg-slate-600 
                            transition ease-in delay-75
                        "
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button
                        className="bg-indigo-800 hover:bg-indigo-900 transition-all px-4 rounded-md ml-2 text-sm"
                        onClick={() => findMovies(search)}
                    >
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </header>
            {isLoading ? (
                <main>
                    <div className="text-slate-500 text-2xl text-center pt-24">Loading...</div>
                </main>
            ) : movies?.length > 0 ? (
                <main className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
                    {movies.map((movie) => (
                        <MovieCard key={movie.imdbID} movie={movie} />
                    ))}
                </main>
            ) : (
                <main>
                    <div className="text-slate-500 text-2xl text-center pt-24">Movie title not found...</div>
                </main>
            )}
        </div>
    );
};

export default MovieList;
