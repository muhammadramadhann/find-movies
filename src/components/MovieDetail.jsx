import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = ({ url }) => {
    const [movie, setMovie] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        getMovieDetail();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getMovieDetail = async () => {
        await axios.get(`${url}&i=${id}&plot=full`).then((response) => {
            setMovie(response.data);
            setIsLoading(false);
        });
    };

    return (
        <>
            <div className="container mx-auto mt-8">
                {isLoading ? (
                    <div className="mt-10">
                        <p className="text-center justify-center text-slate-300 text-xl">Almost there ..</p>
                    </div>
                ) : (
                    <div
                        className="
                        flex lg:flex-row flex-col 
                        lg:items-start 
                        items-center lg:gap-x-14 
                        gap-x-0 lg:gap-y-0 gap-y-8"
                    >
                        <img
                            src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"}
                            alt={movie.Title}
                            className="lg:h-auto md:h-[36rem] h-[27rem] md:w-72 w-full object-cover"
                        />
                        <div className="">
                            <h1 className="font-semibold md:text-4xl text-2xl tracking-tight text-slate-100">
                                {movie.Title}
                            </h1>
                            <div className="mt-4">
                                <p className="text-slate-400 text-sm">
                                    <span className="mr-3">{movie.Year}</span>
                                    <span className="mr-3">|</span>
                                    <span className="mr-3">{movie.Runtime}</span>
                                    <span className="mr-3">|</span>
                                    <span className="mr-3">{movie.Rated}+</span>
                                </p>
                            </div>
                            <div className="mt-8">
                                <h2
                                    className="
                                    font-semibold text-slate-100 
                                    uppercase pb-2 border-b-4 border-b-indigo-500 
                                    md:w-24 w-[88px]"
                                >
                                    Overview
                                </h2>
                                <p className="text-slate-300 text-sm leading-7 mt-4">{movie.Plot}</p>
                                <table className="table-auto text-sm mt-6">
                                    <tbody>
                                        <tr>
                                            <td className="pb-4 pr-8 text-slate-400">Starring</td>
                                            <td className="pb-4 text-slate-100">{movie.Actors}</td>
                                        </tr>
                                        <tr>
                                            <td className="pb-4 pr-8 text-slate-400">Director</td>
                                            <td className="pb-4 text-slate-100">{movie.Director}</td>
                                        </tr>
                                        <tr>
                                            <td className="pb-4 pr-8 text-slate-400">Genre</td>
                                            <td className="pb-4 text-slate-100">{movie.Genre}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default MovieDetail;
