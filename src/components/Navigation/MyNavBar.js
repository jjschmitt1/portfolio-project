import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const MyNavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
            <a className="navbar-brand" href="#">JJ Schmitt</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={ faBars } style={{ color: "#fff"}}/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/experience" className="nav-link">Experience</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/projects" className="nav-link" >Projects</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/interests" className="nav-link">Interests</Link>
                    </li>

                </ul>
            </div>
        </div>
        </nav>
    );
}

export default MyNavBar;