import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './components/MovieCard';
import Footer from './components/Footer';
import './styles/index.css';

const OMDb_API = 'http://www.omdbapi.com/?apikey=ab02df7c';
const github = "https://github.com/muhammadramadhann";

const App = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    const findMovies = (title) => {
        axios.get(`${OMDb_API}&s=${title}`)
            .then(response => {
                const data = response.data;
                setMovies(data.Search);
            });
    }

    useEffect(() => {
        findMovies(search);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className="container mx-auto">
                <header className="text-center text-slate-200 py-10 mb-4">
                    <h1 className="text-2xl font-extrabold sm:text-4xl tracking-tight mb-4">FindMovies</h1>
                    <p className="text-center mb-8">What movie are you looking for? just <span className="italic font-semibold">#chillandfindmovies</span> everything is so easy.</p>
                    <div className="flex justify-center align-middle">
                        <input
                            placeholder="Enter title..."
                            className="border-none outline-none rounded-md w-full sm:w-96 py-2 px-2 bg-slate-700 shadow-sm hover:bg-slate-600 focus:bg-slate-600 transition ease-in delay-75"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button className="bg-indigo-800 hover:bg-indigo-900 transition-all px-4 rounded-md ml-2 text-sm" onClick={() => findMovies(search)}><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </header >
                {
                    movies?.length > 0 ? (
                        <main className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
                            {
                                movies.map((movie) => (
                                    <MovieCard key={movie.imdbID} movie={movie} />
                                ))
                            }
                        </main>
                    ) : (
                        <main>
                            <div className="text-slate-500 text-2xl text-center pt-24">Movie title not found...</div>
                        </main>
                    )
                }
            </div >
            <Footer github={github} />
        </>
    )
}

export default App