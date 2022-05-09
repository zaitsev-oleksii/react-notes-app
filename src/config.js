const categories = ['Task', 'Random Thought', 'Idea'];

const notesTableConfig = {
  name: { display: 'Name', order: 0 },
  creationTime: { display: 'Created', order: 1 },
  content: { display: 'Content', order: 2 },
  dates: { display: 'Dates', order: 3 },
  category: { display: 'Category', order: 4 },
  buttons: { display: '', order: 5 },
};

const summaryTableConfig = {
  category: { display: 'Category', order: 0 },
  active: { display: 'Active', order: 1 },
  archived: { display: 'Archived', order: 2 },
}

export { categories, notesTableConfig, summaryTableConfig };
