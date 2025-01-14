import { useNavigate } from "react-router-dom";
import RouteNames from "../../routes/RouteNames";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-lg font-bold">Book Library</div>
        <button
          onClick={() => {
            localStorage.setItem("accessToken", "");
            navigate(RouteNames.Signin.route);
          }}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md focus:ring-2 focus:ring-red-300 focus:outline-none"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
