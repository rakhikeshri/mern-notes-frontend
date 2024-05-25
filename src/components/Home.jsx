import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const { loginData, loggedIn } = useSelector((state) => state.users);

  // useEffect(() => console.log('loggedin', loggedIn), [loggedIn])

  const navigate = useNavigate();

  const startNoting = () => {
    if (loggedIn) navigate('/notes')
    else navigate('/login')
  }

  return (
    <div className='home'>
      <h1 className='logo'>Daily Notes</h1>
      <button className='toggleBtn' onClick={startNoting}>"Start Noting Today."</button>
    </div>
  )
}

export default Home