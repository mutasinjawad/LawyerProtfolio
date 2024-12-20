import { BrowserRouter, Routes, Route } from "react-router"
import { useEffect, useState } from "react"
import Navbar from "./pages/Navbar"
import Hero from "./pages/hero-page/Hero"
import Meeting from "./pages/Meeting"
import Case from "./pages/Case"
import Blog from "./pages/Blog"

export default function App() {

  return (
    <BrowserRouter>
      <div >
        <Navbar />
        <Routes>
          <Route index element={<Hero />} />
          <Route path="meetings" element={<Meeting />} />
          <Route path="cases" element={<Case />} />
          <Route path="blogs" element={<Blog />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}