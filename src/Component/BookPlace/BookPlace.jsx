import React, { useState } from "react";
import toast from "react-hot-toast";

const BookPlace = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    travelDate: "",
    persons: 1,
    specialRequest: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(" Your booking request has been submitted successfully!");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-base-200 py-12 px-4">
      <div className="bg-base-100 shadow-xl rounded-xl w-full max-w-lg p-8">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Book Your Tour
        </h2>
        <p className="text-center text-base-content/70 mb-8">
          Fill out the form below to confirm your booking and start your
          adventure!
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-base-content font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="input input-bordered w-full focus:border-primary focus:ring-primary"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-base-content font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="input input-bordered w-full focus:border-primary focus:ring-primary"
              required
            />
          </div>

          {/* Travel Date */}
          <div>
            <label className="block text-base-content font-medium mb-2">
              Travel Date
            </label>
            <input
              type="date"
              name="travelDate"
              value={formData.travelDate}
              onChange={handleChange}
              className="input input-bordered w-full focus:border-primary focus:ring-primary"
              required
            />
          </div>

          {/* Persons */}
          <div>
            <label className="block text-base-content font-medium mb-2">
              Number of Persons
            </label>
            <input
              type="number"
              name="persons"
              value={formData.persons}
              onChange={handleChange}
              min="1"
              className="input input-bordered w-full focus:border-primary focus:ring-primary"
            />
          </div>

          {/* Special Request */}
          <div>
            <label className="block text-base-content font-medium mb-2">
              Special Request (Optional)
            </label>
            <textarea
              name="specialRequest"
              value={formData.specialRequest}
              onChange={handleChange}
              rows="3"
              placeholder="Write your request here..."
              className="textarea textarea-bordered w-full focus:border-primary focus:ring-primary"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-full text-white hover:bg-secondary hover:text-neutral transition-all duration-300"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookPlace;
