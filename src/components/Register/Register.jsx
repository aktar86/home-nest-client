import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";
import Google from "../../assets/google.png";

const Register = () => {
  const { signInWithGoogle, createUser, darkMode } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photourl.value;
    const terms = form.terms.checked;

    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&^*(),.?:"{}|<>]).{6,}$/;

    if (!passwordPattern.test(password)) {
      return toast.error(
        "Password must be at least 6 characters with uppercase, lowercase & special character",
        {
          style: { backgroundColor: "#fef2f2", color: "#991b1b" },
        }
      );
    }

    if (!terms) {
      return toast.error("Accept our terms and conditions!", {
        style: { backgroundColor: "#fef2f2", color: "#991b1b" },
      });
    }

    try {
      setLoading(true);

      await createUser(email, password);

      const userInfo = { name, email, photoURL };

      const res = await fetch("https://home-nest-server-api.vercel.app/users", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userInfo),
      });

      const data = await res.json();
      if (data.insertedId) {
        toast.success("Account created successfully. Login now!");
        navigate(location.state || "/");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();

      const userInfo = {
        name: result.user.displayName,
        email: result.user.email,
        photoURL: result.user.photoURL,
      };

      await fetch("https://home-nest-server-api.vercel.app/users", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userInfo),
      });

      toast.success("Login successful!");
      navigate(location.state || "/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-800" : "bg-red-100"
      } flex justify-center items-center min-h-screen`}
    >
      <div
        className={`${
          darkMode ? "bg-gray-700 text-white" : "bg-white"
        } p-8 rounded-lg shadow-xl w-full max-w-md sm:max-w-sm md:max-w-md lg:max-w-lg`}
      >
        <h1
          className={`${
            darkMode ? "text-white" : "text-gray-600"
          } text-xl font-bold mb-2`}
        >
          Welcome to <br />
          <span>
            <h1 className="text-5xl text-[#FF385C]">HomeNest</h1>
          </span>
        </h1>
        <p
          className={`${
            darkMode && "text-white"
          } text-gray-600 mb-6 font-semibold`}
        >
          Register Your Account
        </p>

        <form onSubmit={handleRegister} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full border p-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF385C]"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block font-medium mb-1">Photo URL</label>
            <input
              type="text"
              name="photourl"
              placeholder="e.g. your image link"
              className="w-full border p-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF385C]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Type Your Email"
              className="w-full border p-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF385C]"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block font-medium mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Type your password"
                className="w-full border p-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF385C]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-2 right-3"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </div>

          {/* Terms */}
          <div>
            <label className="label flex items-center gap-2">
              <input
                type="checkbox"
                name="terms"
                className="checkbox rounded-full"
              />
              Accept our terms and conditions
            </label>
          </div>

          {/* Submit */}
          <div>
            <input
              type="submit"
              disabled={loading}
              value={loading ? "Registering..." : "Register"}
              className="btn btn-secondary w-full"
            />
          </div>

          {/* Or Divider */}
          <div className="flex items-center gap-3 my-4">
            <hr className="flex-1 border-gray-300" />
            <span className="text-gray-500 text-sm font-medium">Or</span>
            <hr className="flex-1 border-gray-300" />
          </div>
        </form>

        {/* Google Sign-in */}
        <div
          onClick={handleGoogleSignIn}
          className="w-full flex items-center gap-5 btn btn-outline cursor-pointer"
        >
          <img src={Google} alt="Google" className="w-5" />
          <p>Sign In with Google</p>
        </div>

        <p className="mt-5 text-center">
          Already have an account?{" "}
          <Link className="text-blue-500 underline" to="/login">
            Login Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
