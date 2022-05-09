import React from "react";
import { categories } from "../config";

const AddForm = (props) => {

  const [formData, setFormData] = React.useState({
    noteName: '',
    noteContent: '',
    noteCategory: categories[0] ?? '',
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
    <form className="AddForm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="AddForm--Name">Name</label>
        <input 
            type="text"
            placeholder="Name"
            id="AddForm--Name"
            name="noteName"
            onChange={handleChange}
            value={formData.noteName}
          />
      </div>
      <div>
        <label htmlFor="AddForm--Content">Content</label>
        <input 
          type="text"
          placeholder="Content"
          id="AddForm--Content"
          name="noteContent"
          onChange={handleChange}
          value={formData.noteContent}
        />
      </div>
      <div>
        <label htmlFor="AddForm--Category">Category</label>
        <select 
          id="AddForm--Category"
          name="noteCategory"
          onChange={handleChange}
          value={formData.noteCategory}
        >
          {categories.map((category) => <option key={category} value={category}>{category}</option>)}
        </select>
      </div>
      <input 
        type="submit"
        id="AddForm--Button"
        value="Add Note"
      />
    </form>
  );
}

export default AddForm;