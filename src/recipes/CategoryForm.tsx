import React, { useState } from "react";
import { addCategory } from "../services/apiFacade";

export default function CategoryForm() {
  const [formData, setFormData] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log("name", name);
    console.log("value", value);
    setFormData(value);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newCategory = await addCategory(formData);
    alert("New category added");
    console.log("New Category", newCategory);
  };
  return (
    <>
      <h2>Add Category</h2>
      <form>
        <input id="categoryName" name="categoryName" onChange={handleChange} type="text" placeholder="Name" />
        <button type="submit" onClick={handleSubmit}>
          Save
        </button>
      </form>
    </>
  );
}
