import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const hoverlinks = (
      <>
        <li>
          <NavLink to="/technology" className="p-2 hover:bg-gray-100 rounded">
            প্রযুক্তি
          </NavLink>
        </li>
        <li>
          <NavLink to="/education" className="p-2 hover:bg-gray-100 rounded">
            শিক্ষা
          </NavLink>
        </li>
        <li>
          <NavLink to="/lifestyle" className="p-2 hover:bg-gray-100 rounded">
            লাইফস্টাইল
          </NavLink>
        </li>
        <li>
          <NavLink to="/travel" className="p-2 hover:bg-gray-100 rounded">
            ভ্রমণ
          </NavLink>
        </li>
        <li>
          <NavLink to="/sunamganj" className="p-2 hover:bg-gray-100 rounded">
            সুনামগঞ্জ
          </NavLink>
        </li>
        <li>
          <NavLink to="/moulvibazar" className="p-2 hover:bg-gray-100 rounded">
            মৌলভীবাজার
          </NavLink>
        </li>
        <li>
          <NavLink to="/sylhet" className="p-2 hover:bg-gray-100 rounded">
            সিলেট
          </NavLink>
        </li>
        <li>
          <NavLink to="/habiganj" className="p-2 hover:bg-gray-100 rounded">
            হবিগঞ্জ
          </NavLink>
        </li>
      </>
    );
    const links = (
      <>
        <li>
          <NavLink to={"/"}>প্রচ্ছদ</NavLink>
        </li>
        <li>
          <NavLink to={"/sylhet"}>সিলেট</NavLink>
        </li>
        <li>
          <NavLink to={"/national"}>জাতীয়</NavLink>
        </li>
        <li>
          <NavLink to={"/politics"}>রাজনীতি</NavLink>
        </li>
        <li>
          <NavLink to={"/internation"}>আন্তর্জাতিক</NavLink>
        </li>
        <li>
          <NavLink to={"/sports"}>খেলা</NavLink>
        </li>
        <li>
          <NavLink to={"/entertainment"}>বিনোদন</NavLink>
        </li>
        <li className="relative group">
          {/* "সব" with dropdown */}
          <NavLink to="/all">সব</NavLink>
          <ul className="absolute hidden group-hover:flex  bg-base-100 rounded-lg shadow-lg p-2 mt-2 -left-60 top-5 w-[500px]">
            {hoverlinks}
          </ul>
        </li>
        <li>
          <NavLink to={"/e-paper"}>ই-পেপার</NavLink>
        </li>
      </>
    );
    return (
      <div className="navbar bg-base-100 fixed  font-bangla border rounded shadow-md">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl font-bangla font-bold ">প্রিয় সিলেট</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn font-bangla md:mr-12">সাইন-ইন</a>
        </div>
      </div>
    );
};

export default Navbar;