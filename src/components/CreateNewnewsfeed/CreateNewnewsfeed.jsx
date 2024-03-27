import React, { useState } from 'react';
import './CreateNewnewsfeed.css'; // Import your CSS file for styling
import AccountNav from '../Navbar/accountNav';

const CreateNewnewsfeed = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    date: '',
    status: '',
    description: '',
    image: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    // Add logic to handle form submission (e.g., send data to backend)
    // Reset form data after submission if needed
    setFormData({
      title: '',
      category: '',
      date: '',
      status: '',
      description: '',
      image: ''
    });
  };

  return (
    <div className="news-feed-container">
      <AccountNav />
      <div className="news-form-container">
        <h2>Add New News</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
          />
          <input
            type="datetime-local"
            name="dateTime"
            placeholder="Date & Time"
            value={formData.dateTime}
            onChange={handleChange}
          />
          <input
            type="text"
            name="status"
            placeholder="Status"
            value={formData.status}
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      {/* Render existing news entries */}
    </div>
  );
};

export default CreateNewnewsfeed;
