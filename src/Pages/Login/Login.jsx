import React, { useContext } from "react";
import signupimg from "../../assets/images/login/login.svg";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { handleLogin, handleSignWithGoogle } = useContext(authContext);

  const navigate = useNavigate();
  const location = useLocation();
  const LoginUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    handleLogin(email, password)
      .then((result) => {
        // console.log(result);
        navigate(location?.state ? location.state : "/");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your Login successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        // alert(`${error}`);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${error.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
        // console.log(error);
      });
  };
  const GoogleSignIn = () => {
    handleSignWithGoogle()
      .then((result) => {
        navigate(location?.state ? location.state : "/");
        console.log(result.user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your Login successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${error.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(error);
      });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-10 md:gap-4">
      <div>
        <img src={signupimg} alt="" />
      </div>
      <div className=" m-10 border py-10 h-[750px] ">
        <h1 className="text-2xl font-bold my-5  text-center">Login</h1>
        <form onSubmit={LoginUser} className="w-5/6 mx-auto space-y-3">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full "
            name="email"
            required
          />
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full "
            required
            name="password"
          />
          <button className="w-full bg-[#ff3811] mt-5 rounded-lg text-white p-3">
            <input type="submit" value="Sign In" />
          </button>
        </form>
        <div className="text-center">
          <h1 className="my-5">Or Login with</h1>
          <div className="flex justify-center space-x-5 ">
            <button>
              <span className="bg-[#395185] text-white w-10 h-10 flex items-center justify-center text-3xl rounded-full">
                <FaFacebookF />
              </span>
            </button>
            <button>
              <span className="bg-[#0a66c2] text-white w-10 h-10 flex items-center justify-center text-3xl rounded-full">
                <FaLinkedinIn />
              </span>
            </button>
            <button onClick={() => GoogleSignIn()}>
              <span className="bg-[#ee6e64] text-white w-10 h-10 flex items-center justify-center text-3xl rounded-full">
                <FaGoogle />
              </span>
            </button>
          </div>

          <h1 className="my-10">
            Have an account?
            <span className="text-[#ff3811]">
              <Link to="/signup">Sign Up</Link>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
