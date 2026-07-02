import bgimg from "../assets/frame.png";
import loginimg from "../assets/login.png";
import signupimg from "../assets/signup.png";

import Loginform from "./Loginform";
import Signupform from "./Signupfrom";

const Template = ({
  title,
  desc1,
  desc2,
  formtype,
  setloggedin,
}) => {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-black text-white flex justify-center items-center px-6 py-10">

      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Section */}

        <div>

          <h1 className="text-4xl font-bold leading-tight">
            {title}
          </h1>

          <p className="mt-4 text-lg text-gray-400">
            {desc1}
            <br />
            <span className="text-cyan-400 italic">
              {desc2}
            </span>
          </p>

          <div className="mt-8">

            {formtype === "signup" ? (
              <Signupform setloggedin={setloggedin} />
            ) : (
              <Loginform setloggedin={setloggedin} />
            )}

          </div>

          {/* Divider */}

          <div className="flex items-center gap-4 my-8">

            <div className="flex-1 h-[1px] bg-gray-700"></div>

            <p className="text-gray-400">OR</p>

            <div className="flex-1 h-[1px] bg-gray-700"></div>

          </div>

          {/* Google Button */}

          <button
            className="
            w-full
            border
            border-gray-700
            rounded-lg
            py-3
            hover:bg-gray-900
            transition
            duration-300
            font-semibold
            "
          >
            Continue with Google
          </button>

        </div>

        {/* Right Section */}

        <div className="relative flex justify-center">

          <img
            src={bgimg}
            alt="Background Pattern"
            className="
            absolute
            top-5
            left-5
            w-[95%]
            rounded-xl
            opacity-50
            "
          />

          <img
            src={
              formtype === "signup"
                ? signupimg
                : loginimg
            }
            alt="Student"
            className="
            relative
            z-10
            rounded-xl
            shadow-2xl
            "
          />

        </div>

      </div>

    </div>
  );
};

export default Template;