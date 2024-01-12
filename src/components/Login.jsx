import React, { useState, useRef } from "react";
import Header from "./Header";
import { validateUser } from "../utils/Validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //first validate the form  and then submit
    if (email.current.value === "" || password.current.value === "") {
      setErrorMsg("Please fill all the fields");
      return;
    }
    if (!isSignInForm && name.current.value === "") {
      setErrorMsg("Please fill all the fields");
      return;
    }
    const errorMessages = validateUser(
      email.current.value,
      password.current.value
    );
    setErrorMsg(errorMessages);

    //login signup thing
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <>
      <Header />
      <div className="absolute w-[100vw] h-[100vh] bg-cover bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg')]"></div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-4/12  p-12 bg-black my-28 mx-auto right-0 left-0 text-white rounded-md bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-5">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 rounded-sm w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 rounded-sm w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full rounded-sm bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg ">{errorMsg}</p>
        <button
          type="submit"
          onClick={handleButtonClick}
          className="p-4 my-6  w-full bg-red-700 rounded-lg"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now."
            : "Already a user? Sign In Now."}
        </p>
      </form>
    </>
  );
};

export default Login;
