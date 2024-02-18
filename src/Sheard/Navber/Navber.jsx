import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";

import logo from "../../assets/logo.svg";
import { authContext } from "../../Provider/AuthProvider";
const Navber = () => {
  const { user, HandleLogOut } = useContext(authContext);
  const nav = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      {/* <li>
        <NavLink to="/contact">Contact</NavLink>
      </li> */}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {nav}
          </ul>
        </div>
        <img src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{nav}</ul>
      </div>
      <div className="navbar-end space-x-4">
        {user?.email && (
          <Link to="/cart">
            {" "}
            <HiOutlineShoppingBag className="text-2xl" />
          </Link>
        )}

        <CiSearch className="text-2xl" />
        {user ? (
          <>
            <img
              src={user.photoURL}
              alt=""
              className="h-14 w-14 rounded-full"
            />
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn m-1">
                Profile
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  {" "}
                  <Link t>{user.displayName}</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/cart">My Cart</Link>
                </li>
                <li>
                  {" "}
                  <button onClick={HandleLogOut}>LogOut</button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>

            <button className="btn btn-outline btn-error">Appointment</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navber;
