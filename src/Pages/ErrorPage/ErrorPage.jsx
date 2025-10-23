import React from "react";
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-base-content px-4">
      {/* helmet */}
      <title>Not Found - World Travel </title>
      <div className="text-center space-y-6">
        {/* Illustration */}
        <img
          src="http://sarwatech.com/_next/static/media/404.200e7745.png"
          alt="404 Illustration"
          className="w-72 mx-auto drop-shadow-lg"
        />

        {/* Error Text */}
        <h2 className="text-2xl md:text-3xl font-semibold">
          Oops! Page Not Found
        </h2>
        <p className="max-w-md mx-auto text-base-content/70">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back to exploring the world!
        </p>

        {/* Button */}
        <div>
          <Link
            to="/"
            className="btn btn-primary hover:btn-secondary text-white flex items-center gap-2 mx-auto"
          >
            <FaArrowLeft />
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
