import { useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Loginform = ({ setloggedin }) => {
  const navigate = useNavigate();

  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });

  const [showpassword, setshowpassword] = useState("password");

  function ChangeHandler(event) {
    setformdata((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function seePasswordHandler() {
    setshowpassword((prev) =>
      prev === "password" ? "text" : "password"
    );
  }

  function submithandler(event) {
    event.preventDefault();

    setloggedin(true);

    toast.success("Logged in successfully");

    navigate("/dashboard");
  }

  return (
    <form
      onSubmit={submithandler}
      className="space-y-6"
    >

      <label className="flex flex-col">
        <p className="mb-2 text-sm font-medium">
          Email Address <sup className="text-red-500">*</sup>
        </p>

        <input
          type="email"
          value={formdata.email}
          onChange={ChangeHandler}
          placeholder="Enter email address"
          name="email"
          required
          className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500 transition-all"
        />
      </label>
      <label className="flex flex-col relative">

<p className="mb-2 text-sm font-medium">
  Password <sup className="text-red-500">*</sup>
</p>

<input
  type={showpassword}
  value={formdata.password}
  onChange={ChangeHandler}
  placeholder="Enter password"
  name="password"
  required
  className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 pr-12 text-white outline-none focus:border-blue-500 transition-all"
/>

<span
  onClick={seePasswordHandler}
  className="absolute right-4 top-[43px] cursor-pointer text-gray-400 hover:text-white transition"
>
  {showpassword === "password" ? (
    <FaEye />
  ) : (
    <FaEyeSlash />
  )}
</span>

<Link
  to="#"
  className="text-right mt-2 text-sm text-blue-400 hover:text-blue-300 transition"
>
  Forgot Password?
</Link>

</label>

<button
type="submit"
className="
  w-full
  bg-blue-600
  hover:bg-blue-700
  transition-all
  duration-300
  rounded-lg
  py-3
  font-semibold
  text-lg
  shadow-lg
  shadow-blue-600/30
"
>
Sign In
</button>

</form>
);
};

export default Loginform;