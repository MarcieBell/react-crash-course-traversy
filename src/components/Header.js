//IMPORTING PACKAGES
import React from 'react';
import Button from "./Button";
import PropTypes from 'prop-types';

/**
 * FUNCTION : Header(props)
 * FUNCTIONALITY : CREATES HEADER COMPONENT WITH IT'S VALUE BEING PASSED
 * @param {Object} props - PROPS OBJECT
 * @returns : <Header/> COMPONENT JSX VALUE
 */
const Header = (props) => {

    //STYLE OBJECT
    const Style = {fontWeight: "900",};

    //METHODS
    const onClick = (event) =>{};

    //COMPONENT VALUE
    return (
        <div style={Style} className="mx-auto d-flex justify-content-between align-items-center">
            <h1 className="fw-bolder">{props.title}</h1>
            <Button onClick={onClick} classVal="btn btn-dark">Add</Button>
        </div>
    );
}

//DEFAULT PROPS VALUE OF THE HEADER COMPONENT
Header.defaultProps = {
    title: "Task tracker"
};

//DEFINING PROP TYPES FOR DIFFERENT PROPS OF THE HEADER COMPONENT
Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;