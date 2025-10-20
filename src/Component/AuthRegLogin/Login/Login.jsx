import React, { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center bg-base-200 py-12 px-4">
      <div className="bg-base-100 shadow-xl rounded-xl w-full max-w-md p-8">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Welcome Back!
        </h2>
        <p className="text-center text-base-content/70 mb-8">
          Login to{" "}
          <span className="text-secondary font-semibold">World Traveller</span>{" "}
          and continue your journey.
        </p>

        {/* Form */}
        <form className="space-y-4">
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

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="checkbox checkbox-primary" />
              <span className="text-base-content/70">Remember me</span>
            </label>
            <a href="#" className="text-primary hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full text-white hover:bg-secondary hover:text-neutral transition-all duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm mt-6 text-base-content/70">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="text-primary hover:underline font-medium"
          >
            Register here
          </a>
        </p>
      </div>
    </section>
  );
};

export default Login;
