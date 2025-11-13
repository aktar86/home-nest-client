import React, { use, useState } from "react";
import Google from "../../assets/google.png";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";

const Register = () => {
  const { signInWithGoogle, createUser } = use(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const photourl = event.target.photourl.value;
    const terms = event.target.terms.checked;

    console.log(name, email, password, photourl, terms);
    // password validation check
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

    if (!terms) {
      return toast.error("Accept our terms and conditions!", {
        style: { backgroundColor: "#fef2f2", color: "#991b1b" },
      });
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location.state || "/");
        toast.success("Account create successfully. Login Now!");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // handle google sign in
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
      <div className="bg-red-100 flex justify-center items-center min-h-screen">
        <div className="bg-white    p-8 rounded-lg shadow-xl w-full max-w-md sm:max-w-sm md:max-w-md lg:max-w-lg">
          <h1 className="text-xl font-bold text-gray-600 mb-2">
            Welcome to <br />
            <span>
              <h1 className="text-5xl text-[#FF385C]"> HomeNest</h1>
            </span>
          </h1>
          <p className="text-gray-600 mb-6 font-semibold">
            Register Your Account
          </p>

          <form onSubmit={handleRegister} className="space-y-5">
            {/* name */}
            <div>
              <label className="block font-medium mb-1">Name</label>
              <input
                className="w-full border p-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF385C]"
                type="text"
                name="name"
                placeholder="Your Name"
              />
            </div>

            {/* photoURL */}
            <div>
              <label className="block font-medium mb-1">Photo URL</label>
              <input
                className="w-full border p-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF385C]"
                type="text"
                name="photourl"
                placeholder="e.g your image link"
              />
            </div>

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
            {/* Checkbox */}
            <div>
              <label className="label">
                <input
                  type="checkbox"
                  name="terms"
                  className="checkbox rounded-full"
                />
                Accept our terms and conditions
              </label>
            </div>

            {/* Submit Button */}
            <div>
              <input
                className="btn btn-primary w-full"
                type="submit"
                value="Register"
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
            Already have an account? Please{" "}
            <Link className="text-blue-500 underline" to="/login">
              Login Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
