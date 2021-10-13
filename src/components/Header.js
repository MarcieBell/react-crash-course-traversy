//IMPORTING PACKAGES
import React from 'react';
import PropTypes from 'prop-types';

/**
 * FUNCTION : Header(props)
 * FUNCTIONALITY : CREATES HEADER COMPONENT WITH IT'S VALUE BEING PASSED
 * @param {Object} props - PROPS OBJECT
 * @returns : <Header/> COMPONENT JSX VALUE
 */
const Header = ({ title, onAdd, showAddForm }) => {

    //STYLE OBJECT
    const Style = { fontWeight: "900", };
    
    //COMPONENT VALUE
    return (
        <div style={Style} className="mx-auto d-flex justify-content-between align-items-center">
            <h1 className="fw-bolder">{title}</h1>
            <button onClick={onAdd} className="btn btn-dark">{showAddForm?"Close":"Add"}</button>
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