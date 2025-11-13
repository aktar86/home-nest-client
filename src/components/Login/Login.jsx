import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Google from "../../assets/google.png";
import { AuthContext } from "../../context/AuthContext";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";

const Login = () => {
  const { signInWithGoogle, signInUser, darkMode } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const handleEmailPassSignInUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // password validation
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&^*(),.?:"{}|<>]).{6,}$/;

    if (!passwordPattern.test(password)) {
      return toast.error(
        "Password must be at least 6 characters long with one uppercase, one lowercase letter and one special character",
        {
          style: { backgroundColor: "#fef2f2", color: "#991b1b" },
        }
      );
    }

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location.state || "/");
        toast.success("Account login successfully!");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  //handle google signin
  const handleUserSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div
        className={`${
          darkMode ? "bg-gray-800" : " bg-red-100 "
        } flex justify-center items-center min-h-screen`}
      >
        <div
          className={`${
            darkMode ? "bg-gray-700 text-white" : "bg-white"
          }   shadow-xl p-8 rounded-lg w-full max-w-md sm:max-w-sm md:max-w-md lg:max-w-lg`}
        >
          <h1
            className={`${
              darkMode ? "text-white" : "text-gray-600"
            } text-xl font-bold  mb-2"`}
          >
            Welcome back to <br />
            <span>
              <h1 className="text-5xl text-[#FF385C]"> HomeNest</h1>
            </span>
          </h1>
          <p className={`${darkMode ? "text-white" : " text-gray-600"} mb-6`}>
            Login Your Account
          </p>

          <form onSubmit={handleEmailPassSignInUser} className="space-y-5">
            {/* email */}
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                className="w-full border p-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF385C]"
                type="email"
                name="email"
                placeholder="Type Your Email"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block font-medium">Password</label>
              <div className="relative">
                <input
                  className="w-full border p-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF385C]"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Type your password"
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowPassword(!showPassword);
                  }}
                  className="absolute top-2 right-3"
                >
                  {showPassword ? <EyeOff></EyeOff> : <Eye></Eye>}
                </button>
              </div>
            </div>
            <div>
              <a className="underline text-gray-700 hover:text-gray-900">
                Forget your Password?
              </a>
            </div>

            {/* Submit Button */}
            <div>
              <input
                className="btn btn-primary w-full"
                type="submit"
                value="Login"
              />
            </div>

            {/* Or Divider */}
            <div className="flex items-center gap-3 my-4">
              <hr className="flex-1 border-gray-300" />
              <span className="text-gray-500 text-sm font-medium">Or</span>
              <hr className="flex-1 border-gray-300" />
            </div>
          </form>
          {/* Social */}
          <div
            onClick={handleUserSignInWithGoogle}
            className="w-full flex items-center gap-5 btn btn-outline"
          >
            <img className="w-5" src={Google} alt="" />
            <p> Sign In with google</p>
          </div>
          <p className="mt-5">
            Don't have an account? Please{" "}
            <Link className="text-blue-500 underline" to="/register">
              Register Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
