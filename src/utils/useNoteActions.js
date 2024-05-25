import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setNotes, setCreateForm, setIsEdit, setEditNoteId } from '../Redux/reducers/notesSlice';
import { api } from './constants.js'

const useNoteActions = () => {
  const dispatch = useDispatch();
  const { notes, createForm, isEdit, editNoteId, searchNoteQuery } = useSelector((state) => state.notes);

  useEffect(() => {

    let timer = setTimeout(()=> {
      fetchNotes();
    }, 1000)
    
    return () => clearTimeout(timer)

  }, [searchNoteQuery]);

  const fetchNotes = async () => {
    try {
      const response = await axios.get(`${api}/notes`);
      const fetchedFilteredData = response?.data?.notes.filter(note => note.title.includes(searchNoteQuery))

      dispatch(setNotes(fetchedFilteredData));
    } catch (error) {
      console.error('Error fetching notes:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  const updateCreateFromField = (e) => {
    const { name, value } = e.target;
    dispatch(setCreateForm({
      ...createForm,
      [name]: value
    }));
  };

  const createOrUpdateNote = async (e) => {
    e.preventDefault();

    try {
      if (isEdit === false) {
        // create the note
        if (createForm.title !== '' && createForm.body !== '') {
          const res = await axios.post(`${api}/notes`, createForm);
          // update state
          dispatch(setNotes([
            ...notes, res.data.note
          ]));
        } else {
          alert('Please enter the note.')
        }
      } else {
        // edit the note
        const res = await axios.put(`${api}/notes/${editNoteId}`, createForm);

        // update the state
        const updatedNotes = notes.map(note => note._id === editNoteId ? res.data.note : note);
        dispatch(setNotes(updatedNotes));

        // reset edit mode
        dispatch(setIsEdit(false));
        dispatch(setEditNoteId(null));
      }

      // clear form state 
      dispatch(setCreateForm({ title: '', body: '' }));
    } catch (error) {
      console.error('Error creating/updating note:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  const deleteNote = async (id) => {
    try {
      // delete the note 
      await axios.delete(`${api}/notes/${id}`);

      // update state
      const filteredNotes = notes.filter(note => note._id !== id);
      dispatch(setNotes(filteredNotes));
    } catch (error) {
      console.error('Error deleting note:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  const editNote = (id) => {
    // find the note that has to be edited
    const noteToEdit = notes.find(note => note._id === id);

    // set edit note form data for editing
    if (noteToEdit) {
      dispatch(setCreateForm({
        title: noteToEdit.title,
        body: noteToEdit.body,
      }));
    }

    // set edit mode and edit note id 
    dispatch(setIsEdit(true));
    dispatch(setEditNoteId(id));
  };

  return {
    updateCreateFromField,
    createOrUpdateNote,
    deleteNote,
    editNote,
  };
};

export default useNoteActions;
