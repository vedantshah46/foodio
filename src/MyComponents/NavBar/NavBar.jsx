
import React from 'react';
import './NavBar.css'; // Import your custom CSS file

// Images
import LogoCap from './Images/brandLogoCap.svg';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark pt-4">
            <div className="container-xxl"> {/* Use container-lg for responsive max-width */}
                <a className="navbar-brand" href="#">
                    <img src={LogoCap} alt="Brand Logo" />
                </a>

                {/* Toggler button: visible only on small screens */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto navbarLink">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Menu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Recipes</a>
                        </li>
                    </ul>
                    <button className="btn btn-danger order-btn mt-lg-0 mt-lg-0 ms-lg-0 mt-2" type="button">Reserve now</button>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;


