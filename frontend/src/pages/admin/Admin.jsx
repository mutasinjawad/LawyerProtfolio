import { useState, useEffect, act } from 'react';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { Calendar, Briefcase, BookOpen, Plus, Edit, Trash2, Mails, Radio, House, LogOut } from 'lucide-react';
import { useAuth } from '../../App';

export default function AdminDashboard() {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('meetings');
  
  const [meetings, setMeetings] = useState([]);
  const [cases, setCases] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [liveLink, setLiveLink] = useState([]);
  const [messages, setMessages] = useState([]);

  // Fetch data based on the active tab
  const fetchData = async () => {
    const endpoint = `http://localhost:5000/${activeTab}`;
    const response = await fetch(endpoint);
    const data = await response.json();
    
    if (activeTab === 'meetings') setMeetings(data);
    if (activeTab === 'cases') setCases(data);
    if (activeTab === 'blogs') setBlogs(data);
    if (activeTab === 'messages') setMessages(data);
    if (activeTab === 'live') setLiveLink(data);
  };
    
  // Handle navigation
  const handleGoHome = () => {
    navigate('/');
  };

  // Handle add
  const handleAdd = () => {
    if (activeTab === 'meetings') {
      navigate('/add-meeting');
    }
    if (activeTab === 'cases') {
      navigate('/add-case');
    }
    if (activeTab === 'blogs') {
      navigate('/add-blog');
    }
    if (activeTab === 'live') {
      navigate('/add-live');
    }
  };

  // Handle edit
  const handleEdit = (type, id) => {
    if (type === "meeting") {
      navigate(`/update-meeting/${id}`);
    }
    if (type === "case") {
      navigate(`/update-case/${id}`);
    }
    if (type === "blog") {
      navigate(`/update-blog/${id}`);
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
        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
      }
      if (activeTab === 'live') {
        setLiveLink((prevLink) => prevLink.filter((link) => link._id !== id));
      }
      if (activeTab === 'messages') {
        setMessages((prevMessages) => prevMessages.filter((message) => message._id !== id));
      }
    } else {
      console.error('Failed to delete the item');
    }
  };

  // Fetch data on initial render annd when the active tab changes
  useEffect(() => {
    fetchData();
  }, [activeTab]);
  
  return (

    // Admin dashboard
    <>
      <div className="min-h-auto bg-gray-100">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between bg-white rounded-lg mb-4 p-4">
            <button onClick={handleGoHome} className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-secondary'>
              <House className="h-4 w-4 mr-2" />
              Go to Home
            </button>
            <button onClick={logOut} className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700'>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </button>
          </div>
          <div className="bg-white rounded-lg shadow">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex">
                {/* Tabs */}
                {['meetings', 'cases', 'blogs', 'live', 'messages'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`${
                      activeTab === tab
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } flex-1 py-4 px-1 text-center border-b-2 lg:text-lg text-base font-medium`}
                  >
                    <div className="flex flex-col items-center justify-center space-y-1 lg:flex-row lg:space-y-0 lg:space-x-2">
                      {tab === 'meetings' && <Calendar className="h-5 w-5" />}
                      {tab === 'cases' && <Briefcase className="h-5 w-5" />}
                      {tab === 'blogs' && <BookOpen className="h-5 w-5" />}
                      {tab === 'live' && <Radio className="h-5 w-5" />}
                      {tab === 'messages' && <Mails className="h-5 w-5" />}
                      <span className="text-sm lg:text-base">{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
                    </div>
                  </button>
                ))}
              </nav>
            </div>

            {/* Content */}
            <div className="p-6">

              {/* Add new button */}
              {activeTab !== 'messages' && (
              <button
                onClick={handleAdd}
                className="mb-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add New
              </button>
              )}

              <div className="grid grid-cols-1 gap-6">

                {/* Meetings List */}
                {activeTab === 'meetings' && (
                  <div>
                    {meetings.length > 0 ? ( 
                      meetings.map((meeting) => (
                        <div
                          key={meeting._id}
                          className="bg-white p-4 rounded-lg shadow mb-4 flex justify-between items-start max-h-96 overflow-y-auto"
                        >
                          <div>
                            <h3 className="lg:text-lg text-base font-medium">{meeting.title}</h3>
                            <p className="text-gray-500 lg:text-base text-sm">
                              {format(new Date(meeting.date), 'PPP')}
                            </p>
                            <p className="text-gray-800 lg:text-base text-sm font-regular mt-4">
                              {meeting.description.split('\n').map((line, index) => (
                                <span key={index}>
                                  {line}
                                  <br />
                                </span>
                              ))}
                            </p>
                          </div>
                          <div className="flex flex-col space-y-2">

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
                    ))
                  ) : <h1 className='text-gray-400'>No meetings found</h1>
                  }
                  </div>
                )}

                {/* Cases List */}
                {activeTab === 'cases' && (
                  <div>
                    {cases.length > 0 ? (
                      cases.map((cases) => (
                        <div
                          key={cases._id}
                          className="bg-white p-4 rounded-lg shadow mb-4 flex justify-between items-start max-h-96 overflow-y-auto"
                        >
                          <div>
                            <h3 className="lg:text-lg text-base font-medium">{cases.title}</h3>
                            <p className="text-gray-500 lg:text-base text-sm">
                              {format(new Date(cases.date), 'PPP')}
                            </p>
                            <h1 className="font-pmedium xl:text-base text-sm mt-6">Summary:</h1>
                            <p className="text-gray-800 lg:text-base text-sm font-regular">
                              {cases.summary.split('\n').map((line, index) => (
                                <span key={index}>
                                  {line}
                                  <br />
                                </span>
                              ))}
                            </p>
                            <h1 className="font-pmedium xl:text-base text-sm mt-6">Outcome:</h1>
                            <p className="text-gray-800 lg:text-base text-sm font-regular">
                              {cases.outcome.split('\n').map((line, index) => (
                                <span key={index}>
                                  {line}
                                  <br />
                                </span>
                              ))}
                            </p>
                          </div>
                          <div className="flex flex-col space-y-2">

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
                      ))
                    ) : <h1 className='text-gray-400'>No cases found</h1>
                    }
                    </div>
                )}

                {/* Blogs List */}
                {activeTab === 'blogs' && (
                  <div>
                      {blogs.length > 0 ? (
                        blogs.map((blogs) => (
                          <div
                            key={blogs._id}
                            className="bg-white p-4 rounded-lg shadow mb-4 flex justify-between items-start max-h-96 overflow-y-auto"
                          >
                            <div>
                              <h3 className="lg:text-lg text-base font-medium">{blogs.title}</h3>
                              <p className="text-gray-500 lg:text-base text-sm">
                                {format(new Date(blogs.date), 'PPP')}
                              </p>
                              <p className="text-gray-800 lg:text-base text-sm font-regular mt-4">
                                {blogs.description.split('\n').map((line, index) => (
                                  <span key={index}>
                                    {line}
                                    <br />
                                  </span>
                                ))}
                              </p>
                            </div>
                            <div className="flex flex-col space-y-2">
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
                      ))
                    ) : <h1 className='text-gray-400'>No blogs found</h1>
                    }
                    </div>
                )}

                {/* Live Link */}
                {activeTab === 'live' && (
                  <div>
                    {liveLink.length > 0 ? (
                      liveLink.map((link) => (
                        <div
                          key={link._id}
                          className="bg-white p-4 rounded-lg shadow mb-4 flex justify-between items-center max-h-96 overflow-y-auto"
                        >
                         <div>
                            <h3 className="lg:text-lg text-base font-medium">Live Details:</h3>
                            <p className="text-gray-500 lg:text-base text-sm">
                              {format(new Date(link.time), 'PPP p')}
                            </p>
                            <a href={link.link}
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-gray-800 lg:text-base text-sm font-regular mt-4 hover:cursor-pointer">{link.link}</a>
                          </div>
                          <button
                            onClick={() => handleDelete(link._id)}
                            className="p-2 text-red-600 hover:text-red-800"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      ))
                    ) : <h1 className='text-gray-400'>No live link added</h1>  
                    }
                  </div>
                )}

                {/* Messages List */}
                {activeTab === 'messages' && (
                  <div>
                    {messages.length > 0 ? (
                      messages.map((message) => (
                        <div
                          key={message._id}
                          className="bg-white p-4 rounded-lg shadow mb-4 flex justify-between items-start max-h-96 overflow-y-auto"
                        >
                          <div>
                            <h3 className="lg:text-lg text-base font-medium">{message.name}</h3>
                            <p className="text-gray-500 lg:text-base text-sm">{message.email}</p>
                            <p className="text-gray-500 lg:text-base text-sm">{format(new Date(message.time), 'PPP, hh:mm a')}</p>
                            <p className='lg:text-base text-sm font-medium lg:mt-8 mt-6'>Message:</p>
                            <p className="text-gray-800 lg:text-base text-sm font-regular">
                              {message.message.split('\n').map((line, index) => (
                                <span key={index}>
                                  {line}
                                  <br />
                                </span>
                              ))}
                            </p>
                          </div>
                          <button
                              onClick={() => handleDelete(message._id)}
                              className="p-2 text-red-600 hover:text-red-800"
                            >
                              <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      ))
                    ) : <h1 className='text-gray-400'>No messages found</h1>}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}