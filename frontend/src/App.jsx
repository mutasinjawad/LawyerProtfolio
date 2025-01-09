import { BrowserRouter, Routes, Route, useLocation, matchPath } from "react-router-dom";
import { useState, createContext, useContext, useEffect } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../firebase";

import Navbar from "./pages/Navbar";

import Hero from "./pages/hero-page/Hero";

import Meeting from "./pages/Meeting";
import Case from "./pages/Case";
import Blog from "./pages/Blog";

import MeetingDetails from "./pages/expandPage/MeetingDetails";
import BlogDetails from "./pages/expandPage/BlogDetails";
import CaseDetails from "./pages/expandPage/CaseDetails";

import Admin from "./pages/admin/Admin";
import Login from "./pages/admin/Login";

import { UpdateMeetingForm } from "./components/UpdateForm/UpdateMeeting";
import { UpdateCaseForm } from "./components/UpdateForm/UpdateCase";
import { UpdateBlogForm } from "./components/UpdateForm/UpdateBlog";

import PrivateRouter from "./private_router/PrivateRouter";

// Create Auth Context
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function App() {
  const [isAdmin, setIsAdmin] = useState(null);
  const [isLoading, setIsLoading] = useState("Loading...");
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  
  // Google login function
  const googleLogin = () => {
    setIsLoading(true);
    return signInWithPopup(auth, provider);
  };

  // Logout function
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Clear local storage or session-related data if necessary
        localStorage.removeItem("access-token");
        setIsAdmin(null);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error during logout:", error);
        setIsLoading(false);
      });
  };

  // Check if the user is logged in
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setIsLoading(false);
      setIsAdmin(currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const userInfo = { isAdmin, setIsAdmin, isLoading, setIsLoading, googleLogin, logOut };

  return (
    <AuthContext.Provider value={ userInfo }>
      <BrowserRouter>
        <div>
          <ConditionalNavbar />
          <Routes>
            <Route index element={<Hero />} />
            <Route path="meetings" element={<Meeting />} />
            <Route path="meetings/:id" element={<MeetingDetails />} />
            <Route path="cases" element={<Case />} />
            <Route path="cases/:id" element={<CaseDetails />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="blogs/:id" element={<BlogDetails />} />
            <Route
              path="admin"
              element={
                <PrivateRouter>
                  <Admin />
                </PrivateRouter>
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="update-meeting/:id" element={<PrivateRouter><UpdateMeetingForm /></PrivateRouter>} />
            <Route path="update-case/:id" element={<PrivateRouter><UpdateCaseForm /></PrivateRouter>} />
            <Route path="update-blog/:id" element={<PrivateRouter><UpdateBlogForm /></PrivateRouter>} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

// Conditional Navbar Component
function ConditionalNavbar() {
  const location = useLocation();

  // Define routes where the Navbar should not be displayed
  const includedRoutes = ["/", "/meetings", "/meetings/:id", "/cases", "/cases/:id", "/blogs", "/blogs/:id"];

  const shouldShowNavbar = includedRoutes.some((pattern) => matchPath(pattern, location.pathname));

  // Check if the current route is excluded
  if (shouldShowNavbar) {
    return <Navbar />;
  }

  return null;
}