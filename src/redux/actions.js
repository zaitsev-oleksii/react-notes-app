export const addNote = note => ({
  type: 'ADD_NOTE',
  note
});

export const editNote = (id, note) => ({
  type: 'EDIT_NOTE',
  id,
  note
});

export const deleteNote = id => ({
  type: 'DELETE_NOTE',
  id
});

export const archiveNote = id => ({
  type: 'ARCHIVE_NOTE',
  id
});

export const dearhiveNote = id => ({
  type: 'DEARCHIVE_NOTE',
  id
});