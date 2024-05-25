import React, { useState } from 'react'
import './auth.css'
import axios from 'axios';
import { api } from '../../utils/constants'

const Signup = () => {

    const [signupData, setSignupData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setSignupData({
            ...signupData,
            [name]: value
        })
    }

    const signup = async (e) => {

        e.preventDefault()

        try{
            const response = await axios.post(`${api}/signup`, signupData, { withCredentials:true })
            console.log(response)
        }catch(error){
            console.log('error', error)
        }

    }

    return (
        <div className='form' onSubmit={signup}>
            <h1>Login</h1>
            <form>
                <input type='text' name="firstName" placeholder='first name' onChange={handleChange} />
                <input type='text' name="lastName" placeholder='last name' onChange={handleChange} />
                <input type='email' name="email" placeholder='email' onChange={handleChange} />
                <input type='password' placeholder='password' name='password' onChange={handleChange} />
                <input type='submit' value='Signup' />
            </form>
        </div>
    )
}

export default Signup