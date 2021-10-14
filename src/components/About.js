import React from 'react';
import {Link} from 'react-router-dom';

const About = () => {
    return (
        <div className="m-0 d-flex flex-column justify-content-center align-items-center">
            <p className="lead text-center"><span className="fw-bold">Task tracker</span> is a simple task tracking application built by <a href="https://asxyzp.github.io">asxyzp</a></p>
            <p className="m-0">Version 0.0.0</p>
            <Link to="/">Go back</Link>
        </div>
    );
}

export default About;
