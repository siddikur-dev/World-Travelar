import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../../Provider/AuthContext/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { VscEyeClosed } from "react-icons/vsc";
import { FaRegEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { signInWithMailPass, resetPassword, signInGoogle } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef();

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email?.value?.trim();
    const password = form.password?.value;

    if (!email || !password) {
      // simple validation
      toast.warn("Please provide both email and password.");
      return;
    }

    signInWithMailPass(email, password)
      .then((userCredential) => {
        const loggedUser = userCredential.user;
        // optional: you can redirect or update UI here
        toast.success("Login successful");
        navigate(location.state || "/");
        form.reset();
      })
      .catch((error) => {
        console.log("login error", error);
        toast.error("Wrong Mail/Password");
      });
  };

  // Reset Password
  const forgetPass = () => {
    const email = emailRef.current.value; // Access value of the input field
    if (!email) {
      toast.error("Please provide your email to reset the password.");
      return;
    }

    resetPassword(email)
      .then(() => {
        toast.success("Password reset link has been sent to your email.");
      })
      .catch((error) => {
        console.log("forget password", error.message);
        toast.error("Failed to send reset link.");
      });
  };

  // Sign In Google
  const signWithGoogle = () => {
    signInGoogle()
      .then((result) => {
        toast.success("User sign in successfully");
        navigate(location.state || '/');
      })
      .catch((error) => {
        toast.error("Failed To Google Sign");
        console.log("Sign in google", error);
      });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-base-200 py-12 px-4">
      {/* Helmet */}
      <title>Login - World Travel</title>
      <div className="bg-base-100 shadow-xl rounded-xl w-full max-w-md p-8">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Login Now!
        </h2>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block text-base-content font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              ref={emailRef}
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
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full pr-10 focus:border-primary focus:ring-primary"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-secondary cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <VscEyeClosed /> : <FaRegEye />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="checkbox checkbox-primary" />
              <span className="text-base-content/70">Remember me</span>
            </label>
            <button
              type="button"
              onClick={forgetPass}
              className="text-primary  cursor-pointer underline"
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full text-white hover:bg-secondary hover:text-neutral transition-all duration-300"
          >
            Login
          </button>
        </form>

        {/* Google Sign-in */}

        <div className="divider text-base-content/60">OR</div>
        <button
          className="btn btn-outline w-full flex items-center justify-center gap-2 hover:border-primary hover:text-primary"
          onClick={signWithGoogle}
        >
          <FcGoogle size={22} />
          <span className="font-medium">Sign in with Google</span>
        </button>
        {/* Bottom Link */}
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
