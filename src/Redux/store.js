import {configureStore} from '@reduxjs/toolkit'
import notesReducer from './reducers/notesSlice'
import usersReducer from './reducers/usersSlice'

export const store =  configureStore({
    reducer:{
        notes: notesReducer,
        users: usersReducer,
    }
})
