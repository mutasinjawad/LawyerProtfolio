import { useState, useEffect, act } from 'react';
import { format } from 'date-fns';
import { Calendar, Briefcase, BookOpen, Plus, Edit, Trash2 } from 'lucide-react';
import { CreateMeetingForm } from '../../components/CreateForm/CreateMeeting';
import { CreateCaseForm } from '../../components/CreateForm/CreateCase';
import { UpdateMeetingForm } from '../../components/UpdateForm/UpdateMeeting';
import { UpdateCaseForm } from '../../components/UpdateForm/UpdateCase';
import { CreateBlogForm } from '../../components/CreateForm/CreateBlog';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('meetings');
  const [meetings, setMeetings] = useState([]);
  const [cases, setCases] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [currentItem, setCurrentItem] = useState({ type: '', id: '' });

  // Fetch data based on the active tab
  const fetchData = async () => {
    const endpoint = `http://localhost:5000/${activeTab}`;
    const response = await fetch(endpoint);
    const data = await response.json();
    
    if (activeTab === 'meetings') setMeetings(data);
    if (activeTab === 'cases') setCases(data);
    if (activeTab === 'blogs') setBlogs(data);
  };
    
  // Handle add
  const handleAdd = async (newContent) => {

    try {
      const response = await fetch(`http://localhost:5000/${activeTab}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newContent),
      });

      if (response.ok) {
        const addedContent = await response.json();

        if (activeTab === "meetings") {
          setMeetings((prevContents) => [addedContent, ...prevContents]);
        }
        if (activeTab === "cases") {
          setCases((prevContents) => [addedContent, ...prevContents]);
        }
        if (activeTab === "blogs") {
          setBlogs((prevContents) => [addedContent, ...prevContents]);
        }
      } else {
        console.error("Failed to add content");
      }
    } catch (error) {
      console.error("Error while adding content:", error);
    } finally {
      setIsAdding(false);
    }
  };

  // Handle edit
  const handleEdit = (type, id) => {
    setCurrentItem({ type, id });
    setIsEditing(!isEditing);
  };

  // Handle update
  const handleUpdate = async (updatedContent) => {
    try {
      const response = await fetch(`http://localhost:5000/${activeTab}/${updatedContent.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedContent),
      });
      
      if (response.ok) {
        const updatedContent = await response.json();
        
        if (activeTab === "meetings") {
          setMeetings((prevContents) =>
            prevContents.map((meeting) =>
              meeting._id === updatedContent._id ? updatedContent : meeting
            )
          );          
        }
        if (activeTab === "cases") {
          setCases((prevContents) =>
            prevContents.map((cases) =>
              cases._id === updatedContent._id ? updatedContent : cases
            )
          ); 
        }
          if (activeTab === "blogs") {
            setBlogs((prevContents) => [updatedContent, ...prevContents]);
          }
        } else {
          console.error("Failed to update content");
        }
} catch (error) {
  console.error("Error while updating the meeting:", error);
} finally {
  setIsEditing(false);
}
  };

  // Handle delete
  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this item?')) return;
    
    const endpoint = `http://localhost:5000/${activeTab}/${id}`;
    const response = await fetch(endpoint, { method: 'DELETE' });
    
    if (response.ok) {
      // Remove the deleted item from the respective state
      if (activeTab === 'meetings') {
        setMeetings((prevMeetings) => prevMeetings.filter((meeting) => meeting._id !== id));
      }
      if (activeTab === 'cases') {
        setCases((prevCases) => prevCases.filter((caseItem) => caseItem._id !== id));
      }
      if (activeTab === 'blogs') {
        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
      }
    } else {
      console.error('Failed to delete the item');
    }
  };

  // Fetch data on initial render annd when the active tab changes
  useEffect(() => {
    fetchData();
  }, [activeTab]);

  // Prevent scrolling when editing
  useEffect(() => {
    if (isEditing) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isEditing]);

  // Prevent scrolling when adding
  useEffect(() => {
    if (isAdding) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isAdding]);

  return (

    // Admin dashboard
    <>
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex">
                {/* Tabs */}
                {['meetings', 'cases', 'blogs'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`${
                      activeTab === tab
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } flex-1 py-4 px-1 text-center border-b-2 font-medium`}
                  >
                    {tab === 'meetings' && <Calendar className="inline-block h-5 w-5 mr-2" />}
                    {tab === 'cases' && <Briefcase className="inline-block h-5 w-5 mr-2" />}
                    {tab === 'blogs' && <BookOpen className="inline-block h-5 w-5 mr-2" />}
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </nav>
            </div>

            {/* Content */}
            <div className="p-6">

              {/* Add new button */}
              <button
                onClick={() => {
                  setIsAdding(true);
                  setCurrentItem(null);
                }}
                className="mb-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                disabled={isAdding} // Disable during processing
              >
                <Plus className="h-4 w-4 mr-2" />
                Add New
              </button>
              <div className="grid grid-cols-1 gap-6">

                {/* Meetings List */}
                {activeTab === 'meetings' && (
                  <div>
                    {meetings.map((meeting) => (
                      <div
                        key={meeting._id}
                        className="bg-white p-4 rounded-lg shadow mb-4 flex justify-between items-center"
                      >
                        <div>
                          <h3 className="text-lg font-medium">{meeting.title}</h3>
                          <p className="text-gray-500">
                            {format(new Date(meeting.date), 'PPP')}
                          </p>
                          <p className="text-gray-600 mt-2">{meeting.description}</p>
                        </div>
                        <div className="flex space-x-2">

                          {/* Edit Button */}
                          <button
                            onClick={() => handleEdit("meeting", meeting._id)}
                            className="p-2 text-blue-600 hover:text-blue-800"
                          >
                            <Edit className="h-5 w-5" />
                          </button>

                          {/* Delete Button */}
                          <button
                            onClick={() => handleDelete(meeting._id)}
                            className="p-2 text-red-600 hover:text-red-800"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Cases List */}
                {activeTab === 'cases' && (
                    <div>
                      {cases.map((cases) => (
                        <div
                          key={cases._id}
                          className="bg-white p-4 rounded-lg shadow mb-4 flex justify-between items-center"
                        >
                          <div>
                            <h3 className="text-lg font-medium">{cases.title}</h3>
                            <p className="text-gray-500">
                              {format(new Date(cases.date), 'PPP')}
                            </p>
                            <p className="text-gray-600 mt-2">{`Summary: ${cases.summary}`}</p>
                            <p className="text-gray-600 mt-2">{`Outcome: ${cases.outcome}`}</p>
                          </div>
                          <div className="flex space-x-2">

                            {/* Edit Button */}
                            <button
                              onClick={() => handleEdit('case', cases._id)}
                              className="p-2 text-blue-600 hover:text-blue-800"
                            >
                              <Edit className="h-5 w-5" />
                            </button>

                            {/* Delete Button */}
                            <button
                              onClick={() => handleDelete(cases._id)}
                              className="p-2 text-red-600 hover:text-red-800"
                            >
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                )}
                {/* Blogs List */}
                {activeTab === 'blogs' && (
                    <div>
                      {blogs.map((blogs) => (
                        <div
                          key={blogs._id}
                          className="bg-white p-4 rounded-lg shadow mb-4 flex justify-between items-center"
                        >
                          <div>
                            <h3 className="text-lg font-medium">{blogs.title}</h3>
                            <p className="text-gray-500">
                              {format(new Date(blogs.date), 'PPP')}
                            </p>
                            <p className="text-gray-600 mt-2">{blogs.description}</p>
                          </div>
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleEdit("blog", blogs._id)}
                              className="p-2 text-blue-600 hover:text-blue-800"
                            >
                              <Edit className="h-5 w-5" />
                            </button>
                            <button
                              onClick={() => handleDelete(blogs._id)}
                              className="p-2 text-red-600 hover:text-red-800"
                            >
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab for Editing */}
      {isEditing && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
        >

          {/* Meeting Editing */}
          {currentItem.type === 'meeting' && (
            <UpdateMeetingForm
              currentItem={currentItem}
              onUpdate={handleUpdate}
              onCancel={() => setIsEditing(false)}
            />
          )}

          {/* Case Editing */}
          {currentItem.type === 'case' && (
            <UpdateCaseForm
              currentItem={currentItem}
              onUpdate={handleUpdate}
              onCancel={() => setIsEditing(false)}  
            />
          )}
          
          {/* Blog Editing */}
          {currentItem.type === 'blog' && <p>Editing Blogs Section</p>}
        </div>
      )}

      {/* Tab for Adding */}
      {isAdding && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">

          {/* Add Meeting */}
          {activeTab === 'meetings' && (
          <CreateMeetingForm
            onAdd={handleAdd}
            onCancel={() => setIsAdding(false)}
          />
          )}

          {/* Add Case */}
          {activeTab === 'cases' && (
            <CreateCaseForm
              onAdd={handleAdd}
              onCancel={() => setIsAdding(false)}
            />
          )}

          {/* Add Blog */}
          {activeTab === 'blogs' && (
            <CreateBlogForm
              onAdd={handleAdd}
              onCancel={() => setIsAdding(false)}
            />
          )}
        </div>
      )}
    </>
  );
}