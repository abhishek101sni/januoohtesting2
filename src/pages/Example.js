import React, { useState, useEffect } from "react";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://www.januskoncepts.in/janusoohadmin/api/api_blog/fetch_blog.php"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("hello blogs data" ,data )
        setBlogs(data); 
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Blog List</h2>
      {blogs.length === 0 ? (
        <p>No blogs available.</p>
      ) : (
        <ul>
          {blogs.map((blog, index) => (
            <li key={index}>
              <h3>{blog.blog_title}</h3>
              <p>{blog.description}</p>
              <img src={blog.image} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BlogList;
