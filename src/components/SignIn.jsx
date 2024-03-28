import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";

const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, user.email, user.password).then((auth) => {
      if (auth) {
        navigate("/");
      }
    });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <Link to="/">
        <img
          src="/public/assets/login-logo.png"
          alt="Logo-image"
          className="w-[100px] mt-[18px] mx-[20px] object-contain"
        />
      </Link>
      <div className="border-[1px] border-gray w-[320px] rounded-md p-5">
        <h2 className="font-semibold text-3xl mb-5">Sign in</h2>
        <form className="flex flex-col gap-3">
          <div className="flex flex-col ">
            <label htmlFor="email" className="font-bold text-[14px]">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              className="w-[100%] h-[30px] text-[14px] p-2 border-[2px] rounded-sm border-black outline-none"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              value={user.email}
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="password" className="font-bold text-[14px]">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-[100%] h-[30px] text-[14px] p-2 border-[2px] rounded-sm border-black border- outline-none"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              value={user.password}
            />
          </div>
          <button
            type="submit"
            onClick={handleSignIn}
            className="w-[100%] h-[30px] font-normal flex justify-center items-center p-2 bg-[#cd9042] rounded-sm outline-none"
          >
            Sign in
          </button>
          <h5 className="text-[12px] font-medium">
            {`By continuing, you agree to Amazon's Fake Clone conditions of use
            and privacy notice.`}
          </h5>
          <button
            type="submit"
            onClick={handleRegister}
            className="w-[100%] h-[30px] text-[14px] font-normal border-[1px] border-black flex justify-center items-center p-2 bg-gray-200 rounded-sm outline-none"
          >
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
