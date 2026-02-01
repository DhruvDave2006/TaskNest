import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <header className="fixed top-0 left-0 right-0 z-50 shadow-md w-full">
        <nav className="relative bg-blue-950 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-22 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
                  command="--toggle"
                  commandfor="mobile-menu"
                  type="button"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <svg
                    aria-hidden="true"
                    className="size-6 in-aria-expanded:hidden"
                    data-slot="icon"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="size-6 not-in-aria-expanded:hidden"
                    data-slot="icon"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M6 18 18 6M6 6l12 12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex shrink-0 items-center justify-left sm:items-stretch sm:justify-center cursor-pointer">
                <img 
                onClick={()=> navigate('/')}
                  alt="Your Company"
                  className="h-15 w-auto"
                  src="/TaskNestFinal.png"
                />
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <Link aria-current="page" className="nav-det block rounded-md px-3 py-2 text-xl text-gray-300 hover:bg-white/5 hover:text-white" to="/Dashboard">
                      Dashboard
                    </Link>
                    <Link className="nav-det block rounded-md px-3 py-2 text-xl text-gray-300 hover:bg-white/5 hover:text-white" to="/Projects">
                      Projects
                    </Link>
                    <Link className="nav-det block rounded-md px-3 py-2 text-xl text-gray-300 hover:bg-white/5 hover:text-white" to="/Tasks">
                      Tasks
                    </Link>
                    <Link className="nav-det block rounded-md px-3 py-2 text-xl text-gray-300 hover:bg-white/5 hover:text-white" to="/User">
                     User
                    </Link>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  className="relative rounded-full p-1 text-white hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
                  type="button"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <svg
                    aria-hidden="true"
                    className="size-6"
                    data-slot="icon"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <el-dropdown class="relative ml-3">
                  <button className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
                      src="icons8-profile.gif"
                    />
                  </button>
                  <el-menu
                    anchor="bottom end"
                    class="w-48 origin-top-right rounded-md bg-gray-800 py-1 outline -outline-offset-1 outline-white/10 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                    popover=""
                  >
                    <Link
                      className="account block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:outline-hidden"
                      to="/Profile"
                    >
                      Your profile
                    </Link>
                    <Link
                      className="account block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:outline-hidden"
                      to="/Settings"
                    >
                      Settings
                    </Link>
                    <Link
                      className="account block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:outline-hidden"
                      to="/Login"
                    >
                      Sign out
                    </Link>
                  </el-menu>
                </el-dropdown>
              </div>
            </div>
          </div>
          <el-disclosure class="block sm:hidden" hidden="" id="mobile-menu">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <a
                aria-current="page"
                className="nav-det block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                href="#"
              >
                Dashboard
              </a>
              <a
                className="nav-det block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                href="#"
              >
               Projects
              </a>
              <a
                className="nav-det block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                href="#"
              >
                Tasks
              </a>
              <a
                className="nav-det block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                href="#"
              >
                User
              </a>
            </div>
          </el-disclosure>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
