import { BrowserRouter, Routes, Route, useLocation, matchPath } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import { app } from "../firebase";

import Navbar from "./pages/Navbar";

import Hero from "./pages/hero-page/Hero";

import Services from "./pages/Services";
import AdministrativeLaw from "./pages/expandPage/services/AdministrativeLaw";
import AdmiraltyAndShipping from "./pages/expandPage/services/AdmiraltyAndShipping";
import AlternativeDisputeResolution from "./pages/expandPage/services/AlternativeDisputeResolution";
import AviationMatters from "./pages/expandPage/services/AviationMatters";
import BankingLitigation from "./pages/expandPage/services/BankingLitigation";
import BusinessSetup from "./pages/expandPage/services/BusinessSetup";
import CivilLitigation from "./pages/expandPage/services/CivilLitigation";
import CommercialLitigation from "./pages/expandPage/services/CommercialLitigation";
import CompanyFormationandRegistration from "./pages/expandPage/services/CompanyFormationandRegistration";
import ConstitutionalLaw from "./pages/expandPage/services/ConstitutionalLaw";
import Contracts from "./pages/expandPage/services/Contracts";
import CriminalProsecutionandDefense from "./pages/expandPage/services/CriminalProsecutionandDefense";
import DomesticandInternationalArbitration from "./pages/expandPage/services/DomesticandInternationalArbitration";
import EnvironmentalLaw from "./pages/expandPage/services/EnvironmentalLaw";
import FamilyMattersandChildCustody from "./pages/expandPage/services/FamilyMattersandChildCustody";
import GlobalInvestmentandCitizenship from "./pages/expandPage/services/GlobalInvestmentandCitizenship";
import GovernmentContractsandLitigation from "./pages/expandPage/services/GovernmentContractsandLitigation";
import IntellectualProperty from "./pages/expandPage/services/IntellectualProperty";

import Meeting from "./pages/Meeting";
import Case from "./pages/Case";
import Blog from "./pages/Blog";

import MeetingDetails from "./pages/expandPage/MeetingDetails";
import BlogDetails from "./pages/expandPage/BlogDetails";
import CaseDetails from "./pages/expandPage/CaseDetails";

import Contact from "./pages/Contact";
import Career from "./pages/Career";

import Admin from "./pages/admin/Admin";
import Login from "./pages/admin/Login";

import { UpdateMeetingForm } from "./components/UpdateForm/UpdateMeeting";
import { UpdateCaseForm } from "./components/UpdateForm/UpdateCase";
import { UpdateBlogForm } from "./components/UpdateForm/UpdateBlog";

import { CreateMeetingForm } from "./components/CreateForm/CreateMeeting";
import { CreateCaseForm } from "./components/CreateForm/CreateCase";
import { CreateBlogForm } from "./components/CreateForm/CreateBlog";
import { CreateLiveForm } from "./components/CreateForm/CreateLive";

import PrivateRouter from "./private_router/PrivateRouter";

import AuthContext, { useAuth } from "./hooks/useAuth";

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
        <div className="bg-whiteBg">
          <ConditionalNavbar />
          <Routes>
            <Route index element={<Hero />} />
            <Route path="services" element={<Services />} />
            <Route path="administrative-law" element={<AdministrativeLaw />} />
            <Route path="admiralty-and-shipping" element={<AdmiraltyAndShipping />} />
            <Route path="alternative-dispute-resolution" element={<AlternativeDisputeResolution />} />
            <Route path="aviation-matters" element={<AviationMatters />} />
            <Route path="banking-litigation" element={<BankingLitigation />} />
            <Route path="business-setup" element={<BusinessSetup />} />
            <Route path="civil-litigation" element={<CivilLitigation />} />
            <Route path="commercial-litigation" element={<CommercialLitigation />} />
            <Route path="company-formation-and-registration" element={<CompanyFormationandRegistration />} />
            <Route path="constitutional-law" element={<ConstitutionalLaw />} />
            <Route path="contracts" element={<Contracts />} />
            <Route path="criminal-prosecution-and-defense" element={<CriminalProsecutionandDefense />} />
            <Route path="domestic-and-international-arbitration" element={<DomesticandInternationalArbitration />} />
            <Route path="environmental-law" element={<EnvironmentalLaw />} />
            <Route path="family-matters-and-child-custody" element={<FamilyMattersandChildCustody />} />
            <Route path="global-investment-and-citizenship" element={<GlobalInvestmentandCitizenship />} />
            <Route path="government-contracts-and-litigation" element={<GovernmentContractsandLitigation />} />
            <Route path="intellectual-property" element={<IntellectualProperty />} />

            <Route path="meetings" element={<Meeting />} />
            <Route path="meetings/:id" element={<MeetingDetails />} />
            <Route path="cases" element={<Case />} />
            <Route path="cases/:id" element={<CaseDetails />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="blogs/:id" element={<BlogDetails />} />

            <Route path="contact" element={<Contact />} />
            <Route path="career" element={<Career />} />
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
            <Route path="add-meeting" element={<PrivateRouter><CreateMeetingForm /></PrivateRouter>} />
            <Route path="add-case" element={<PrivateRouter><CreateCaseForm /></PrivateRouter>} />
            <Route path="add-blog" element={<PrivateRouter><CreateBlogForm /></PrivateRouter>} />
            <Route path="add-live" element={<PrivateRouter><CreateLiveForm /></PrivateRouter>} />
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
  const includedRoutes = ["/","/services", "/meetings", "/meetings/:id", "/cases", "/cases/:id", "/blogs", "/blogs/:id", "/contact", "/career"];

  const shouldShowNavbar = includedRoutes.some((pattern) => matchPath(pattern, location.pathname));

  // Check if the current route is excluded
  if (shouldShowNavbar) {
    return <Navbar />;
  }

  return null;
}