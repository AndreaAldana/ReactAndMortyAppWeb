import React from 'react';
import { Link } from 'react-router-dom'
import iconRick from '../images/iconNav.svg'
import Authentication from '../auth/Authentication';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    // init auth service
    let auth = Authentication.useAuth();

    const onLogOutClicked = () => {
        auth.logOut();
    }

    return(
        <header className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-transparent custom-navbar">
                <a className="navbar-brand" href="/">
                    <img src={iconRick} width="30" height="30" alt="" loading="lazy"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Home</Link> <span className="sr-only">(current)</span>
                    </li>
                </ul>
                    { !auth.isLogged() ? (
                            <div className="d-flex">
                                <Link to="/login" className="nav-link text-white">Login</Link> <span className="sr-only">(current)</span>
                                <Link className="btn btn-outline-success my-2 my-sm-0" to="/register">Register here</Link>
                            </div>
                        ) : ( 
                            <div className="d-flex">
                                <span className="text-success"><FontAwesomeIcon icon={faUser} className="mr-1" /> {auth.user?.email}</span> 
                                <span onClick={onLogOutClicked} className="logout-btn"><FontAwesomeIcon icon={faSignOutAlt} className="mr-1" />logout</span>
                            </div>)
                    }
                </div>
            </nav>
        </header>
    )
}

export default Navbar;