import React from "react";

const Footer = ({ github }) => {
    return (
        <footer className="text-sm bg-slate-900 text-slate-300 text-center p-8 mt-auto">
            by <a href={github}>muhammadramadhaann</a>
        </footer>
    );
};

export default Footer;
