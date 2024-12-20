import React from 'react'
import { useEffect, useState } from 'react';
import { Element } from "react-scroll";
import { Facebook, Instagram, Linkedin, Send, Mail, Phone, MapPin } from 'lucide-react';
import Button from '../Button'

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
            setIconSize(20);
        } else if (width >= 1024) {
            // LG screens
            setIconSize(16);
        } else {
            // Small screens
            setIconSize(14);
        }
    };

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

    // Contact Component Start
    <Element className="relative flex flex-col items-center justify-between xl:m-16 xl:mb-36 lg:mb-24 mb-0 lg:m-8 mx-10 xl:h-[65vh] lg:h-[62vh]" name="contact">

        {/* Contact Title */}
        <h1 className="font-psemibold xl:text-[60px] lg:text-[45px] text-[34px] text-black">Contact Me</h1>

        {/* Contact Box */}
        <div className="flex lg:flex-row flex-col justify-center items-start w-full lg:gap-16 gap-6 lg:mb-0 mb-8 lg:mt-14 mt-8">
            
            {/* Icon Box */}
            <div className='flex flex-col items-center space-y-4 lg:w-2/5 w-full lg:h-full'>

                {/* Email */}
                <div className='flex flex-col items-center justify-center lg:p-6 p-4 w-full h-full text-black bg-white lg:rounded-3xl rounded-2xl hover:shadow cursor-pointer transition-all duration-300 ease-in-out'
                    onClick={() => {    
                        window.open(
                            'https://mail.google.com/mail/?view=cm&fs=1&to=biplab_poddar@hotmail.com', '_blank'
                        );
                    }}
                >
                    <Mail size={iconSize}/>
                    <h1 className="font-pmedium xl:text-base text-sm text-black xl:mt-4 mt-2">Email</h1>
                    <span className="font-pregular text-gray-500 xl:text-sm text-[12px] text-center">biplab_poddar@hotmail.com</span>
                </div>

                {/* Phone */}
                <div className='flex flex-col items-center justify-center lg:p-6 p-4 w-full h-full text-black bg-white lg:rounded-3xl rounded-2xl hover:shadow cursor-pointer transition-all duration-300 ease-in-out'
                onClick={() => copyToClipboard('+8801700587914')}
                >
                    <Phone size={iconSize}/>
                    <h1 className="font-pmedium xl:text-base text-sm text-black xl:mt-4 mt-2">Phone</h1>
                    <span className="font-pregular text-gray-500 xl:text-sm text-[12px] text-center">+8801700587914</span>
                </div>

                {/* Location */}
                <a href="https://maps.app.goo.gl/a6DnJt5z7ypdGFbSA" target="_blank" rel="noopener noreferrer" className='flex flex-col items-center justify-center lg:p-6 p-4 w-full h-full text-black bg-white lg:rounded-3xl rounded-2xl hover:shadow cursor-pointer transition-all duration-300 ease-in-out'>
                    <MapPin size={iconSize}/>
                    <h1 className="font-pmedium xl:text-base text-sm text-black xl:mt-4 mt-2">Location</h1>
                    <span className="font-pregular text-gray-500 xl:text-sm text-[12px] text-center">109, Annex Extenstion Building, Supreme Court Bar Association</span>
                </a>
            </div>

            {/* Form Box */}
            <div className='w-full lg:h-full lg:mt-0 mt-12'>
                <form onSubmit={handleSubmit} className='flex flex-col lg:h-full md:justify-between space-y-3'>

                    {/* Name */}
                    <div className="relative">
                        <label htmlFor="name" className="absolute lg:-top-3 -top-2 left-1 transfrom translate-x-1/4 px-2 lg:text-sm text-[11px] bg-whiteBg font-plight text-neutral-400">
                            Name
                        </label>
                        <input
                            id="name"
                            value={name}
                            type="text"
                            placeholder="Enter your name"
                            onChange={(e) => setName(e.target.value)}
                            className="w-full xl:h-[8vh] lg:h-[9vh] bg-whiteBg border-2 border-neutral-300 lg:rounded-2xl rounded-xl font-pregular xl:text-lg text-sm focus:border-[#404030] focus:outline-none lg:px-6 px-3 lg:py-3 py-2 xl:mb-4"
                        />
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <label htmlFor="email" className="absolute lg:-top-3 -top-2 left-1 transfrom translate-x-1/4 px-2 lg:text-sm text-[11px] bg-whiteBg font-plight text-neutral-400">
                            Email
                        </label>
                        <input
                            id="email"
                            value={email}
                            type="text"
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full xl:h-[8vh] lg:h-[9vh] bg-whiteBg border-2 border-neutral-300 lg:rounded-2xl rounded-xl font-pregular xl:text-lg text-sm focus:border-[#404030] focus:outline-none lg:px-6 px-3 lg:py-3 py-2 xl:mb-4"
                        />
                    </div>

                    {/* Message */}
                    <div className="relative">
                        <label htmlFor="message" className="absolute lg:-top-3 -top-2 left-1 transfrom translate-x-1/4 px-2 lg:text-sm text-[11px] bg-whiteBg font-plight text-neutral-400">
                            Message
                        </label>
                        <textarea 
                            id="message"
                            value={message}
                            placeholder="Write your message"
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full xl:h-[25vh] lg:h-[23vh] h-[30vh] bg-whiteBg border-2 border-neutral-300 lg:rounded-2xl rounded-xl font-pregular xl:text-lg text-sm focus:border-[#404030] focus:outline-none resize-none lg:px-6 px-3 lg:py-3 py-2 xl:mb-2"
                        />
                    </div>

                    {/* Send Button & Social Media */}
                    <div className="flex justify-between items-center">

                        {/* Send Button */}
                        <Button text="Send" Icon={Send} route="#" iconSize={iconSize}/>
                        {status && <p className={`text-center mt-4 font-pregular text-${statusColor}-700 text-lg`}>{status}</p>}

                        {/* Social Media */}
                        <div className='flex items-center justify-center gap-x-6 mr-2'>
                            <a href="https://www.facebook.com/muhtasin.jawad.1" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center bg-black lg:w-12 lg:h-12 w-10 h-10 rounded-full hover:bg-secondary transition duration-300 ease-in-out cursor-pointer outline-none'>
                                <Facebook className='text-white' strokeWidth={1.5}/>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center bg-black lg:w-12 lg:h-12 w-10 h-10 rounded-full hover:bg-secondary transition duration-300 ease-in-out cursor-pointer outline-none'>
                                <Instagram className='text-white' strokeWidth={1.75}/>
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center bg-black lg:w-12 lg:h-12 w-10 h-10 rounded-full hover:bg-secondary transition duration-300 ease-in-out cursor-pointer outline-none'>
                                <Linkedin className='text-white' strokeWidth={1.5}/>
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </Element>
  )
}

export default Contact