import { BrowserRouter, Routes, Route } from "react-router"
import Navbar from "./components/Navbar"
import Hero from "./components/hero-page/Hero"
import Meeting from "./components/Meeting"
import Case from "./components/Case"

export default function App() {

  return (
    <BrowserRouter>
      <div >
        <Navbar />
        <Routes>
          <Route index element={<Hero />} />
          <Route path="meetings" element={<Meeting />} />
          <Route path="cases" element={<Case />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

// const ConditionalNavbar = () => {
//   const location = useLocation(); // Get current route
//   const navigate = useNavigate(); // For back navigation

//   // List of extended page paths
//   const extendedPages = ["/meetings", "/blogs"];

//   if (extendedPages.includes(location.pathname)) {
//     // Render Back Button for extended pages
//     return (
//       <div className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 flex items-center">
//         <button
//           onClick={() => navigate(-1)} // Navigate to previous page
//           className="text-blue-400 hover:text-blue-600 font-bold"
//         >
//           ← Back
//         </button>
//       </div>
//     );
//   }

//   // Render Navbar for other routes
//   return <Navbar />;
// };