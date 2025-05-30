import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export function CreateLiveForm() {

  // State variables to store the live details
  const [link, setLink] = useState("");

  const navigate = useNavigate();

  // Add the live details
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!link.trim()) {
      alert("Enter the live link");
      return;
    }

    const newContent = {
      link
    };
    
    try {
      const response = await fetch(`http://localhost:5000/live`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newContent),
      });

      if (response.ok) {
        const data = await response.json();
        navigate(-1);
        console.log("link added successfully:", data);        
      } else {
        console.error("Failed to add content");
      }
    } catch (error) {
      console.error("Error while adding the link:", error);
    } finally {
      setLink("");
    }
  };

  const onCancel = () => {
    navigate(-1);
  }

  return (
    // Add live form
    <div className="bg-white p-6 rounded-md w-full min-h-screen">

      {/* Title */}
      <h2 className="text-lg font-semibold mb-4">Add Live</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="link">
            URL link
          </label>
          <textarea
            id="link"
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="mt-1 block w-full h-[10vh] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm resize-none outline-none"
            required
          />
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