// import React from 'react'

// // Images
// import LogoCap from './Images/brandLogoCap.svg';

// const NavBar = () => {
//     return (
//         <>
//             {/* <nav class="navbar bg-body-#1b1c1f"> */}


//             <nav class="navbar navbar-expand-lg bg-dark">
//                 <div class="container">
//                     <a class="navbar-brand" href="#">
//                         <img src={LogoCap} alt="" />
//                     </a>
                 
//                     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//                         <span class="navbar-toggler-icon"></span>
//                     </button>
//                     <div class="collapse navbar-collapse" id="navbarNavDropdown">
//                         <ul class="navbar-nav">

//                             <li class="nav-item">
//                                 <a class="nav-link active" aria-current="page" href="#">Home</a>
//                             </li>

//                             <li class="nav-item">
//                                 <a class="nav-link" href="#">About</a>
//                             </li>

//                             <li class="nav-item">
//                                 <a class="nav-link" href="#">Menu</a>
//                             </li>

//                             <li class="nav-item">
//                                 <a class="nav-link" href="#">Recipes</a>
//                             </li>
//                         </ul>
//                     </div>
//                     <button class="btn btn-outline-success" type="submit">Reserve Now</button>
//                 </div>
//             </nav>
//             {/* </nav> */}

//         </>
//     )
// }

// export default NavBar

import React from 'react';
import './NavBar.css'; // Import your custom CSS file

// Images
import LogoCap from './Images/brandLogoCap.svg';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container navBarContainer">
                
                <a className="navbar-brand" href="#">
                    <img src={LogoCap} alt="Brand Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav navbarLink">
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
                </div>
                <button className="btn order-btn" type="button">Reserve now</button>
            </div>
        </nav>
    );
}

export default NavBar;
