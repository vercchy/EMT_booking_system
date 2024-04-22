import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Home = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand ml-3" to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/countries">Countries</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/hosts">Hosts</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/accommodations">Accommodations</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/categories">Categories</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    );
}

export default Home;
