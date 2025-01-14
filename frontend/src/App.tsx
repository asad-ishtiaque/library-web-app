import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RouteNames from "./routes/RouteNames.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signin from "./pages/SignIn/index.js";
import Signup from "./pages/SignUp/index.js";
import Home from "./pages/Home/index.js";
import ProtectedRoute from "./routes/ProtectedRoutes.js";

export default function App() {
  return (
    <div>
      <ToastContainer autoClose={3000} />
      <Router>
        <Routes>
          <Route path={RouteNames.Signin.route} element={<Signin />} />
          <Route path={RouteNames.Signup.route} element={<Signup />} />

          <Route
            path={RouteNames.Home.route}
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
