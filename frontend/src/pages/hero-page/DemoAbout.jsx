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

return (
    // Start of the About component
    <Element className="flex justify-center xl:mt-20 xl:mx-16 xl:mb-24 lg:mt-8 lg:mb-20 md:my-16 md:mx-10 mt-16 mb-8 mx-10 xl:h-[70vh] lg:h-[62vh]'" name="about">
        
        <div className='flex items-center justify-center flex-col xl:w-[140vh] lg:w-[100vh] w-full h-full'>
            {/* Cover Photo */}
            <div className='w-full aspect-[27/9] flex items-end lg:px-8 lg:pb-6 md:px-4 md:pb-3 md:rounded-3xl rounded-xl overflow-hidden'
                style={{
                    backgroundImage: `linear-gradient(to bottom left, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.8) 60%, rgba(0, 0, 0, 1)), url('/supreme-court2.png')`,
                    backgroundPosition: 'center top 70%',
                    backgroundSize: 'cover',
                    backgroundBlendMode: 'overlay'    
                }}>
                <h1 className='font-pbold xl:text-[50px] lg:text-[39px] text-3xl text-white hidden md:block'>
                    Biplab Kumar Poddar
                </h1>
            </div>

            {/* About Section & Photo */}
            <div className='h-2/3 flex md:flex-row flex-col-reverse md:items-start items-center md:pt-6 lg:px-8 md:pl-4 md:pr-8 justify-between'>

                {/* About */}
                <div className='lg:w-1/2 md:w-2/3 flex flex-col items-start lg:pr-8'>
                    <h1 className='font-pbold xl:text-[50px] lg:text-[39px] text-3xl text-secondary block md:hidden'>
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

                {/* Photo */}
                <div className="relative lg:bottom-40 md:bottom-20 bottom-8">
                    <img
                        src={Lawyer}
                        alt="Lawyer"
                        className="xl:w-[30vh] lg:w-[28vh] w-[14vh] rounded-full lg:border-8 md:border-4 border-2 border-white"
                    />
                </div>
            </div>
        </div>
    </Element>
  );
};

export default About;