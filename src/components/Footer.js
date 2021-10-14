import React from 'react';
import {Link} from 'react-router-dom';

/**
 * FUNCTION : Footer COMPONENT
 * FUNCTIONALITY : CREATING A FOOTER COMPONENT
 * @returns 
 */
const Footer = () => {
    return (
        <footer className="d-flex flex-column justify-content-center align-items-center">
            <p className="m-0">Copyright &copy; {new Date().getFullYear()}</p> 
            <Link className="m-0" to="/about">About</Link>
        </footer>
    )
}

export default Footer
