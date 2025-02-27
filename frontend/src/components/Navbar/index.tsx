import { useNavigate } from "react-router-dom";
import RouteNames from "../../routes/RouteNames";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="bg-white  w-full z-20 top-0 start-0 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <p className="text-black font-extrabold text-lg">
            Book <span className="text-orange-500"> Library.</span>
          </p>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-black  hover:text-orange-400 font-extrabold focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-4 "
            onClick={() => {
              navigate(RouteNames.Signin.route);
            }}
          >
            Login
          </button>
          <button
            type="button"
            className="text-white bg-orange-500  hover:bg-orange-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center "
            onClick={() => {
              navigate(RouteNames.Signup.route);
            }}
          >
            Sign up
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-sm text-gray-900 font-extrabold hover:text-orange-600 rounded-sm md:p-0 "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-sm text-gray-900 font-extrabold rounded-sm hover:text-orange-400  md:p-0 "
                aria-current="page"
              >
                Categories
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-sm text-gray-900 font-extrabold rounded-sm hover:text-orange-400  md:p-0 "
              >
                About Us
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block py-2 px-3 text-sm text-gray-900 font-extrabold rounded-sm hover:text-orange-400  md:p-0 "
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
