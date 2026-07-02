import { useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Signupform = ({ setloggedin }) => {
  const navigate = useNavigate();

  const [formdata, setformdata] = useState({
    workas: "student",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [showpassword, setshowpassword] = useState("password");
  const [showconpassword, setconshowpassword] = useState("password");

  function changehandler(event) {
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

  function seeconPasswordHandler() {
    setconshowpassword((prev) =>
      prev === "password" ? "text" : "password"
    );
  }

  function submithandler(event) {
    event.preventDefault();

    if (formdata.password === formdata.confirmpassword) {
      toast.success("Account created successfully");
      console.log(formdata);
      navigate("/login");
    } else {
      toast.error("Confirm password does not match");

      setformdata((prev) => ({
        ...prev,
        confirmpassword: "",
      }));
    }
  }

  return (
    <div className="w-full">
      <form
        onSubmit={submithandler}
        className="space-y-6"
      >
            <div className="flex w-fit rounded-full bg-gray-800 p-1 gap-2">

<input
  type="radio"
  name="workas"
  value="student"
  checked={formdata.workas === "student"}
  id="student"
  onChange={changehandler}
  className="hidden"
/>

<label
  htmlFor="student"
  className={`px-6 py-2 rounded-full cursor-pointer transition-all duration-300 font-medium ${
    formdata.workas === "student"
      ? "bg-blue-600 text-white"
      : "text-gray-400 hover:text-white"
  }`}
>
  Student
</label>

<input
  type="radio"
  name="workas"
  value="instructor"
  checked={formdata.workas === "instructor"}
  id="instructor"
  onChange={changehandler}
  className="hidden"
/>

<label
  htmlFor="instructor"
  className={`px-6 py-2 rounded-full cursor-pointer transition-all duration-300 font-medium ${
    formdata.workas === "instructor"
      ? "bg-blue-600 text-white"
      : "text-gray-400 hover:text-white"
  }`}
>
  Instructor
</label>

</div>

<div className="grid md:grid-cols-2 gap-5">

<label className="flex flex-col">
  <p className="mb-2 text-sm font-medium">
    First Name <sup className="text-red-500">*</sup>
  </p>

  <input
    type="text"
    placeholder="Enter first name"
    onChange={changehandler}
    name="firstname"
    value={formdata.firstname}
    required
    className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500 transition-all"
  />
</label>

<label className="flex flex-col">
  <p className="mb-2 text-sm font-medium">
    Last Name <sup className="text-red-500">*</sup>
  </p>

  <input
    type="text"
    placeholder="Enter last name"
    onChange={changehandler}
    name="lastname"
    value={formdata.lastname}
    required
    className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500 transition-all"
  />
</label>

</div>

<label className="flex flex-col">
<p className="mb-2 text-sm font-medium">
  Email Address <sup className="text-red-500">*</sup>
</p>

<input
  type="email"
  placeholder="Enter email address"
  onChange={changehandler}
  name="email"
  value={formdata.email}
  required
  className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500 transition-all"
/>
</label>
        <div className="grid md:grid-cols-2 gap-5">

<label className="flex flex-col relative">
  <p className="mb-2 text-sm font-medium">
    Create Password <sup className="text-red-500">*</sup>
  </p>

  <input
    type={showpassword}
    value={formdata.password}
    onChange={changehandler}
    placeholder="Enter password"
    name="password"
    required
    className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 pr-12 text-white outline-none focus:border-blue-500 transition-all"
  />

  <span
    onClick={seePasswordHandler}
    className="absolute right-4 top-[43px] cursor-pointer text-gray-400 hover:text-white"
  >
    {showpassword === "password" ? <FaEye /> : <FaEyeSlash />}
  </span>
</label>

<label className="flex flex-col relative">
  <p className="mb-2 text-sm font-medium">
    Confirm Password <sup className="text-red-500">*</sup>
  </p>

  <input
    type={showconpassword}
    value={formdata.confirmpassword}
    onChange={changehandler}
    placeholder="Confirm password"
    name="confirmpassword"
    required
    className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 pr-12 text-white outline-none focus:border-blue-500 transition-all"
  />

  <span
    onClick={seeconPasswordHandler}
    className="absolute right-4 top-[43px] cursor-pointer text-gray-400 hover:text-white"
  >
    {showconpassword === "password" ? <FaEye /> : <FaEyeSlash />}
  </span>
</label>

</div>

<button
type="submit"
className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-lg py-3 font-semibold text-lg shadow-lg shadow-blue-600/30"
>
Create Account
</button>

</form>
</div>
);
};

export default Signupform;