import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, createContext, useContext } from "react";
import Navbar from "./pages/Navbar";
import Hero from "./pages/hero-page/Hero";
import Meeting from "./pages/Meeting";
import Case from "./pages/Case";
import Blog from "./pages/Blog";
import Admin from "./pages/admin/Admin";

// Create Auth Context
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  const loginAsAdmin = () => setIsAdmin(true);
  const logout = () => setIsAdmin(false);

  return (
    <AuthContext.Provider value={{ isAdmin, loginAsAdmin, logout }}>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route index element={<Hero />} />
            <Route path="meetings" element={<Meeting />} />
            <Route path="cases" element={<Case />} />
            <Route path="blogs" element={<Blog />} />
            <Route
              path="admin"
              element={
                  <Admin />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

// Protected Route Component
function ProtectedRoute({ children }) {
  const { isAdmin } = useAuth();

  if (!isAdmin) {
    // Redirect to homepage if not logged in as admin
    return <Navigate to="/" replace />;
  }

  return children;
}