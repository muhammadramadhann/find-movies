import React from "react";

const Footer = ({ github }) => {
    return (
        <footer className="text-sm text-slate-600 text-center sm:pt-24 pt-16 pb-6 mt-auto">
            by <a href={github}>muhammadramadhann</a>
        </footer>
    );
};

export default Footer;
