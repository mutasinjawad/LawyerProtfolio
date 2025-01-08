import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, createContext, useContext, useEffect } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

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
import Sample from "./pages/Smaple";
import { app } from "./firebase";
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
  
  const googleLogin = () => {
    setIsLoading(true);
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setIsLoading(false);
      setIsAdmin(currentUser);
    //   if(currentUser){
    //     // get token and store token
    //     const userInfo = {email : currentUser.email}
    //     .then(res => {
    //       if(res.data.token){
    
    //         setIsLoading(false)
    //       }
    //     })
    //   }
    //   else{
    //     // TODO : remove token (if token stored in client side)
    //     localStorage.removeItem("access-token")
    //     setIsLoading(false)
    //   }
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
          <Navbar />
          <Routes>
            <Route index element={<Hero />} />
            <Route path="meetings" element={<Meeting />} />
            <Route path="meetings/:id" element={<MeetingDetails />} />
            <Route path="cases" element={<Case />} />
            <Route path="cases/:id" element={<CaseDetails />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="blogs/:id" element={<BlogDetails />} />
            <Route path="sample" element={<Sample />} />
            <Route
              path="admin"
              element={
                <PrivateRouter>
                  <Admin />
                </PrivateRouter>
              }
            />
            <Route path="login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}