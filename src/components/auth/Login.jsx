import React, { useEffect, useState } from 'react';
import './auth.css';
import axios from 'axios';
import { api } from '../../utils/constants';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import useUserActions from '../../utils/useUserActions';

const Login = () => {
   
    const { loggedIn } = useSelector((state) => state.users);

    const { updateLoginDataField, login } = useUserActions();

    return (
        <div className='form'>
            <h1>Login</h1>
            <form onSubmit={login}> {/* Call handleSubmit when form is submitted */}
                <input type='email' name="email" placeholder='email' onChange={updateLoginDataField} />
                <input type='password' placeholder='password' name='password' onChange={updateLoginDataField} />
                <input type='submit' value='Login' />
            </form>
        </div>
    );
};

export default Login;
