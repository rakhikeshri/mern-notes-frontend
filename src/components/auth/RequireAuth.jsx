// import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import useUserActions from '../../utils/useUserActions';

// const RequireAuth = (props) => {

//     const navigate = useNavigate();

//     const { loggedIn } = useSelector((state) => state.users);

//     const { checkAuth } = useUserActions()

//     useEffect(() => {
//         if (loggedIn === null) checkAuth()
//     }, [])

//     if (loggedIn === null) return <h2 style={{ margin: '0px' }}>Loading</h2>

//     if (loggedIn === false) return navigate('/');

//     return (
//         <div>{props.children}</div>
//     )
// }

// export default RequireAuth



import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useUserActions from '../../utils/useUserActions';

const RequireAuth = (props) => {
    const navigate = useNavigate();
    const { loggedIn } = useSelector((state) => state.users);
    const { checkAuth } = useUserActions();

    // Use state to track if navigation has occurred
    const [hasNavigated, setHasNavigated] = useState(false);

    useEffect(() => {
        // If authentication status is not determined (null), check authentication
        if (loggedIn === null) {
            checkAuth();
        }
    }, [loggedIn, checkAuth]);

    useEffect(() => {
        // If user is not logged in and hasn't navigated yet, navigate to home page
        if (loggedIn === false && !hasNavigated) {
            navigate('/');
            // Set hasNavigated to true to prevent further navigation attempts
            setHasNavigated(true);
        }
    }, [loggedIn, hasNavigated, navigate]);

    if (loggedIn === null) {
        return <h2 style={{ margin: '0px' }}>Loading</h2>;
    }

    return (
        <div>{props.children}</div>
    );
}

export default RequireAuth;
