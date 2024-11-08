import React from "react";
import { Link } from "react-router-dom";

function Header() {

    return (
        <div style={{ fontFamily: 'sans-serif' }}>
            <div className="main_banner sticky-top" style={{ backgroundColor: '#333333', opacity: '0.7' }} >
                <nav className="navbar navbar-expand-lg p-3 navbar-dark transparent-nav nav-js">
                    <Link className="navbar-brand" to="/">
                        Home
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">

                            <Link className="nav-item nav-link active" to="/aerial">Aerial</Link>

                            <Link to="/shin-burning" className="nav-item nav-link">Shin Burning</Link>

                            <Link className="nav-item nav-link active" to="/lttoan">ToanLT</Link>
                            <Link to="/bcn" className="nav-item nav-link">NguyenBC</Link>
                            <Link to="/tien" className="nav-item nav-link">TienDTC</Link>


                            <Link to="/shin-burning" className="nav-item nav-link">Shin Burning</Link>

                            <Link to="/dat" className="nav-item nav-link">DatNT</Link>
                            <Link to="/vinh" className="nav-item nav-link">VinhHP</Link>

                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Header;
