import React from 'react';
import { useDispatch } from 'react-redux';

import './App.css';
import NotesTable from './layout/NotesTable';
import SummaryTable from './layout/SummaryTable';
// import { activeNotes } from "./storage";

import * as actions from "./redux/actions";

function App() {
  console.log('App rendered');

  const dispatch = useDispatch();

  const handleAddNote = (data) => {
    dispatch(actions.addNote({
      name: data.noteName,
      content: data.noteContent,
      category: data.noteCategory
    }))
    // activeNotes.addNote({ 
    //   name: data.noteName,
    //   content: data.noteContent,
    //   category: data.noteCategory
    // });
    // setNotes(activeNotes.getNotes());
  }

  const handleEditNote = (id, data) => {
    dispatch(actions.editNote(id, {
      name: data.noteName,
      content: data.noteContent,
      category: data.noteCategory
    }))
    // activeNotes.editNote({
    //   id: id,
    //   name: data.noteName,
    //   content: data.noteContent,
    //   category: data.noteCategory
    // });
    // setNotes(activeNotes.getNotes());
  }

  const handleDeleteNote = (id) => {
    dispatch(actions.deleteNote(id));
    // activeNotes.deleteNote(id);
    // setNotes(activeNotes.getNotes());
  }

  const handleArchiveNote = (id) => {
    dispatch(actions.archiveNote(id));
    // activeNotes.archiveNote(id);
    // setNotes(activeNotes.getNotes());
  }

  const handleDearchiveNote = (id) => {
    dispatch(actions.dearhiveNote(id));
    // activeNotes.dearchiveNote(id);
    // setNotes(activeNotes.getNotes());
  }

  

  return (
    <div className="container">
      <NotesTable
        handlers={{ 
          add: handleAddNote, 
          edit: handleEditNote,
          delete: handleDeleteNote,
          archive: handleArchiveNote,
          dearchive: handleDearchiveNote
        }}
      />
      {/* <ToggleViewButton handleClick={() => setViewArchived(!viewArchived)}/>  */}
      <SummaryTable />
      
    </div>
  );
}

export default App;