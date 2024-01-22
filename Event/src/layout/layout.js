import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white box-shadow py-3 mb-3">
            <button className="navbar-toggler" 
                    type="button" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
                <ul className="nav nav-tabs">
                    <li className="nav-item ">
                        <Link className="nav-link active link-primary"  to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active link-primary" to="/events">Events</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

