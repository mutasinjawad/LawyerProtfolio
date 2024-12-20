import React, { useEffect, useState } from 'react';
import { Element, Link } from "react-scroll";
import Lawyer from '../../assets/images/lawyer.jpg';
import Button from '../../components/Button';
import { Facebook, Instagram, Linkedin, Send } from 'lucide-react';

const About = () => {

    const [iconSize, setIconSize] = useState(24); // Icon size

    // Update icon size
    const updateIconSize = () => {
        const width = window.innerWidth;

        if (width >= 1280) {
            // XL screens
            setIconSize(20);
        } else if (width >= 1024) {
            // LG screens
            setIconSize(16);
        } else {
            // Small screens
            setIconSize(14);
        }
    };

    // Event listener for icon size
    useEffect(() => {
        updateIconSize(); // Set initially
        window.addEventListener('resize', updateIconSize);

        return () => {
          window.removeEventListener('resize', updateIconSize); // Cleanup
        };
    }, []);

return (
    // Start of the About component
    <Element className="flex items-center justify-center" name="about">
        <div className='flex flex-col-reverse lg:flex-row items-center justify-between w-[180vh] lg:mx-36 mx-8 lg:my-10 my-14 lg:h-[70vh]'>

            {/* Social Media Platforms in Large View */}
            <div className="hidden lg:flex flex-col h-full justify-center items-center space-y-10 lg:w-1/12 ">
                <a href="https://www.facebook.com/muhtasin.jawad.1" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center bg-black w-12 h-12 rounded-full hover:bg-secondary transition duration-300 ease-in-out cursor-pointer outline-none'>
                    <Facebook className='text-white w-6 h-6' strokeWidth={1.5}/>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center bg-black w-12 h-12 rounded-full hover:bg-secondary transition duration-300 ease-in-out cursor-pointer outline-none'>
                    <Instagram className='text-white w-6 h-6' strokeWidth={1.75}/>
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center bg-black w-12 h-12 rounded-full hover:bg-secondary transition duration-300 ease-in-out cursor-pointer outline-none'>
                    <Linkedin className='text-white w-6 h-6' strokeWidth={1.5}/>
                </a>
            </div>

            {/* About Section */}
            <div className="text-left lg:w-2/5 lg:p-2 p-6 lg:mx-4">
                <h1 className="font-pbold xl:text-[50px] lg:text-[39px] text-3xl text-black leading-[1.0] lg:mb-2 mb-4">Biplab Kumar Poddar</h1>
                <h2 className="font-pregular xl:text-lg text-base text-gray-600 lg:mb-10 mb-8">Advocate, Supreme Court of Bangladesh</h2>
                <p className="font-pregular xl:text-base text-sm text-gray-800 lg:mb-12 mb-8">
                With 20+ years of legal experience across the Bangladesh, United Kingdom, and India, I am a seasoned lawyer and International 
                Bar Association member. I have represented cases at the International Court of Justice and United Kingdom Supreme Court, and 
                currently act as the legal representative for two Bangladeshi banks in India. I am also dedicated to public interest law, 
                filing cases in the Supreme Court of Bangladesh.
                </p>
                <Link to="contact" smooth={true} offset={-200} duration={500} >
                    <Button text="Contact Me" Icon={Send} route="#" iconSize={iconSize}/>
                </Link>
            </div>

            {/* Lawyer Image and Small View */}
            <div className="flex relative justify-center items-center lg:w-auto w-full md:pb-6">

                {/* Social Media Platforms in Small View */}
                <div className="lg:hidden absolute left-6 flex flex-col justify-start space-y-7">
                    <a href="https://www.facebook.com/muhtasin.jawad.1" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center bg-black w-8 h-8 rounded-full hover:bg-secondary transition duration-300 ease-in-out cursor-pointer outline-none'>
                        <Facebook className='text-white w-4 h-4' strokeWidth={1.5}/>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center bg-black w-8 h-8 rounded-full hover:bg-secondary transition duration-300 ease-in-out cursor-pointer outline-none'>
                        <Instagram className='text-white w-4 h-4' strokeWidth={1.75}/>
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center bg-black w-8 h-8 rounded-full hover:bg-secondary transition duration-300 ease-in-out cursor-pointer outline-none'>
                        <Linkedin className='text-white w-4 h-4' strokeWidth={1.5}/>
                    </a>
                </div>

                {/* Lawyer Image */}
                <div className="xl:m-16">
                    <img
                        src={Lawyer}
                        alt="Lawyer"
                        className="xl:w-[40vh] lg:w-[28vh] w-[20vh] rounded-full"
                    />
                </div>
            </div>

        </div>
    </Element>
  );
};

export default About;