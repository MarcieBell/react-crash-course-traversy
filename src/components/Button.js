import React from 'react';

/**
 * FUNCTION : BUTTON COMPONENT
 * @param {*} param0 : GETTING BUTTON STYLE AND CHILD COMPONENT 
 * @returns <Button/> (JSX)
 */
const Button = ({children, classVal}) => {

    //COMPONENT VALUE
    return (
        <button className={classVal}>{children}</button>
    );
}

export default Button;
