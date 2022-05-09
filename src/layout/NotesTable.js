import React from "react";
import { useSelector } from "react-redux";

import Table from "../components/Table";
import { parseDates } from "../utils/utils";
import { notesTableConfig } from '../config';
import Modal from "./Modal";
import AddForm from "./AddForm";
import EditForm from "./EditForm";
import ToggleViewButton from "../components/ToggleViewButton";
import IconButton from "../components/IconButton";

import editButtonIcon from "../images/pencil.svg";
import archiveButtonIcon from "../images/archive.svg";
import deleteButtonIcon from "../images/trash.svg";


const NotesTable = (props) => {
  // const notes = props.notes;
  const notes = useSelector(state => state);

  const handlers = props.handlers;

  const [viewActive, setViewActive] = React.useState(true);
  const [addNoteModalVisibility, setAddNoteModalVisibility] = React.useState(false);
  const [editNoteModalVisibility, setEditNoteModalVisibility] = React.useState(false);
  const [noteToEdit, setNoteToEdit] = React.useState({id: -1, name: '', content: '', category: ''});

  const handleAddClick = () => {
    setAddNoteModalVisibility(true);
  }

  const handleEditClick = (key) => {
    setNoteToEdit(notes.filter((note) => (note.id === key))[0]);
    setEditNoteModalVisibility(true);
  }

  const handleDeleteClick = (key) => {
    handlers.delete(key);
  };

  const handleArchiveClick = (key) => {
    handlers.archive(key);
  }

  const handleDearchiveClick = (key) => {
    handlers.dearchive(key);
  }

  // Notes for display
  const data = notes
    .filter((note) => note.active === viewActive)
    .map((note) => {
      const dates = parseDates(note.content);
      note.dates = dates ? dates.toString() : '';
      note.buttons = (
        <div className="ButtonsCell">
          <IconButton 
            icon={editButtonIcon} 
            alt="Edit" 
            handleClick={() => handleEditClick(note.id)} 
          />
          <IconButton 
            icon={archiveButtonIcon} 
            alt="Archive"
            handleClick={() => ((viewActive) ? handleArchiveClick(note.id) : handleDearchiveClick(note.id))} 
          />
          <IconButton 
            icon={deleteButtonIcon} 
            alt="Delete" 
            handleClick={() => handleDeleteClick(note.id)} 
          />
        </div>
      );
      return note;
    });
  
  return (
    <div className="TableBlock">
      <Table className="NotesTable" data={data} config={notesTableConfig} />

      <div className="Controls">
        <button onClick={handleAddClick} className="AddButton" type="button">New Note</button>

        <ToggleViewButton
          show={viewActive}
          handleClick={() => setViewActive(!viewActive)}
        />
      </div>

      {addNoteModalVisibility && 
      <Modal show={addNoteModalVisibility} handleClose={() => setAddNoteModalVisibility(false)}>
        <AddForm 
          handleSubmit={handlers.add}
        />
      </Modal>}
      {editNoteModalVisibility && 
      <Modal show={editNoteModalVisibility} handleClose={() => setEditNoteModalVisibility(false)}>
        <EditForm 
          handleSubmit={(note) => handlers.edit(noteToEdit.id, note)} 
          noteToEdit={noteToEdit}
        />
      </Modal>}
    </div>
  );
}

export default NotesTable;