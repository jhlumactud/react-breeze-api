import { Link, Route, Routes } from 'react-router-dom';

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {

  return (
    
      <div className="bg-slate-100 min-h-screen">
        <nav className="rounded bg-indigo-900 text-white px-2 py-.5 sm:px-4">
          <div
            className="container mx-auto flex flex-wrap items-center justify-between"
            bis_skin_checked="1"
          >
            <a href="https://laraveller.com/" className="flex items-center">
              JohnSnow ™
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="
                ml-3
                inline-flex
                items-center
                rounded-lg
                p-2
                text-sm text-gray-500
                hover:bg-gray-100
                focus:outline-none focus:ring-2 focus:ring-gray-200
                dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600
                md:hidden
              "
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
              bis_skin_checked="1"
            >
              <ul
                className="
                  mt-4
                  flex flex-col
                  rounded-lg
                  p-4
                  md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium
                "
              >
                <li>
                  <Link
                    to="/"
                    className="block rounded py-2 pr-4 pl-3 text-white"
                    aria-current="page"
                    >Home</Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="block rounded py-2 pr-4 pl-3 text-white"
                    aria-current="page"
                    >Login</Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="block rounded py-2 pr-4 pl-3 text-white"
                    aria-current="page"
                    >Register</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className='max-w-7xl mx-auto mt-6'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={ <Login />} />
            <Route path="/register" element={ <Register />} />
          </Routes>
        </div>
    </div>
  )
  
}

export default App
