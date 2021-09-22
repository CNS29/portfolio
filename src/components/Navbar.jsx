import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [label, setLabel] = useState("");

    useEffect(() => {
        const currentURL = window.location.href;
        if(currentURL.endsWith("/")) {
            setLabel("About");
        }else if(currentURL.endsWith("/resume")) {
            setLabel("Resume");
        }else if(currentURL.endsWith("/projects")) {
            setLabel("Projects");
        }
    }, [])

    return (
        <div className="navbar"> 
            <div className="navbar__active">
                {label}
            </div>
            <div className="navbar__list">
                {label !== "About" && <Link to="/"><div className="navbar__item" onClick={() => setLabel("About")}>About</div></Link>}
                {label !== "Resume" && <Link to="/resume"><div className="navbar__item" onClick={() => setLabel("Resume")}>Resume</div></Link>}
                {label !== "Projects" && <Link to="/projects"><div className="navbar__item" onClick={() => setLabel("Projects")}>Projects</div></Link>}
            </div>
        </div>
    )
}

export default Navbar;
