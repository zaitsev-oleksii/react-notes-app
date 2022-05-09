const categories = ['Task', 'Random Thought', 'Idea'];

const notesTableConfig = {
  name: { display: 'Name', order: 0, width: 1 },
  creationTime: { display: 'Created', order: 1, width: 1 },
  content: { display: 'Content', order: 2, width: 2 },
  dates: { display: 'Dates', order: 3, width: 1 },
  category: { display: 'Category', order: 4, width: 1 },
  buttons: { display: '', order: 5, width: 1 },
};

const summaryTableConfig = {
  category: { display: 'Category', order: 0 },
  active: { display: 'Active', order: 1 },
  archived: { display: 'Archived', order: 2 },
}

// const tableConfig = {
//   name: 'Name%',
//   creationTime: 'Created',
//   category: 'Content',
//   content: 'Dates',
//   dates: 'Category'
// }

const notesColumnsWidthConfig = {
  name: '10%',
  creationTime: '10%',
  category: '10%',
  content: '50%',
  dates: '20%'
}

export { categories, notesTableConfig, summaryTableConfig, notesColumnsWidthConfig };
