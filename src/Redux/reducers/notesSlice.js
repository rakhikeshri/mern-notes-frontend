import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: null,
  isEdit: false,
  editNoteId: null,
  createForm: {
    title: '',
    body: ''
  },
  darkMode: false,
  searchNoteQuery: '',
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setCreateForm: (state, action) => {
      state.createForm = action.payload;
    },
    setIsEdit: (state, action) => {
      state.isEdit = action.payload;
    },
    setEditNoteId: (state, action) => {
      state.editNoteId = action.payload;
    },
    toggleDarkMode: (state, action) => {
      state.darkMode = !state.darkMode;
    },
    setSearchNoteQuery: (state, action) => {
      state.searchNoteQuery = action.payload;
    }
  },
});

export const { setNotes, setCreateForm, setIsEdit, setEditNoteId, toggleDarkMode, setSearchNoteQuery } = notesSlice.actions;
export default notesSlice.reducer;
