import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc"; // Google icon

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center bg-base-200 py-12 px-4">
      <div className="bg-base-100 shadow-xl rounded-xl w-full max-w-md p-8">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Create an Account
        </h2>
      

        {/* Form */}
        <form className="space-y-4">
          {/* Name field */}
          <div>
            <label className="block text-base-content font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="input input-bordered w-full focus:border-primary focus:ring-primary"
              required
            />
          </div>

          {/* Photo field */}
          <div>
            <label className="block text-base-content font-medium mb-2">
              Photo URL
            </label>
            <input
              type="text"
              placeholder="Enter your photo URL"
              className="input input-bordered w-full focus:border-primary focus:ring-primary"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-base-content font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full focus:border-primary focus:ring-primary"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-base-content font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="input input-bordered w-full pr-10 focus:border-primary focus:ring-primary"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-base-content/70 hover:text-primary"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* Terms and condition */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-primary"
              required
            />
            <span className="text-sm text-base-content/70">
              I agree to the{" "}
              <a href="#" className="text-primary hover:underline">
                Terms & Conditions
              </a>
            </span>
          </div>

          {/* Register button */}
          <button
            type="submit"
            className="btn btn-primary w-full text-white hover:bg-secondary hover:text-neutral transition-all duration-300"
          >
            Register
          </button>
        </form>

        {/* Google Sign-in */}
        <div className="divider text-base-content/60">OR</div>
        <button
          className="btn btn-outline w-full flex items-center justify-center gap-2 hover:border-primary hover:text-primary"
          onClick={() => alert("Google Sign-In Clicked")}
        >
          <FcGoogle size={22} />
          <span className="font-medium">Sign in with Google</span>
        </button>

        {/* Bottom link */}
        <p className="text-center text-sm mt-6 text-base-content/70">
          Already have an account?{" "}
          <a href="/login" className="text-primary hover:underline font-medium">
            Login here
          </a>
        </p>
      </div>
    </section>
  );
};

export default Register;
