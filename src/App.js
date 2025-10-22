// App.js
import { useState, useEffect } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  // mock user authentication
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  // programmatic navigation when user logs in/out
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/"); // go home after login
    } else {
      navigate("/login"); // go to login after logout
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="app">
      {/* Conditionally render NavBar or redirect */}
      {isLoggedIn ? <NavBar logout={logout} /> : <Navigate to="/login" />}
      {/* Pass login function to child components via context */}
      <Outlet context={login} />
    </div>
  );
}

export default App;