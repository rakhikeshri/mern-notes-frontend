import React from 'react'
import { useSelector } from 'react-redux';
import useNoteActions from '../utils/useNoteActions';
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Notes = () => {
  const { notes } = useSelector((state) => state.notes);
  const {
    deleteNote,
    editNote,
  } = useNoteActions();

  return (
    <div className='notes-list'>
      {
        notes && notes.map(note => {
          return (
            <div key={note._id} className='note'>
              
              <div>
                <h3>{note.title}</h3>
                <p>{note.body}</p>
              </div>

              <div className='note-footer'>


                <small>{new Date(note.createdAt).toLocaleDateString()}</small>

                
                <div>
                  <MdDeleteForever
                    onClick={() => deleteNote(note._id)}
                    className="delete-icon"
                    size="1.23em"
                  />

                  <Link to="createNote" style={{color:'black'}}>
                    <FaEdit
                      size="1.2em"
                      className="edit-icon"
                      onClick={() => editNote(note._id)}
                    />
                  </Link>
                </div>
              </div>

            </div>
          )
        })
      }
    </div>
  )
}

export default Notes