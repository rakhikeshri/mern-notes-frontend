import React, {useEffect} from 'react'

import './App.css'
import Notes from './components/Notes'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import CreateNoteForm from './components/CreateNoteForm';
import { useSelector } from 'react-redux';
import NotesBody from './components/NotesBody';
import Login from './components/auth/login';
import Signup from './components/auth/Signup';
import RequireAuth from './components/auth/RequireAuth';

function App() {

  const { darkMode } = useSelector((state) => state.notes);
  const { loggedIn } = useSelector((state) => state.users);

  useEffect(() => console.log('check',loggedIn), [loggedIn])

  return (
    <div className={`${darkMode ? "dark-mode" : "default-mode"}`}>
      <div className='container'>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/notes" element={<RequireAuth><NotesBody /></RequireAuth>}>
            <Route index element={<Notes />} />
            <Route path="create" element={<CreateNoteForm />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App

// <Route element={
//   <RequireAuth>
//     <NotesBody />
//   </RequireAuth>}> {/* Render NotesBody for routes needing header */}
//   <Route path="notes" element={<Notes />} /> {/* Render Notes component for /notes route */}
//   <Route path="createNote" element={<CreateNoteForm />} /> {/* Render CreateNoteForm component for /createNote route */}
// </Route>


