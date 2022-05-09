import React from "react";
import { categories } from "../config";

const AddForm = (props) => {

  const noteToEdit = props.noteToEdit;

  const [formData, setFormData] = React.useState({
    noteName: noteToEdit.name,
    noteContent: noteToEdit.content,
    noteCategory: noteToEdit.category,
  });

  const handleChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmit = (event) => {
    props.handleSubmit(formData);
    event.preventDefault();
  }

  return (
    <form className="EditForm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="EditForm--Name">Name</label>
        <input 
            type="text"
            placeholder="Name"
            id="EditForm--Name"
            name="noteName"
            onChange={handleChange}
            value={formData.noteName}
          />
      </div>
      <div>
        <label htmlFor="EditForm--Content">Content</label>
        <input 
          type="text"
          placeholder="Content"
          id="EditForm--Content"
          name="noteContent"
          onChange={handleChange}
          value={formData.noteContent}
        />
      </div>
      <div>
        <label htmlFor="EditForm--Category">Category</label>
        <select 
          id="EditForm--Category"
          name="noteCategory"
          onChange={handleChange}
          value={formData.noteCategory}
        >
          {categories.map((category) => <option key={category} value={category}>{category}</option>)}
        </select>
      </div>
      <input 
        type="submit"
        id="EditForm--Button"
        value="Edit Note"
      />
    </form>
  );
}

export default AddForm;