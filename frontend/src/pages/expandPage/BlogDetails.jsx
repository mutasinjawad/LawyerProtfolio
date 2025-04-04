import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams(); // Get blog ID from route
  const [blog, setBlog] = useState(null); // State to store blog data

  // Fetch blog data using the ID
  useEffect(() => {
    const fetchBlog = async () => {
      const response = await fetch(`http://localhost:5000/blogs/${id}`); // Adjust API endpoint
      const data = await response.json();
      setBlog(data);
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>; // Show a loading state while fetching
  }

  return (
    <div className="flex items-center justify-center bg-[#eeeeee] px-6 md:pt-20 pt-14 lg:pt-24 pb-4 lg:px-12">
      <div className="w-full h-full bg-white rounded-[5px] xl:p-4 md:p-2 xs:p-2 p-1">
        <div className="flex items-center justify-between">
          <h2 className="text-black font-rmedium xl:text-[16px] lg:text-[15px] md:text-[16px] text-[12px]">{blog.title}</h2>
        </div>
        <p className="font-rregular text-gray-500 xl:text-[14px] md:text-[14px] text-[10px]">
          {new Date(blog.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
          })}
        </p>
        <div className="font-rregular lg:pt-10 xs:pt-4 pt-1 xl:text-[15px] lg:text-[12px] md:text-[14px] sm:text-[12px] xs:text-[11px] text-[10px]">
          {blog.description.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;