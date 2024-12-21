import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Calendar, Briefcase, BookOpen, Plus, Edit, Trash2 } from 'lucide-react';
import { UpdateMeetingForm } from '../../components/UpdateMeeting';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('meetings');
  const [meetings, setMeetings] = useState([]);
  const [cases, setCases] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState({ type: '', id: '' });

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    const endpoint = `http://localhost:5000/${activeTab}`;
    const response = await fetch(endpoint);
    const data = await response.json();

    if (activeTab === 'meetings') setMeetings(data);
    if (activeTab === 'cases') setCases(data);
    if (activeTab === 'blogs') setBlogs(data);
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this item?')) return;

    const endpoint = `http://localhost:5000/meetings/${id}`;
    const response = await fetch(endpoint, { method: 'DELETE' });

    if (response.ok) {
      fetchData();
    }
  };

  const handleEdit = (type, id) => {
    setCurrentItem({ type, id });
    setIsEditing(!isEditing);
  };

  useEffect(() => {
    if (isEditing) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isEditing]);

  const handleUpdate = (updatedMeeting) => {
    setMeetings((prevMeetings) =>
      prevMeetings.map((meeting) =>
        meeting.id === updatedMeeting.id ? updatedMeeting : meeting
      )
    );
    setIsEditing(false);
  };

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
            <div className="p-6">
              <button
                onClick={() => {
                  setIsEditing(false);
                  setCurrentItem(null);
                }}
                className="mb-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add New
              </button>
              <div className="grid grid-cols-1 gap-6">
                {/* Meetings */}
                {activeTab === 'meetings' && (
                  <div>
                    {meetings.map((meeting) => (
                      <div
                        key={meeting.id}
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
                          <button
                            onClick={() => handleEdit("meeting", meeting.id)}
                            className="p-2 text-blue-600 hover:text-blue-800"
                          >
                            <Edit className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => handleDelete(meeting.id)}
                            className="p-2 text-red-600 hover:text-red-800"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {/* Cases */}
                {activeTab === 'cases' && (
                    <div>
                      {cases.map((cases) => (
                        <div
                          key={cases.id}
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
                            <button
                              onClick={() => handleEdit('case', cases.id)}
                              className="p-2 text-blue-600 hover:text-blue-800"
                            >
                              <Edit className="h-5 w-5" />
                            </button>
                            <button
                              onClick={() => handleDelete(cases.id)}
                              className="p-2 text-red-600 hover:text-red-800"
                            >
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                )}
                {/* Blogs */}
                {activeTab === 'blogs' && (
                    <div>
                      {blogs.map((blogs) => (
                        <div
                          key={blogs.id}
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
                              onClick={() => handleEdit("blog", blogs.id)}
                              className="p-2 text-blue-600 hover:text-blue-800"
                            >
                              <Edit className="h-5 w-5" />
                            </button>
                            <button
                              onClick={() => handleDelete(blogs.id)}
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
      {isEditing && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
        >
          {currentItem.type === 'meeting' && (
            <UpdateMeetingForm
              currentItem={currentItem}
              onUpdate={handleUpdate}
              onCancel={() => setIsEditing(false)}
            />
          )}
          {currentItem.type === 'case' && <p>Editing Cases Section</p>}
          {currentItem.type === 'blog' && <p>Editing Blogs Section</p>}
        </div>
      )}
    </>
  );
}