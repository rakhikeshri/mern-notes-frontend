import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode, setSearchNoteQuery } from '../Redux/reducers/notesSlice';
import { Link } from 'react-router-dom';
import useUserActions from '../utils/useUserActions';

const Header = () => {
    const dispatch = useDispatch();
    const { darkMode, searchNoteQuery } = useSelector((state) => state.notes);
    const { logout } = useUserActions()

    return (
        <div className={`header ${darkMode ? 'darkmode' : ''}`}>
            <h1>Daily Notes</h1>
            <input type="text" placeholder='Search your notes title here...' className='search'
            onChange={(e)=>dispatch(setSearchNoteQuery(e.target.value))}
             />
            <div className='user-container'>
                <button className={`toggleBtn ${darkMode ? 'darkmode' : ''}`} onClick={() => dispatch(toggleDarkMode())}>
                    {darkMode === true ? 'Light Mode' : 'Dark Mode'}
                </button>
                <div className='user' onClick={logout}>Logout</div>
            </div>
        </div>
    )
}

export default Header