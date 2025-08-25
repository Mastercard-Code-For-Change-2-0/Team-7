import React, { useState } from 'react';

const Join = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    Image: '',
    location: '',
    quantity: ''  
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Form submitted!');
  };

  return (
    <>

      <section className="my-5 d-flex justify-content-center">
        <form 
          onSubmit={handleSubmit} 
          className="p-4 border rounded" 
          style={{ maxWidth: '500px', width: '100%' }}
        >
          <h3 className="mb-3 text-center">Donation Form</h3>

          <div className="mb-3">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="description"
              name="description"
              placeholder="Description"
              className="form-control"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="file"
              name="Image"
              placeholder="Upload image"
              className="form-control"
              value={formData.Image}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="form-control"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              className="form-control"
              value={formData.quantity}
              onChange={handleChange}
              min="1"
              required
            />
          </div>

          <button 
            type="submit" 
            className="btn btn-primary w-100 bg-gradient-to-r from-indigo-600 to-purple-600">
            Submit
          </button>
        </form>
      </section>

      {/* ... footer... */}
    </>
  );
};

export default Join;
