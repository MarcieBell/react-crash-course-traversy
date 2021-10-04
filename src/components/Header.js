import React from 'react';
import PropTypes from 'prop-types';

/**
 * FUNCTION : Header(props)
 * FUNCTIONALITY : CREATES HEADER COMPONENT WITH IT'S VALUE BEING PASSED
 * @param {Object} props - PROPS OBJECT
 * @returns : <Header/> COMPONENT JSX VALUE
 */
const Header = (props) => {

    //STYLE OBJECT
    const Style = {
        fontWeight: "900",
    };

    return (
        <div style={Style} className="mx-auto">
            <h1>{props.title}</h1>
            <button className="btn btn-dark"> Add</button>
        </div>
    );
}

//Default props value of Header component
Header.defaultProps = {
    title: "Task tracker"
};

//Defining prop types of different props passed to the component
Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;