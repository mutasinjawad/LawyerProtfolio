import React, { useEffect, useState } from 'react';
import { Element, Link } from "react-scroll";
import Lawyer from '../../assets/images/lawyer.jpg';
import SupremeCourt from '../../assets/images/supreme-court.png';
import SupremeCourt2 from '../../assets/images/supreme-court2.png';
import Button from '../../components/Button';
import { Facebook, Instagram, Linkedin, Send } from 'lucide-react';

const About = () => {

    const [iconSize, setIconSize] = useState(24); // Icon size
    const [currentImage, setCurrentImage] = useState(0); // Current image index

    const images = [
        SupremeCourt,
        SupremeCourt2
    ]

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

    // Change image
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    //     }, 5000);

    //     return () => clearInterval(interval);
    // }, [images.length]);

return (
    // Start of the About component
    <Element className="flex items-center justify-center" name="about">
        <div className='flex flex-col-reverse lg:flex-row items-center justify-between w-[180vh] lg:mx-36 mx-8 lg:my-10 my-14 lg:h-[70vh]'>

            <div className='lg:w-1/2 flex flex-col items-start lg:pr-8'>
                <h1 className='font-pbold xl:text-[50px] lg:text-[39px] text-3xl text-secondary mb-4'>
                    Biplab Kumar Poddar
                </h1>
                <h2 className='font-pregular xl:text-lg text-base text-gray-600 mb-8'>
                    Advocate, Supreme Court of Bangladesh
                </h2>
                <p className='font-pregular xl:text-base text-sm text-gray-800 mb-8'>
                    With 20+ years of legal experience across Bangladesh, the UK, and India, I am a seasoned lawyer and International Bar Association member. I've represented cases at the International Court of Justice and UK Supreme Court, and currently act as the legal representative for two Bangladeshi banks in India. I'm also dedicated to public interest law, filing cases in the Supreme Court of Bangladesh.
                </p>
                <Link to='contact' smooth={true} offset={-200} duration={500}>
                    <Button text='Contact Me' Icon={Send} route='#' iconSize={iconSize} />
                </Link>
                <div className='flex space-x-4 mt-6'>
                    <a href='https://www.facebook.com/muhtasin.jawad.1' target='_blank' rel='noopener noreferrer'><Facebook className="text-black hover:text-secondary lg:w-6 lg:h-6" size={iconSize} /></a>
                    <a href='#' target='_blank' rel='noopener noreferrer'><Instagram className="text-black hover:text-secondary lg:w-6 lg:h-6" size={iconSize} /></a>
                    <a href='#' target='_blank' rel='noopener noreferrer'><Linkedin className="text-black hover:text-secondary lg:w-6 lg:h-6" size={iconSize} /></a>
                </div>
            </div>

            {/* Lawyer Image */}
            <div className="xl:m-16">
                <img
                    src={Lawyer}
                    alt="Lawyer"
                    className="xl:w-[40vh] lg:w-[28vh] w-[20vh] rounded-full border-8 border-white"
                />
            </div>

            
            {/* <div className='absolute inset-y-[100px] right-68 w-full h-[500px] z-[-30] rounded-3xl bg-cover bg-[center_top_70%]'
                style={{ backgroundImage: `url(${images[currentImage]})` }}>
                <img src={SupremeCourt} alt="Bangladesh Supreme Court" className='object-cover z-[-30] opacity-50 w-auto'/>
            </div> */}
        </div>
    </Element>
  );
};

export default About;