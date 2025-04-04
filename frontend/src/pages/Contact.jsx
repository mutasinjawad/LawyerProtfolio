import React from 'react'
import { useState, useEffect } from 'react';
import { Element } from "react-scroll";
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Linkedin } from 'lucide-react';
import News from '../components/NewsTicker/News';
import Map from '../components/Map';
import Button from '../components/Button';

const Contact = () => {
        // State to hold form data
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [message, setMessage] = useState('');
    
        // State for form submission status
        const [status, setStatus] = useState('');
        const [statusColor, setStatusColor] = useState('');
    
        const [iconSize, setIconSize] = useState(24); // Icon size
    
        // Update icon size
        const updateIconSize = () => {
            const width = window.innerWidth;
    
            if (width >= 1280) {
                // XL screens
                setIconSize(16);
            } else if (width >= 775) {
                // LG screens
                setIconSize(14);
            } else if (width >= 640) {
                // Small screens
                setIconSize(10);
            } else {
                // Extra small screens
                setIconSize(9);
            }
        }
    
        // Copy to clipboard
        const copyToClipboard = (text) => {
            navigator.clipboard.writeText(text)
                .then(() => {
                alert('Copied to clipboard');
                });
        };
    
        // Handle form submission
        const handleSubmit = async (e) => {
            e.preventDefault();
    
            // Check if all fields are filled
            if (!name || !email || !message) {
                setStatusColor('red');
                setStatus('Please fill in all the fields');
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }
    
            const contactData = {
                name,
                email,
                message,
            };
    
            try {
                // Send the form data to the backend
                const response = await fetch('http://localhost:5000/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contactData),
                });
    
                if (response.ok) {
                setStatusColor('green');
                setStatus('Message sent successfully');
                setName('');
                setEmail('');
                setMessage('');
                } else {
                setStatusColor('red');
                setStatus('Failed to send message');
                }
            } catch (error) {
                setStatusColor('red');
                setStatus('Error: ' + error.message);
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
        <Element className='flex flex-col items-center justify-between w-full h-full pt-32' name='career'>
            <div className='flex flex-col items-start justify-between xl:w-[1310px] lg:w-[1060px] md:w-[800px] sm:w-[500px] xs:w-[440px] w-[300px] xl:p-4 md:px-8 sm:px-8 xs:px-6 px-2 bg-white rounded-[5px]'>
                {/* Contact Title */}
                <h1 className="font-rbold mb-8 text-primary text-[30px]">Contact Me</h1>

                {/* Contact Box */}
                <div className="flex flex-col items-start justify-center w-full gap-6 lg:flex-row lg:gap-6">
                    
                    {/* Icon Box */}
                    <div className='flex flex-col items-center w-full space-y-4 lg:w-2/6 lg:h-full'>

                        {/* Email */}
                        <div className='flex flex-col items-center justify-center w-full h-full p-4 text-black transition-all duration-300 ease-in-out cursor-pointer bg-whiteBg lg:p-6 rounded-[8px] hover:shadow'
                            onClick={() => {    
                                window.open(
                                    'https://mail.google.com/mail/?view=cm&fs=1&to=biplab_poddar@hotmail.com', '_blank'
                                );
                            }}
                        >
                            <Mail size={iconSize}/>
                            <h1 className="mt-2 text-sm text-black font-rmedium xl:text-base xl:mt-4">Email</h1>
                            <span className="font-rregular text-gray-500 xl:text-sm text-[12px] text-center">biplab_poddar@hotmail.com</span>
                        </div>

                        {/* Phone */}
                        <div className='flex flex-col items-center justify-center w-full h-full p-4 text-black transition-all duration-300 ease-in-out cursor-pointer bg-whiteBg lg:p-6 rounded-[8px] hover:shadow'
                        onClick={() => copyToClipboard('+8801700587914')}
                        >
                            <Phone size={iconSize}/>
                            <h1 className="mt-2 text-sm text-black font-rmedium xl:text-base xl:mt-4">Phone</h1>
                            <span className="font-rregular text-gray-500 xl:text-sm text-[12px] text-center">+8801700587914</span>
                        </div>

                        {/* Location */}
                        <a href="https://maps.app.goo.gl/a6DnJt5z7ypdGFbSA" target="_blank" rel="noopener noreferrer" className='flex flex-col items-center justify-center w-full h-full p-4 text-black transition-all duration-300 ease-in-out cursor-pointer bg-whiteBg lg:p-6 rounded-[8px] hover:shadow'>
                            <MapPin size={iconSize}/>
                            <h1 className="mt-2 text-sm text-black font-rmedium xl:text-base xl:mt-4">Location</h1>
                            <span className="font-rregular text-gray-500 xl:text-sm text-[12px] text-center">109, Annex Extenstion Building, Supreme Court Bar Association</span>
                        </a>
                    </div>

                    {/* Form Box */}
                    <div className='w-full mt-12 lg:w-4/6 lg:h-full lg:mt-0'>
                        <form onSubmit={handleSubmit} className='flex flex-col w-full space-y-3 lg:h-full md:justify-between'>

                            {/* Name */}
                            <div className="relative w-full">
                                <label htmlFor="name" className="absolute lg:-top-3 -top-2 left-1 transfrom translate-x-1/4 px-2 lg:text-sm text-[11px] bg-white font-rlight text-neutral-400">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    value={name}
                                    type="text"
                                    placeholder="Enter your name"
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full xl:h-[60px] lg:h-[9vh] bg-white border-[1px] border-neutral-300 lg:rounded-2xl rounded-xl font-rregular xl:text-lg text-sm focus:border-[#404030] focus:outline-none lg:px-6 px-3 lg:py-3 py-2 xl:mb-4"
                                />
                            </div>

                            {/* Email */}
                            <div className="relative">
                                <label htmlFor="email" className="absolute lg:-top-3 -top-2 left-1 transfrom translate-x-1/4 px-2 lg:text-sm text-[11px] bg-white font-rlight text-neutral-400">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    value={email}
                                    type="text"
                                    placeholder="Enter your email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full xl:h-[60px] lg:h-[9vh] bg-white border-[1px] border-neutral-300 lg:rounded-2xl rounded-xl font-rregular xl:text-lg text-sm focus:border-[#404030] focus:outline-none lg:px-6 px-3 lg:py-3 py-2 xl:mb-4"
                                />
                            </div>

                            {/* Message */}
                            <div className="relative">
                                <label htmlFor="message" className="absolute lg:-top-3 -top-2 left-1 transfrom translate-x-1/4 px-2 lg:text-sm text-[11px] bg-white font-rlight text-neutral-400">
                                    Message
                                </label>
                                <textarea 
                                    id="message"
                                    value={message}
                                    placeholder="Write your message"
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full xl:h-[300px] lg:h-[23vh] h-[30vh] bg-white border-[1px] border-neutral-300 lg:rounded-2xl rounded-xl font-rregular xl:text-lg text-sm focus:border-[#404030] focus:outline-none resize-none lg:px-6 px-3 lg:py-3 py-2 xl:mb-2"
                                />
                            </div>

                            {/* Send Button & Social Media */}
                            <div className="flex items-center justify-between">

                                {/* Send Button */}
                                <Button text="Send" Icon={Send} route="#" iconSize={iconSize}/>
                                {status && <p className={`text-center font-rregular text-${statusColor}-700 xl:text-lg text-sm`}>{status}</p>}

                                {/* Social Media */}
                                <div className='flex items-center justify-center m-2 space-x-4'>
                                    <a href='https://www.facebook.com/muhtasin.jawad.1' target='_blank' rel='noopener noreferrer'><Facebook className="w-3 h-3 text-black duration-150 sm:w-4 sm:h-4 hover:text-secondary xl:w-5 xl:h-5" /></a>
                                    <a href='#' target='_blank' rel='noopener noreferrer'><Instagram className="w-3 h-3 text-black duration-150 sm:w-4 sm:h-4 hover:text-secondary xl:w-5 xl:h-5" /></a>
                                    <a href='#' target='_blank' rel='noopener noreferrer'><Linkedin className="w-3 h-3 text-black duration-150 sm:w-4 sm:h-4 hover:text-secondary xl:w-5 xl:h-5" /></a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
            <div className='mb-4 flex flex-col items-start justify-between xl:w-[1310px] lg:w-[1060px] md:w-[800px] sm:w-[500px] xs:w-[440px] w-[300px] xl:p-4 md:px-8 sm:px-8 xs:px-6 px-2 bg-white rounded-[5px]'>
                <Map />
            </div>
        <News />
        </Element>
    )
}

export default Contact