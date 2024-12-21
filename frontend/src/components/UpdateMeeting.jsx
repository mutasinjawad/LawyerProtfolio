import React, { useState, useEffect } from "react";

export function UpdateMeetingForm({ currentItem, onUpdate, onCancel }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeeting = async () => {
      try {
        const response = await fetch(`http://localhost:5000/meetings/${currentItem.id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch meeting details");
        }
        const meeting = await response.json();
        setTitle(meeting.title);
        setDescription(meeting.description);
        setDate(meeting.date);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching meeting details:", error);
        setLoading(false);
      }
    };

    if (currentItem && currentItem.id) {
      fetchMeeting();
    }
  }, [currentItem]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert("Both title and description are required.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/meetings/${currentItem.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (!response.ok) {
        throw new Error("Failed to update meeting");
      }

      onUpdate({ id: currentItem.id, title, date, description });
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error updating meeting:", error);
    }
  };

  if (loading) {
    return <p>Loading meeting details...</p>;
  }

  return (
    <div className="bg-white p-6 rounded-md w-[120vh] mx-[20px]">
      <h2 className="text-lg font-semibold mb-4">Update Meeting</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full xl:h-[25vh] lg:h-[23vh] h-[30vh] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm resize-none outline-none"
            required
          ></textarea>
        </div>
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
            Update
          </button>
        </div>
      </form>
    </div>
  );
}