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

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
            alert('Copied to clipboard');
            });
    };

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

  return (
    <Element className="flex flex-col items-center justify-between lg:m-36 mx-12 lg:h-[70vh]" name="contact">
        <h1 className="font-psemibold lg:text-[60px] text-[34px] text-black">Contact Me</h1>
        <div className="flex lg:flex-row flex-col justify-center items-start w-full lg:gap-16 gap-6 lg:mb-0 mb-8 lg:mt-0 mt-8">
            <div className='flex flex-col items-center justify-between space-y-6 w-full lg:h-[50vh]'>
                <div className='flex flex-col items-center justify-center lg:p-8 p-4 h-[20vh] w-full text-black bg-white lg:rounded-3xl rounded-2xl hover:shadow cursor-pointer transition-all duration-300 ease-in-out'
                    onClick={() => {    
                        window.open(
                            'https://mail.google.com/mail/?view=cm&fs=1&to=biplab_poddar@hotmail.com', '_blank'
                        );
                    }}
                >
                    <Mail />
                    <h1 className="font-pregular lg:text-lg text-base text-black mt-4">Email</h1>
                    <span className="font-pregular lg:text-base text-sm text-neutral-500 text-center">biplab_poddar@hotmail.com</span>
                </div>
                <div className='flex flex-col items-center justify-center lg:p-8 p-4 h-[20vh] w-full text-black bg-white lg:rounded-3xl rounded-2xl hover:shadow cursor-pointer transition-all duration-300 ease-in-out'
                onClick={() => copyToClipboard('+8801700587914')}
                >
                    <Phone/>
                    <h1 className="font-pregular lg:text-lg text-base text-black mt-4">Phone</h1>
                    <span className="font-pregular lg:text-base text-sm text-neutral-500 text-center">+8801700587914</span>
                </div>
                <a href="https://maps.app.goo.gl/a6DnJt5z7ypdGFbSA" target="_blank" rel="noopener noreferrer" className='flex flex-col items-center justify-center lg:p-8 p-4 h-[20vh] w-full text-black bg-white lg:rounded-3xl rounded-2xl hover:shadow cursor-pointer transition-all duration-300 ease-in-out'>
                    <MapPin/>
                    <h1 className="font-pregular lg:text-lg text-base text-black mt-4">Location</h1>
                    <span className="font-pregular lg:text-base text-sm text-neutral-500 text-center">109, Annex Extenstion Building, Supreme Court Bar Association</span>
                </a>
            </div>
            <div className='w-full lg:h-[50vh] lg:mt-0 mt-12'>
                <form onSubmit={handleSubmit} className='flex flex-col lg:space-y-[3vh] space-y-[2vh]'>
                    <div className="relative">
                        <label htmlFor="name" className="absolute -top-3 left-1 transfrom translate-x-1/4 px-2 text-sm bg-whiteBg font-plight text-neutral-400">
                            Name
                        </label>
                        <input
                            id="name"
                            value={name}
                            type="text"
                            placeholder="Enter your name"
                            onChange={(e) => setName(e.target.value)}
                            className="w-full lg:h-[9vh] h-[6vh] bg-whiteBg border-2 border-neutral-300 lg:rounded-3xl rounded-2xl font-pregular lg:text-lg text-base focus:border-[#404030] focus:outline-none px-6 py-3"
                        />
                    </div>
                    <div className="relative">
                        <label htmlFor="email" className="absolute -top-3 left-1 transfrom translate-x-1/4 px-2 text-sm bg-whiteBg font-plight text-neutral-400">
                            Email
                        </label>
                        <input
                            id="email"
                            value={email}
                            type="text"
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full lg:h-[9vh] h-[6vh] bg-whiteBg border-2 border-neutral-300 lg:rounded-3xl rounded-2xl font-pregular lg:text-lg text-base focus:border-[#404030] focus:outline-none px-6 py-3"
                        />
                    </div>
                    <div className="relative">
                        <label htmlFor="message" className="absolute -top-3 left-1 transfrom translate-x-1/4 px-2 text-sm bg-whiteBg font-plight text-neutral-400">
                            Message
                        </label>
                        <textarea 
                            id="message"
                            value={message}
                            placeholder="Write your message"
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full h-[24vh] bg-whiteBg border-2 border-neutral-300 lg:rounded-3xl rounded-2xl font-pregular lg:text-lg text-base focus:border-[#404030] focus:outline-none resize-none px-6 py-3"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <Button text="Send" Icon={Send} route="#" classstyle="ml-3 lg:w-6 lg:h-6 w-4 h-4"/>
                        {status && <p className={`text-center mt-4 font-pregular text-${statusColor}-700 text-lg`}>{status}</p>}
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