
import  { useState } from "react";
import { FaFacebook, FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdLock } from "react-icons/md";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 rounded-lg p-8 w-full max-w-md lg:ml-8">
     <div className="flex flex-col gap-4 mb-6 w-full">
        <div className="flex items-center justify-around border border-purple-500 rounded-lg py-2 px-4 cursor-pointer hover:bg-gray-200">
          <FcGoogle className="mr-2" />
          <span>Continue with Google</span>
        </div>
        <div className="flex items-center justify-around border border-purple-500 rounded-lg py-2 px-4 cursor-pointer hover:bg-gray-200">
          <FaFacebook className="text-blue-600 mr-2" />
          <span>Continue with Facebook</span>
        </div>
      </div>

      <p className="flex items-center mb-6 w-full">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="mx-2">Or connect with</span>
        <hr className="flex-grow border-t border-gray-300" />
      </p>

      <form className="w-full">
        <div className="mb-4">
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Email"
          />
        </div>
        <div className="flex items-center mb-4 relative">
          <input
            type={showPassword ? "text" : "password"}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Password"
          />
          <button
            type="button"
            className="absolute right-2 bg-transparent border-none cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
        </div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <label>Remember me</label>
          </div>
          <div className="flex items-center">
            <MdLock className="mr-1" />
            <span>Forgot password?</span>
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2 border text-black border-black rounded-lg hover:bg-purple-500 hover:text-white"
        >
          Continue
        </button>
      </form>
    </div>
  );
}

export default SignIn;
