import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export function CreateBlogForm() {

  // State variables to store the meeting details
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  // Add the meeting details
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert("Both title and description are required.");
      return;
    }
    
    const newContent = {
      title,
      description,
    };
    
    try {
      const response = await fetch(`http://localhost:5000/blogs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newContent),
      });

      if (response.ok) {
        const data = await response.json();
        navigate(-1);
        console.log("Blog added successfully:", data);        
      } else {
        console.error("Failed to add content");
      }
  } catch (error) {
    console.error("Error while adding the blog:", error);
  } finally {
    setTitle("");
    setDescription("");
  }
  };

  const onCancel = () => {
    navigate(-1);
  }

  return (
    // Add blog form
    <div className="bg-white p-6 rounded-md w-full min-h-screen">

      {/* Title */}
      <h2 className="text-lg font-semibold mb-4">Add Meeting</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none"
            required
          />
        </div>
        
        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full xl:h-[70vh] md:h-[70vh] h-[70vh] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm resize-none outline-none"
            required
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}