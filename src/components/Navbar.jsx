import React from 'react'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from "motion/react"

function Navbar() {
    const [mobileDrawer, setMobileDrawer] = useState(false)
    const toggleMobileDrawer = () => {setMobileDrawer(!mobileDrawer)}
    return (
        <>
        <nav className={`sticky w-full z-40 top-0 py-8 bg-whiteBg lg:border-b border-neutral-200`}>
            <div className="px-4 lg:mx-36 flex justify-end">
                <div className="flex items-center justify-end">
                    <ul className="hidden lg:flex justify-center space-x-14 font-pmedium text-[20px]">
                        <li key="about">
                            <a href="#">About</a>
                        </li>
                        <li key="meeting">
                            <a href="#">Meetings</a>
                        </li>
                        <li key="case">
                            <a href="#">Cases</a>
                        </li>
                        <li key="blog">
                            <a href="#">Blog</a>
                        </li>
                        <li key="live">
                            <a href="#">Live</a>
                        </li>
                        <li key="contact">
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="lg:hidden flex items-center justify-end">
                    <button onClick={toggleMobileDrawer}>
                        {mobileDrawer ? <X color="#E0115F"/> : <Menu />}
                    </button>
                </div>
            </div>
        </nav>
        {mobileDrawer && (
            <div className="fixed w-full h-screen bg-white bg-opacity-10 backdrop-blur-sm z-40" 
                onClick={toggleMobileDrawer}
            >
            </div>
        )}
        <AnimatePresence mode="wait">
            {mobileDrawer && (
                <motion.div
                    initial={{ opacity: 0, x: "100%" }}
                    animate={{ opacity: 1, x: "0" }}
                    exit={{ opacity:0, x: "100%" }}
                    transition={{ duration: 0.2 }}
                    className="fixed right-0 w-[32vh] h-[90vh] p-12 flex justify-end items-start bg-black rounded-l-2xl z-40"
                >
                    <ul className="flex flex-col items-end space-y-10 font-pregular text-white">
                        <li key="about">
                            <a href="#">About</a>
                        </li>
                        <li key="meeting">
                            <a href="#">Meetings</a>
                        </li>
                        <li key="case">
                            <a href="#">Cases</a>
                        </li>
                        <li key="live">
                            <a href="#">Live</a>
                        </li>
                        <li key="contact">
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </motion.div>
            )}
        </AnimatePresence>
        </>
    )
}

export default Navbar