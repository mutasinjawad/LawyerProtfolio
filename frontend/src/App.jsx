import { BrowserRouter, Routes, Route } from "react-router"
import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/hero-page/Hero"
import Meeting from "./components/Meeting"
import Case from "./components/Case"
import Blog from "./components/Blog"

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