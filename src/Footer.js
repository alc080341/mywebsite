import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Footer() {
    return (
        <nav className="footer flex-parent-drop-vertical">
            <div className="social-icons">
                <a href="https://www.facebook.com/chamberscreativewebdesign/" target="blank" className="media_icons"><i className="fa fa-facebook left"></i></a>
                <a href="https://www.linkedin.com/in/tonychamberswebprogramming/" target="blank" className="media_icons"><i className="fa fa-linkedin left"></i></a>
                <a href="https://github.com/alc080341" target="blank" className="media_icons"><i className="fa fa-github left"></i></a>
            </div>
            <ul>
                <FooterLink to="/" text="Home" />
                <FooterLink to="/about" text="About" />
                <FooterLink to="/projects" text="Projects" />
                <FooterLink to="/codechambers" text="Creative Chamber" />
            </ul>
        </nav>
    )
}

function FooterLink({ to, text }) {
    const path = useResolvedPath(to);
    const isActive = useMatch({ path: path.pathname, end: true });
    let className = isActive ? "active" : "";
    return (
        <li className={className}>
            <Link to={to}>
                {text}
            </Link>
        </li>
    )
}