import React from 'react'
import { useSelector } from 'react-redux';
import useNoteActions from '../utils/useNoteActions';

const CreateNoteForm = () => {
    const { createForm, isEdit } = useSelector((state) => state.notes);
    const {
        updateCreateFromField,
        createOrUpdateNote,
    } = useNoteActions();

    return (
        <form onSubmit={createOrUpdateNote} className='form-container'>
            <input value={createForm.title} type="text" placeholder='note title' name='title'
                onChange={updateCreateFromField} className='noteTitle'/>

            <textarea name="body" value={createForm.body} id="noteBody" cols="21" rows="5" placeholder='enter note body'
                onChange={updateCreateFromField}
            ></textarea>

            <input type='submit' className='save' value={isEdit ? 'Update Note' : 'Add Note'} />

            {/* <div className="note-footer"> */}
            {/* <small>{charLimit - noteText.length} Remaining</small> */}
            <div>
                {/* <button className="save" >
                            Clear Notes
                        </button> */}
            </div>
            {/* </div> */}
        </form>
    )
}

export default CreateNoteForm