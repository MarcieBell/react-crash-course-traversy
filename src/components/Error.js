import React from 'react'

/**
 * FUNCTION : Error COMPONENT
 * FUNCTIONALITY : DISPLAYING ERROR MESSAGE
 * @returns : <Error/> (JSX)
 */
const Error = () => {
    return (
        <div className="w-90 alert alert-danger text-center fw-bolder mx-2">
            Task name or time info. is missing.
        </div>
    )
}

export default Error;
