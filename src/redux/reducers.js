import { getCurrentDateTime } from "../utils/utils";

const initialNotes = [
  { id: 1, name: 'Note 1', content: 'Note 1 content', category: 'Task', creationTime: '22/04/2022', active: true },
  { id: 2, name: 'Note 2', content: 'Note 2 content', category: 'Random Thought', creationTime: '10/04/2022', active: true },
  { id: 3, name: 'Note 3', content: 'Note 3 content', category: 'Idea', creationTime: '14/04/2022', active: true },
  { id: 4,
    name: 'Dentist',
    content: 'I\'m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021',
    category: 'Task',
    creationTime: getCurrentDateTime(), 
    active: true
  }
];

const notes = (state = initialNotes, action) => {

  switch (action.type){
    case 'ADD_NOTE':
      let newNoteId = 1;
      if(state.length !== 0) {
        const maxId = state.map(note => note.id).reduce((maxId, currId) => ((currId > maxId) ? currId : maxId))
        newNoteId = maxId + 1;
      }
      return [
        ...state,
        {
          id: newNoteId,
          name: action.note.name,
          content: action.note.content,
          category: action.note.category,
          creationTime: getCurrentDateTime(),
          active: true
        }
      ]
      
    case 'EDIT_NOTE':
      return state.map(note => ((note.id === action.id) ? { ...note, ...action.note } : note))
      
    case 'DELETE_NOTE':
      return state.slice().filter(note => (note.id !== action.id));
      
    case 'ARCHIVE_NOTE':
      return state.map(note => ((note.id === action.id) ? { ...note, active: false } : note)); 
      
    case 'DEARCHIVE_NOTE':
      return state.map(note => ((note.id === action.id) ? { ...note, active: true } : note));
        
    default:
      return state;
  }
}

export default notes;