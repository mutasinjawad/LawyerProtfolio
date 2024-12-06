import React from 'react';
import Lawyer from '../assets/images/lawyer.jpg';
import law from '../assets/images/law.jpg';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between lg:mx-36 mx-8 lg:my-16 my-14 lg:h-[70vh]" id="about">
        <div className="hidden lg:flex flex-col h-full justify-center items-center space-y-10 lg:w-1/12">
            <a href="https://www.facebook.com/muhtasin.jawad.1" target="_blank" rel="noopener noreferrer" className='text-xl text-black hover:text-[#505050] transition duration-300 ease-in-out cursor-pointer'>
                <FontAwesomeIcon icon={faFacebook} size='2xl'/>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className='text-xl text-black hover:text-[#505050] transition duration-300 ease-in-out cursor-pointer'>
                <FontAwesomeIcon icon={faInstagram} size="2xl"/>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className='text-xl text-black hover:text-[#505050] transition duration-300 ease-in-out cursor-pointer'>
                <FontAwesomeIcon icon={faLinkedin} size="2xl"/>
            </a>
        </div>
        <div className="text-left lg:w-2/5 lg:p-0 p-6">
            <h1 className="font-pbold lg:text-[60px] text-[35px] text-black leading-[1.0] lg:mb-2 mb-4">Biplab Kumar Poddar</h1>
            <h2 className="font-pregular lg:text-[20px] text-[18px] text-gray-500 lg:mb-10 mb-8">Advocate, Supreme Court of Bangladesh</h2>
            <p className="font-pregular lg:text-[23px] text-[15px] text-black lg:mb-16 mb-8">
            With 20+ years of legal experience across the Bangladesh, United Kingdom, and India, I am a seasoned lawyer and International 
            Bar Association member. I have represented cases at the International Court of Justice and United Kingdom Supreme Court, and 
            currently act as the legal representative for two Bangladeshi banks in India. I am also dedicated to public interest law, 
            filing cases in the Supreme Court of Bangladesh.
            </p>
            <Button text="Contact Me" icon={faPaperPlane} route="#" classStyle="ml-6"/>
        </div>
        <div className="flex relative justify-center items-center lg:w-auto w-full">
            <div className="lg:hidden absolute left-6 flex flex-col justify-start space-y-7">
            <a href="https://www.facebook.com/muhtasin.jawad.1" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size='lg'/>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="lg"/>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="lg"/>
            </a>
            </div>
            <div className="lg:m-16 mx-4">
                <img
                    src={Lawyer}
                    alt="Lawyer"
                    className="lg:w-[40vh] w-[20vh] rounded-full"
                />
            </div>
        </div>
    </div>
  );
};

export default About;