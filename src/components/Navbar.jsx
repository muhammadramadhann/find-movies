import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-slate-900 py-5 w-full">
            <div className="container mx-auto flex items-center">
                <Link className="md:text-2xl text-lg font-semibold text-indigo-500" to="/">
                    FindMovies
                </Link>
                <Link
                    to="/"
                    className="
                        inline-flex md:text-sm text-xs 
                        text-slate-300 hover:text-white 
                        md:ml-8 ml-4 mt-1"
                >
                    Browse
                </Link>
                <Link to="#" className="inline-flex text-slate-400 hover:text-white ml-auto">
                    <i className="fa fa-bell"></i>
                </Link>
                <Link to="#" className="inline-flex">
                    <img src="https://via.placeholder.com/34" className="rounded-full md:ml-8 ml-4" alt="avatar" />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
